import React from "react";
import "./SideBar.scss";
import PrimaryButton from "../buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    navigate(`/dashboard/${path}`);
  };

  return (
    <div className="sidebar">
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
    </div>
  );
};

export default Sidebar;
