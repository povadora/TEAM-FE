import React, { ChangeEvent, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import InputField from "../../components/fields/InputFields";
import PrimaryButton from "../../components/buttons/PrimaryButton";

interface UserData {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  role: string;
}

const AddNewUser: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    role: "",
  });

  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleButtonClick = async () => {
    navigate("/dashboard/account");
  };

  return (
    <div className="newUsers">
      <h1>Add New User</h1>
      <InputField
        placeholder="Enter username"
        type="text"
        handleInputChange={handleInputChange}
        name="username"
      />
      <br />
      <InputField
        placeholder="Enter password"
        type="password"
        handleInputChange={handleInputChange}
        name="password"
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
        placeholder="Last Name"
        type="text"
        handleInputChange={handleInputChange}
        name="lastname"
      />
      <br />
      <InputField
        placeholder="Role"
        type="text"
        handleInputChange={handleInputChange}
        name="role"
      />
      <br />
      <div className="newUseradded">
        <PrimaryButton
          buttonText="Add New User"
          handleButtonClick={handleButtonClick}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default AddNewUser;
