import React from "react";
import DashboardCards from "../../shared/components/card/DashboardCards";
import DataTable from "../../shared/components/table/DataTable";

const Incomplete: React.FC = () => {
  return (
    <div className="incomplete-page">
      <h1>Incomplete Profile</h1>
      <p>This is the incomplete profile page.</p>
      <DashboardCards />
      <DataTable />
    </div>
  );
};

export default Incomplete;
