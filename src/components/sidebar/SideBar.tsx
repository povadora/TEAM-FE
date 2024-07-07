import React from "react";
import "./SideBar.scss";
import PrimaryButton from "../buttons/PrimaryButton";

interface SidebarProps {
  handleButtonClick: (path: string) => void;
  activeItem: string;
}

const Sidebar: React.FC<SidebarProps> = ({ handleButtonClick, activeItem }) => {
  return (
    <div className="sidebar">
      <PrimaryButton
        buttonText="Dashboard"
        handleButtonClick={() => handleButtonClick("dashboard")}
        className={`sidebar-button ${
          activeItem === "dashboard" ? "active" : ""
        }`}
      />
      <PrimaryButton
        buttonText="Household"
        handleButtonClick={() => handleButtonClick("household")}
        className={`sidebar-button ${
          activeItem === "household" ? "active" : ""
        }`}
      />
      <PrimaryButton
        buttonText="Account"
        handleButtonClick={() => handleButtonClick("account")}
        className={`sidebar-button ${activeItem === "account" ? "active" : ""}`}
      />
      <PrimaryButton
        buttonText="Print Certificates"
        handleButtonClick={() => handleButtonClick("print-certificates")}
        className={`sidebar-button ${
          activeItem === "print-certificates" ? "active" : ""
        }`}
      />
      <PrimaryButton
        buttonText="QR Attendance"
        handleButtonClick={() => handleButtonClick("attendance")}
        className={`sidebar-button ${
          activeItem === "attendance" ? "active" : ""
        }`}
      />
      <PrimaryButton
        buttonText="System Settings"
        handleButtonClick={() => handleButtonClick("settings")}
        className={`sidebar-button ${
          activeItem === "settings" ? "active" : ""
        }`}
      />
      <PrimaryButton
        buttonText="Log out"
        handleButtonClick={() => handleButtonClick("logout")}
        className={`sidebar-button ${activeItem === "logout" ? "active" : ""}`}
      />
    </div>
  );
};

export default Sidebar;
