import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LoginPage.scss';
import logo from '../../../image/logo.jpg';
import barangayImage from '../../../image/login.jpg';
import { FaUser, FaLock } from 'react-icons/fa';

interface InputFieldProps {
  type: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  icon,
  value,
  name,
  onChange,
}) => {
  return (
    <div className="input-field">
      <div className="icon">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

interface MainButtonProps {
  text: string;
  onClick?: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({ text, onClick }) => {
  return (
    <button className="main-button" onClick={onClick}>
      {text}
    </button>
  );
};

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    // Handle login logic here, e.g., API call, state update, etc.
    console.log('Username:', username);
    console.log('Password:', password);
    // Navigate to dashboard after handling login
    navigate('/dashboard');
    // Reset the form after handling login
    setUsername('');
    setPassword('');
  };

  useEffect(() => {
    if (location.state && location.state.message) {
      alert(location.state.message);
    }
  }, [location.state]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

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
        <form>
          <InputField
            type="text"
            placeholder="Username"
            icon={<FaUser />}
            value={username}
            name="username"
            onChange={handleInputChange}
          />
          <InputField
            type="password"
            placeholder="Password"
            icon={<FaLock />}
            value={password}
            name="password"
            onChange={handleInputChange}
          />
          <MainButton text="LOG-IN" onClick={handleLogin} />
        </form>
      </div>
    </div>
  );
};

const LoginPage: React.FC = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
