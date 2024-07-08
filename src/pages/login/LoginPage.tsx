import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import InputField from "../../components/fields/InputFields";
// import { useAuth } from "../../contexts/AuthContext";
import axiosInstance from "../../utils/axiosInstance";

interface UserData {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    password: "",
  });

  const [error, setError] = useState<string>(""); // State to hold login error message
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleButtonClick = async () => {
    navigate("/dashboard");

    // try {
    //   const response = await axiosInstance.post(
    //     "http://localhost:3001/accounts/auth-login",
    //     {
    //       userName: userData.username,
    //       password: userData.password,
    //     }
    //   );
    //   console.log("Login successful", response.data);

    //   navigate("/dashboard"); // Navigate to dashboard on successful login
    // } catch (error: any) {
    //   console.error("Login failed:", error); // Log the error for debugging
    //   setError(
    //     "Login failed: " + (error.response?.data?.message || "Unknown error")
    //   ); // Set error message based on response data
    // }
  };

  return (
    <div className="loginPage">
      <h1>Login</h1>
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
      <PrimaryButton buttonText="Login" handleButtonClick={handleButtonClick} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
