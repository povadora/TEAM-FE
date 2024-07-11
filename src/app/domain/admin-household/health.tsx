import React, { ChangeEvent, useState } from 'react';
import InputField from '../../shared/components/fields/InputFields';
import PrimaryButton from '../../shared/components/buttons/PrimaryButton';
import { useNavigate } from 'react-router-dom';

const Health: React.FC = () => {
  interface UserData {
    bloodtype: string;
    healthremarks: string;
    disability: string;
    pregnant: string;
    labour: string;
    singleParent: string;
  }
  const [userData, setUserData] = useState<UserData>({
    bloodtype: '',
    healthremarks: '',
    disability: '',
    pregnant: '',
    labour: '',
    singleParent: '',
  });

  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleButtonClick = async () => {
    navigate('/others');
  };

  return (
    <div className="health">
      <h1>Health Information</h1>
      <InputField
        placeholder="Blood Type"
        type="text"
        handleInputChange={handleInputChange}
        name="bloodtype"
      />
      <br />
      <InputField
        placeholder="Health Remarks"
        type="text"
        handleInputChange={handleInputChange}
        name="healthRemarks"
      />
      <br />
      <InputField
        placeholder="Are you a person with Disability?"
        type="bar"
        handleInputChange={handleInputChange}
        name="disability"
      />
      <br />
      <InputField
        placeholder="Are you Pregnant(Yes/No)"
        type="text"
        handleInputChange={handleInputChange}
        name="pregnant"
      />
      <br />
      <InputField
        placeholder="Expected Labour Date"
        type="Date"
        handleInputChange={handleInputChange}
        name="labour"
      />
      <br />
      <InputField
        placeholder="Are you a Single Parent(Yes/No)"
        type="text"
        handleInputChange={handleInputChange}
        name="singleParent"
      />
      <br />

      <PrimaryButton buttonText="NEXT" handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default Health;