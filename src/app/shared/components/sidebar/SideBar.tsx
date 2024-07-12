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
import logo from '../../../../image/logo.jpg';

import CustomModal from '../modal/CustomModal';
const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (path: string) => {
    if (path === 'logout') {
      setIsModalOpen(true);
    } else {
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
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </>
        }
        handleButtonClick={() => handleButtonClick('')}
        className="sidebar-button"
      />
      <PrimaryButton
        buttonText={
          <>
            <FontAwesomeIcon icon={faHome} /> Household
          </>
        }
        handleButtonClick={() => handleButtonClick('household')}
        className="sidebar-button"
      />
      <PrimaryButton
        buttonText={
          <>
            <FontAwesomeIcon icon={faUser} /> Account
          </>
        }
        handleButtonClick={() => handleButtonClick('account')}
        className="sidebar-button"
      />
      <PrimaryButton
        buttonText={
          <>
            <FontAwesomeIcon icon={faPrint} /> Print Certificates
          </>
        }
        handleButtonClick={() => handleButtonClick('print-certificates')}
        className="sidebar-button"
      />
      <PrimaryButton
        buttonText={
          <>
            <FontAwesomeIcon icon={faQrcode} /> QR Attendance
          </>
        }
        handleButtonClick={() => handleButtonClick('attendance')}
        className="sidebar-button"
      />
      <PrimaryButton
        buttonText={
          <>
            <FontAwesomeIcon icon={faCog} /> System Settings
          </>
        }
        handleButtonClick={() => handleButtonClick('settings')}
        className="sidebar-button"
      />
      <PrimaryButton
        buttonText={
          <>
            <FontAwesomeIcon icon={faSignOutAlt} /> Log out
          </>
        }
        handleButtonClick={() => handleButtonClick('logout')}
        className="sidebar-button"
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
