import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../shared/components/buttons/PrimaryButton";
import InputField from "../../shared/components/fields/InputFields";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './LoginPage.scss';

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
      <div className="loginPage__image"></div>
      <div className="loginForm">
        <img src="/path-to-your-logo/logo.png" alt="Logo" className="logo" />
        <h1>Login</h1>
        <div className="inputField username">
          <InputField
            placeholder="Username"
            type="text"
            handleInputChange={handleInputChange}
            name="username"
          />
          <span className="icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
        <div className="inputField password">
          <InputField
            placeholder="Password"
            type="password"
            handleInputChange={handleInputChange}
            name="password"
          />
          <span className="icon">
            <FontAwesomeIcon icon={faLock} />
          </span>
        </div>
        <PrimaryButton buttonText="LOG-IN" handleButtonClick={handleButtonClick} />
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
