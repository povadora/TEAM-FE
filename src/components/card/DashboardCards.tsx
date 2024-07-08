import React from "react";
import "./DashboardCards.scss";

const DashboardCards: React.FC = () => {
  return (
    <div className="dashboard-cards">
      <div className="card">
        <h3>Card 1</h3>
        <p>Some data here...</p>
      </div>
      <div className="card">
        <h3>Card 2</h3>
        <p>Some data here...</p>
      </div>
      <div className="card">
        <h3>Card 3</h3>
        <p>Some data here...</p>
      </div>
      <div className="card">
        <h3>Card 4</h3>
        <p>Some data here...</p>
      </div>
    </div>
  );
};

export default DashboardCards;
