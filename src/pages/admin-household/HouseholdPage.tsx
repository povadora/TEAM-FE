import React from "react";
import DashboardCards from "../../components/card/DashboardCards";
import DataTable from "../../components/table/DataTable";

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
