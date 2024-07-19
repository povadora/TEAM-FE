import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LoginPage.scss';
import logo from './../../../image/final.png';
import barangayImage from '../../../image/login.jpg';
import { FaUser, FaLock } from 'react-icons/fa';
import axiosInstance from '../../core/utils/axiosInstance';
import InputField from '../../shared/components/fields/InputFields';
import LoginButton from '../../shared/components/buttons/LoginButton';

interface UserData {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    username: '',
    password: '',
  });

  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const onClick = async () => {
    navigate('/dashboard');
    try {
      const response = await axiosInstance.post(
        'http://localhost:3001/accounts/auth-login',
        {
          userName: userData.username,
          password: userData.password,
        }
      );
      alert('Log in');
      console.log('Login successful', response.data);
      navigate('/dashboard');
    } catch (error: any) {
      <p>ERROR</p>;
      console.error('Login failed:', error);
      setError(
        'Login failed: ' + (error.response?.data?.message || 'Unknown error')
      );
    }
  };

  useEffect(() => {
    if (location.state && location.state.message) {
      alert(location.state.message);
    }
  }, [location.state]);

  return (
    <div className="login-container">
      <div className="image-section">
        <img src={barangayImage} alt="Barangay" />
      </div>
      <div className="form-section">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="login-title">LOG-IN</h1>
        <form className="log-in-form">
          <InputField
            type="text"
            placeholder="Username"
            icon={<FaUser />}
            name="username"
            onChange={handleInputChange}
          />
          <InputField
            type="password"
            placeholder="Password"
            icon={<FaLock />}
            name="password"
            onChange={handleInputChange}
          />
          <LoginButton text="LOG-IN" onClick={onClick} />
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
