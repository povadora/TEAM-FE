import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.scss";

const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>Barangay System</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" className="nav-link">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/household" className="nav-link">
              Household
            </NavLink>
          </li>
          <li>
            <NavLink to="/account" className="nav-link">
              Account
            </NavLink>
          </li>
          <li>
            <NavLink to="/print-certificates" className="nav-link">
              Print Certificates
            </NavLink>
          </li>
          <li>
            <NavLink to="/qr-attendance" className="nav-link">
              QR Attendance
            </NavLink>
          </li>
          <li>
            <NavLink to="/system-settings" className="nav-link">
              System Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" className="nav-link">
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
