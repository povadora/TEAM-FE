import React from "react";
import DashboardCards from "../../components/card/DashboardCards";
import DoughnutChart from "../../components/doughnutChart/doughnutChart";

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ width: "350px", height: "350px", margin: "0 auto" }}>
        <DoughnutChart />
        <DoughnutChart />
        <DoughnutChart />
      </div>
      <DashboardCards />
    </div>
  );
};

export default DashboardPage;
