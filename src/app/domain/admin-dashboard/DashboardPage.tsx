import React, { useState, useCallback } from 'react';
import './DashboardPage.scss';
import DashboardCards from '../../shared/components/card/DashboardCards';
import DataTable from '../../shared/components/table/DataTable';

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="layout">
        <div className="dashboard-card">
          <div className="dashboard-card-item">
            <DashboardCards />
          </div>
        </div>
        <div className="dashboard-table">
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
