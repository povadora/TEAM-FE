import React, { useState } from "react";
import "../../App.scss";
import Sidebar from "../../components/sidebar/SideBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  // Update active item based on current route
  React.useEffect(() => {
    const pathname = location.pathname.replace("/dashboard/", "");
    setActiveItem(pathname || "dashboard");
  }, [location]);

  // Handle navigation from sidebar buttons
  const handleSidebarButtonClick = (path: string) => {
    setActiveItem(path);
    navigate(`/dashboard/${path}`);
  };

  return (
    <div className="dashboard">
      <Sidebar
        activeItem={activeItem}
        handleButtonClick={handleSidebarButtonClick}
      />
      <div className="dashboard-content">
        <h1>THIS IS THE DASHBOARD</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
