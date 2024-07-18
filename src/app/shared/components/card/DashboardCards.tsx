import React from 'react';
import { FaMars, FaVoteYea, FaChartPie } from 'react-icons/fa';
import './DashboardCards.scss';

const DashboardCards: React.FC = () => {
  return (
    <div className="dashboard-cards">
      <div className="card">
        <div className="card-content">
          <FaMars className="icon" />
          <div className="text-center">
            <h3>Gender Bracket</h3>
            <p>11,200 Population</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <FaVoteYea className="icon" />
          <div className="text-center">
            <h3>Voters Bracket</h3>
            <p>10,500 Population</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <FaChartPie className="icon" />
          <div className="text-center">
            <h3>Age Bracket</h3>
            <p>11,200 Population</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
