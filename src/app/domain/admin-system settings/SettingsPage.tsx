import React from "react";
import "./SettingsPage.scss";

const SettingsPage: React.FC = () => {
  return (
    <div className="settings-page">
      <div className="content-container">
        <button className="content-button">Profile and Theme</button>
        <button className="content-button">Services Pricing</button>
        <button className="content-button">Date and Time</button>
        <button className="content-button">Privacy</button>
        <button className="content-button">Tutorial</button>
      </div>
    </div>
  );
};

export default SettingsPage;
