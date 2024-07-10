import React from 'react';
import DashboardCards from '../../shared/components/card/DashboardCards';
import DataTable from '../../shared/components/table/DataTable';

const HouseholdPage: React.FC = () => {
  return (
    <div>
      <h1>THIS IS THE HOUSEHOLD PAGE</h1>
      <DashboardCards />
      <DataTable />
    </div>
  );
};

export default HouseholdPage;
