import React from "react";
import DashboardCards from "../../components/card/DashboardCards";
import DataTable from "../../components/table/DataTable";

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1>THIS IS THE DASHBOARD</h1>
      <DashboardCards />
      <DataTable />
    </div>
  );
};

export default DashboardPage;
