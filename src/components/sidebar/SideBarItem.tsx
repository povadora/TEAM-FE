import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  label: string;
  to: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, to }) => {
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

export default SidebarItem;
