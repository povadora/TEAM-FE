import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBarItem.scss";

interface SidebarItemProps {
  label: string;
  to: string;
}

const SideBarItem: React.FC<SidebarItemProps> = ({ label, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "sidebar-item active" : "sidebar-item"
      }
    >
      {label}
    </NavLink>
  );
};

export default SideBarItem;
