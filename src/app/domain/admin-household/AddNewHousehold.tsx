import { Outlet, useNavigate } from 'react-router-dom';
import InputField from '../../shared/components/fields/InputFields';
import PrimaryButton from '../../shared/components/buttons/PrimaryButton';
import { ChangeEvent, useState } from 'react';

const AddNewHousehold: React.FC = () => {
  interface UserData {
    picture: File | null;
    household_role: '';
    firstname: string;
    middlename: string;
    lastname: string;
    gender: string;
    birthday: string;
    email: string;
    civilstatus: string;
    mobilenumber: string;
  }

  const [userData, setUserData] = useState<UserData>({
    picture: null,
    household_role: '',
    firstname: '',
    middlename: '',
    lastname: '',
    gender: '',
    birthday: '',
    email: '',
    civilstatus: '',
    mobilenumber: '',
  });

  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    if (name === 'picture' && files) {
      setUserData({
        ...userData,
        [name]: files[0],
      });
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
  };

  const handleButtonClick = async () => {
    navigate('/dashboard/account');
  };

  return (
    <div className="newHousehold">
      <h1>Add New User</h1>
      <InputField
        placeholder="Choose a File"
        type="file"
        handleInputChange={handleInputChange}
        name="picture"
      />
      <br />
      <InputField
        placeholder="Household Role"
        type="Choose"
        handleInputChange={handleInputChange}
        name="household_role"
      />
      <br />
      <InputField
        placeholder="First Name"
        type="text"
        handleInputChange={handleInputChange}
        name="firstname"
      />
      <br />
      <InputField
        placeholder="Middle Name"
        type="text"
        handleInputChange={handleInputChange}
        name="middlename"
      />
      <br />
      <InputField
        placeholder="Last Name"
        type="text"
        handleInputChange={handleInputChange}
        name="lastname"
      />
      <br />
      <InputField
        placeholder="Gender"
        type="text"
        handleInputChange={handleInputChange}
        name="gender"
      />
      <br />
      <InputField
        placeholder="Birthday"
        type="date"
        handleInputChange={handleInputChange}
        name="birthday"
      />
      <br />
      <InputField
        placeholder="Email"
        type="text"
        handleInputChange={handleInputChange}
        name="email"
      />
      <br />
      <InputField
        placeholder="Civil Status"
        type="text"
        handleInputChange={handleInputChange}
        name="civilstatus"
      />
      <br />
      <InputField
        placeholder="Mobile Number"
        type="text"
        handleInputChange={handleInputChange}
        name="mobilenumber"
      />
      <br />
      <div className="newHouseholdAdded">
        <PrimaryButton
          buttonText="Add New Household"
          handleButtonClick={handleButtonClick}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default AddNewHousehold;
