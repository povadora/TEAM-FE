import React from 'react';
import './DashboardPage.scss';
import DashboardCards from '../../shared/components/card/DashboardCards';
import DashboardChart from '../../shared/components/doughnutChart/DashboardChart';

const DashboardPage: React.FC = () => {
  return (
    <div className="layout">
      <h1>Barangay Dashboard</h1>
      <div className="dashboard-card">
        <DashboardCards />
      </div>
      <div className="charts-container">
        <div className="chart-wrapper">
          <DashboardChart chartType="genderData" />
        </div>
        <div className="chart-wrapper">
          <DashboardChart chartType="votersData" />
        </div>
        <div className="chart-wrapper">
          <DashboardChart chartType="ageData" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
