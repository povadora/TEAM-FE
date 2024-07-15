import React, { useState } from 'react';
import AddressForm from './AddressForm';
import DetailsForm from './DetailsForm';
import './AddNewHousehold.scss';
import axiosInstance from '../../../core/utils/axiosInstance';

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
    try {
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

      const response = await axiosInstance.post(
        '/household/create-household',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
    console.log(formData);
  };

  return (
    <div className="add-household-container">
      <section className="add-household-header">
        <h1>Add New Household</h1>
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </section>

      <div>
        <section>
          <h2 onClick={() => setCurrentSection('address')}>Address</h2>
          <h2 onClick={() => setCurrentSection('details')}>Details</h2>
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
