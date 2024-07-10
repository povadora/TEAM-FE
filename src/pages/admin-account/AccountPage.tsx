import React, { ChangeEvent, useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import DataTable from "../../components/table/DataTable";
import { useNavigate } from "react-router-dom";

interface UserData {
  username: string;
  password: string;
}

const AccountPage: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    password: "",
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
    navigate("/dashboard/add-new-user");
  };

  return (
    <div>
      <h1>Account Page</h1>
      <div className="AddNewUserButton">
        <PrimaryButton
          buttonText="Add New User"
          handleButtonClick={handleButtonClick}
        />
      </div>
      <DataTable />
    </div>
  );
};

export default AccountPage;
