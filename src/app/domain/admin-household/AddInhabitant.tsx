import { useEffect, useState } from 'react';
import PersonalForm, {
  householdRole,
  inhabitantCivilStatus,
  inhabitantGender,
} from './inhabitant/PersonalForm';
import OtherForm, { studentDetails } from './inhabitant/OtherForm';
import HealthForm, { inhabitantBloodType } from './inhabitant/HealthForm';
import './AddInhabitant.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../core/utils/axiosInstance';

export interface InhabitantFormData {
  profilePhoto: File | null;
  firstName: string;
  householdName: string;
  middleName: string;
  lastName: string;
  householdRole: householdRole | null;
  inhabitantGender: inhabitantGender | null;
  isRepresentative: boolean;
  birthday: string;
  email: string;
  civilStatus: inhabitantCivilStatus | null;
  mobileNumber: string;
  bloodType: inhabitantBloodType | null;
  healthRemarks: string;
  isPersonWithDisability: boolean | null;
  disabilityDetails: string;
  isPregnant: boolean | null;
  expectedLabourDate: string;
  isSingleParent: boolean | null;
  isStudent: boolean | null;
  studentDetails: studentDetails | null;
  isRegisteredVoter: boolean;
  placeOfRegistration: string;
  occupation: string;
  currentOccupationPlace: string;
}

const initialFormData: InhabitantFormData = {
  profilePhoto: null,
  firstName: '',
  householdName: '',
  middleName: '',
  lastName: '',
  householdRole: null,
  inhabitantGender: null,
  isRepresentative: false,
  birthday: '',
  email: '',
  civilStatus: null,
  mobileNumber: '',
  bloodType: null,
  healthRemarks: '',
  isPersonWithDisability: null,
  disabilityDetails: '',
  isPregnant: null,
  expectedLabourDate: '',
  isSingleParent: null,
  isStudent: null,
  studentDetails: null,
  isRegisteredVoter: false,
  placeOfRegistration: '',
  occupation: '',
  currentOccupationPlace: '',
};

const AddInhabitant: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<
    'personal' | 'health' | 'other'
  >('personal');
  const [formData, setFormData] = useState<InhabitantFormData>(initialFormData);
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  console.log('params:', params);
  const { householdUuid, accountUuid } = params as {
    householdUuid: string;
    accountUuid?: string;
  };

  useEffect(() => {
    console.log('householdUuid:', householdUuid);
    if (accountUuid) {
      axiosInstance
        .get(`/inhabitant/${accountUuid}`)
        .then((response) => {
          setFormData(response.data);
          setIsEditMode(true);
        })
        .catch((error) => {
          console.error('Error fetching household data:', error);
        });
    }
  }, [accountUuid, householdUuid]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    }
  };

  const handleDropdownChange = (
    name: string,
    value:
      | householdRole
      | inhabitantGender
      | inhabitantCivilStatus
      | inhabitantBloodType
      | studentDetails
      | null
  ) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleBooleanChange = (
    name: keyof InhabitantFormData,
    value: boolean | null
  ) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!householdUuid) {
      console.error('Household UUID is undefined!');
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      const value = formData[key as keyof InhabitantFormData];
      if (value !== null && value !== undefined) {
        if (value instanceof File) {
          formDataToSend.append(key, value);
        } else {
          formDataToSend.append(key, value.toString());
        }
      }
    });

    try {
      const response = isEditMode
        ? await axiosInstance.patch(
            `/inhabitant/update-inhabitant/${householdUuid}`,
            formDataToSend,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          )
        : await axiosInstance.post(
            `/inhabitant/create-inhabitant/${householdUuid}`,
            formDataToSend,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          );
      isEditMode
        ? alert('Updated Successfully!')
        : alert('Added Successfully!');
      console.log(response.data);
      navigate('/dashboard/household');
    } catch (error: any) {
      if (error.response) {
        alert('Error attempt!');
        console.error(
          'There was an error submitting the form!',
          error.response.data
        );
      } else if (error.request) {
        console.error('No response received from the server!', error.request);
      } else {
        console.error('Error', error.message);
      }
    }
  };

  return (
    <div className="Add Inhabitant">
      <section>
        <div className="header-title">
          <h1>{isEditMode ? 'Edit Inhabitant' : 'Add New Inhabitant'}</h1>
        </div>
        <div className="header-buttons">
          <div>
            <button type="submit" onClick={handleSubmit}>
              {isEditMode ? 'Update' : 'Save'}
            </button>
          </div>
        </div>
      </section>
      <hr></hr>
      <div className="form">
        <section className="household-header">Household Name</section>
        <hr></hr>
        <section className="inhabitant-nav-bar">
          <h2
            onClick={() => setCurrentSection('personal')}
            className={currentSection === 'personal' ? 'active' : ''}
          >
            Personal
          </h2>
          <h2
            onClick={() => setCurrentSection('health')}
            className={currentSection === 'health' ? 'active' : ''}
          >
            Health
          </h2>
          <h2
            onClick={() => setCurrentSection('other')}
            className={currentSection === 'other' ? 'active' : ''}
          >
            Other
          </h2>
          <hr></hr>
        </section>

        <section className="form-section">
          {currentSection === 'personal' && (
            <PersonalForm
              formData={formData}
              handleChange={handleChange}
              handleFileChange={handleFileChange}
              handleDropdownChange={handleDropdownChange}
              handleCheckboxChange={handleCheckboxChange}
            />
          )}

          {currentSection === 'health' && (
            <HealthForm
              formData={formData}
              handleChange={handleChange}
              handleDropdownChange={handleDropdownChange}
              handleCheckboxChange={handleCheckboxChange}
              handleBooleanChange={handleBooleanChange}
            />
          )}

          {currentSection === 'other' && (
            <OtherForm
              formData={formData}
              handleChange={handleChange}
              handleDropdownChange={handleDropdownChange}
              handleCheckboxChange={handleCheckboxChange}
              handleBooleanChange={handleBooleanChange}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default AddInhabitant;
