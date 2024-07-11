import React from "react";
import "./SideBarHeader.scss";

const SideBarHeader: React.FC = () => {
  return (
    <div className="sidebar-header">
      <img src="/path-to-logo.png" alt="Logo" className="sidebar-logo" />
      <div className="sidebar-title">
        Poblacion 2<br />
        Tagbilaran City
      </div>
    </div>
  );
};

export default SideBarHeader;
