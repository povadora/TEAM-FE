import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faHome,
  faUser,
  faPrint,
  faQrcode,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import './SideBar.scss';
import PrimaryButton from '../buttons/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import logo from '../../../../image/sidebar.png';
import CustomModal from '../modal/CustomModal';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (path: string) => {
    if (path === 'logout') {
      setIsModalOpen(true);
    } else {
      setActiveButton(path); // Set the active button
      navigate(`/dashboard/${path}`);
    }
  };

  const handleConfirmLogout = () => {
    setIsModalOpen(false);
    navigate('/dashboard/logout');
  };

  const handleCancelLogout = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" />
        <h2 className="sidebar-title">Poblacion II, Tagbilaran City</h2>
      </div>
      <PrimaryButton
        buttonText={
          <>
            <span className="icon">
              <FontAwesomeIcon icon={faTachometerAlt} />
            </span>
            <span className="text">Dashboard</span>
          </>
        }
        handleButtonClick={() => handleButtonClick('')}
        className={`sidebar-button ${activeButton === '' ? 'active' : ''}`}
      />
      <PrimaryButton
        buttonText={
          <>
            <span className="icon">
              <FontAwesomeIcon icon={faHome} />
            </span>
            <span className="text">Household</span>
          </>
        }
        handleButtonClick={() => handleButtonClick('household')}
        className={`sidebar-button ${
          activeButton === 'household' ? 'active' : ''
        }`}
      />
      <PrimaryButton
        buttonText={
          <>
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="text">Account</span>
          </>
        }
        handleButtonClick={() => handleButtonClick('account')}
        className={`sidebar-button ${
          activeButton === 'account' ? 'active' : ''
        }`}
      />
      <PrimaryButton
        buttonText={
          <>
            <span className="icon">
              <FontAwesomeIcon icon={faPrint} />
            </span>
            <span className="text">Print Certificates</span>
          </>
        }
        handleButtonClick={() => handleButtonClick('print-certificates')}
        className={`sidebar-button ${
          activeButton === 'print-certificates' ? 'active' : ''
        }`}
      />
      <PrimaryButton
        buttonText={
          <>
            <span className="icon">
              <FontAwesomeIcon icon={faQrcode} />
            </span>
            <span className="text">QR Attendance</span>
          </>
        }
        handleButtonClick={() => handleButtonClick('attendance')}
        className={`sidebar-button ${
          activeButton === 'attendance' ? 'active' : ''
        }`}
      />
      <PrimaryButton
        buttonText={
          <>
            <span className="icon">
              <FontAwesomeIcon icon={faCog} />
            </span>
            <span className="text">System Settings</span>
          </>
        }
        handleButtonClick={() => handleButtonClick('settings')}
        className={`sidebar-button ${
          activeButton === 'settings' ? 'active' : ''
        }`}
      />
      <PrimaryButton
        buttonText={
          <>
            <span className="icon">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </span>
            <span className="text">Log out</span>
          </>
        }
        handleButtonClick={() => handleButtonClick('logout')}
        className={`sidebar-button ${
          activeButton === 'logout' ? 'active' : ''
        }`}
      />
      <CustomModal
        isOpen={isModalOpen}
        message="Are you sure you want to log out?"
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />
    </div>
  );
};

export default Sidebar;
