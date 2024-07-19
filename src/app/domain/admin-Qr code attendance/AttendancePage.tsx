// AttendancePage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'; // Import the plus icon from react-icons/fa
import PrimaryButton from '../../shared/components/buttons/PrimaryButton';
import './AttendancePage.scss';

const AttendancePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNewMeetingClick = () => {
    navigate('/dashboard/new-meeting'); // Navigate to the new meeting page
  };

  return (
    <div className="attendance-page">
      <div className="top-bar">
        <PrimaryButton
          buttonText="New Meeting"
          icon={FaPlus}
          handleButtonClick={handleNewMeetingClick}
        />
      </div>
      <h2>Meeting Title</h2>
      <table className="meeting-table">
        <thead>
          <tr>
            <th>Household Number</th>
            <th>Date</th>
            <th>Attendance</th>
            <th>Penalties</th>
          </tr>
        </thead>
        <tbody>{/* Render table rows here */}</tbody>
      </table>
    </div>
  );
};

export default AttendancePage;
