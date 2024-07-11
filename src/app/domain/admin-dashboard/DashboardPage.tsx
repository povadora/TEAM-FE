import React from 'react';
import DashboardCards from '../../shared/components/card/DashboardCards';
import DataTable from '../../shared/components/table/DataTable';
import DoughnutChart from '../../shared/components/doughnutChart/doughnutChart';
import './DashboardPage.scss';

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-container">
      <h1>Barangay Dashboard</h1>
      <div className="cards-container">
        <DashboardCards />
      </div>
      <div className="charts-container">
        <DoughnutChart />
        <DoughnutChart />
        <DoughnutChart />
      </div>
    </div>
  );
};

export default DashboardPage;
