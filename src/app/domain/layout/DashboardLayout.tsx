import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../app.scss';
import Sidebar from '../../shared/components/sidebar/SideBar';

const DashboardLayout: React.FC = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
