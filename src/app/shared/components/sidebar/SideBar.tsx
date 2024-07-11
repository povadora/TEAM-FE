import React, { useState } from "react";
import "./SideBar.scss";
import PrimaryButton from "../buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import SidebarHeader from "./SideBarHeader";
import CustomModal from "../modal/CustomModal";

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (path: string) => {
    if (path === "logout") {
      setIsModalOpen(true);
    } else {
      navigate(`/dashboard/${path}`);
    }
  };

  const handleConfirmLogout = () => {
    setIsModalOpen(false);
    navigate("/dashboard/logout");
  };

  const handleCancelLogout = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="sidebar">
      <SidebarHeader />
      <PrimaryButton
        buttonText="Dashboard"
        handleButtonClick={() => handleButtonClick("")}
        className="sidebar-button"
      />
      <PrimaryButton
        buttonText="Household"
        handleButtonClick={() => handleButtonClick("household")}
        className="sidebar-button"
      />
      <PrimaryButton
        buttonText="Account"
        handleButtonClick={() => handleButtonClick("account")}
        className="sidebar-button"
      />
      <PrimaryButton
        buttonText="Print Certificates"
        handleButtonClick={() => handleButtonClick("print-certificates")}
        className="sidebar-button"
      />
      <PrimaryButton
        buttonText="QR Attendance"
        handleButtonClick={() => handleButtonClick("attendance")}
        className="sidebar-button"
      />
      <PrimaryButton
        buttonText="System Settings"
        handleButtonClick={() => handleButtonClick("settings")}
        className="sidebar-button"
      />
      <PrimaryButton
        buttonText="Log out"
        handleButtonClick={() => handleButtonClick("logout")}
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

export default SideBar;
