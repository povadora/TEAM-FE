import React from "react";
import { Outlet } from "react-router-dom";

const HouseholdPage: React.FC = () => {
  return (
    <div>
      <h1>THIS IS THE HOUSEHOLD PAGE</h1>
      <h2>KA KINSA?</h2>
      <Outlet />
    </div>
  );
};

export default HouseholdPage;
