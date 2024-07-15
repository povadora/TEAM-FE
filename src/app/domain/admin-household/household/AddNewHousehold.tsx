import React, { useEffect, useState } from 'react';
import AddressForm from './AddressForm';
import DetailsForm from './DetailsForm';
import './AddNewHousehold.scss';
import axiosInstance from '../../../core/utils/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';

export interface HouseholdFormData {
  householdPhoto: File | null;
  householdNumber: string;
  householdName: string;
  streetName: string;
  subdivision: string;
  zone: string;
  sitio: string;
  purok: string;
  structureMaterials: string;
  numberOfRooms: string;
  numberOfToilets: string;
  allowBoarders: boolean | null;
  hasRentalPermit: boolean | null;
  hasBackyardGarden: boolean | null;
  otherIncomeSource: string;
  numberOfPets: string;
  numberOfTwoWheeledVehicles: string;
  numberOfThreeWheeledVehicles: string;
  numberOfFourWheeledVehicles: string;
}

const initialFormData: HouseholdFormData = {
  householdPhoto: null,
  householdNumber: '',
  householdName: '',
  streetName: '',
  subdivision: '',
  zone: '',
  sitio: '',
  purok: '',
  structureMaterials: '',
  numberOfRooms: '',
  numberOfToilets: '',
  allowBoarders: null,
  hasRentalPermit: null,
  hasBackyardGarden: null,
  otherIncomeSource: '',
  numberOfPets: '',
  numberOfTwoWheeledVehicles: '',
  numberOfThreeWheeledVehicles: '',
  numberOfFourWheeledVehicles: '',
};

const AddNewHousehold: React.FC = () => {
  const [formData, setFormData] = useState<HouseholdFormData>(initialFormData);
  const [currentSection, setCurrentSection] = useState<'address' | 'details'>(
    'address'
  );
  const [isEditMode, setIsEditMode] = useState(false);
  const { householdUuid } = useParams<{ householdUuid: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (householdUuid) {
      axiosInstance
        .get(`/household/${householdUuid}`)
        .then((response) => {
          setFormData(response.data);
          setIsEditMode(true);
        })
        .catch((error) => {
          console.error('Error fetching household data:', error);
        });
    }
  }, [householdUuid]);

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

  const handleBooleanChange = (
    name: keyof HouseholdFormData,
    value: boolean | null
  ) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      const value = formData[key as keyof HouseholdFormData];
      if (value !== null) {
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
            `/household/update-household/${householdUuid}`,
            formDataToSend,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          )
        : await axiosInstance.post(
            '/household/create-household',
            formDataToSend,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          );

      console.log(response.data);
      navigate('/dashboard/household');
    } catch (error: any) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error(
          'There was an error submitting the form!',
          error.response.data
        );
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response received from the server!', error.request);
      } else {
        // Something else happened in making the request that triggered an error
        console.error('Error', error.message);
      }
    }
  };

  const handleDelete = async () => {
    try {
      if (householdUuid) {
        await axiosInstance.delete(
          `/household/delete-household/${householdUuid}`
        );
        console.log('Household deleted successfully');
        navigate('/dashboard/household');
        // Reset form or redirect to another page
        // setFormData(initialFormData);
        // setIsEditMode(false);
      }
    } catch (error) {
      console.error('There was an error deleting the household!', error);
    }
  };

  return (
    <div className="add-household-container">
      <section className="add-household-header">
        <h1>{isEditMode ? 'Edit Household' : 'Add New Household'}</h1>
        <button type="submit" onClick={handleSubmit}>
          {isEditMode ? 'Update' : 'Save'}
        </button>
        {isEditMode && (
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        )}
      </section>
      <div>
        <section>
          <h2
            onClick={() => setCurrentSection('address')}
            className={currentSection === 'address' ? 'active' : ''}
          >
            Address
          </h2>
          <h2
            onClick={() => setCurrentSection('details')}
            className={currentSection === 'details' ? 'active' : ''}
          >
            Details
          </h2>
          <hr></hr>
        </section>

        {currentSection === 'address' && (
          <AddressForm
            formData={formData}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
          />
        )}

        {currentSection === 'details' && (
          <DetailsForm
            formData={formData}
            handleChange={handleChange}
            handleBooleanChange={handleBooleanChange}
          />
        )}
      </div>
    </div>
  );
};

export default AddNewHousehold;
