// src/pages/admin-Qr code attendance/MeetingDetailsPage.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PrimaryButton from '../../shared/components/buttons/PrimaryButton';
import './MeetingDetails.scss';

const MeetingDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const meetingData = state?.meetingData;

  const handleEditClick = () => {
    navigate('/dashboard/edit-meeting', { state: { meetingData } });
  };

  const handleScanClick = () => {
    navigate('/dashboard/scan', { state: { meetingData } });
  };

  const handleBackClick = () => {
    navigate('/dashboard/attendance');
  };

  return (
    <div className="meeting-details-page">
      <div className="top-bar">
        <PrimaryButton buttonText="Back" handleButtonClick={handleBackClick} />
      </div>
      <div className="meeting-details">
        <h2>{meetingData.title}</h2>
        <p><strong>Information:</strong> {meetingData.information}</p>
        <p><strong>Date:</strong> {meetingData.date}</p>
        <p><strong>Time:</strong> {meetingData.time}</p>
        <p><strong>Agenda:</strong> {meetingData.agenda}</p>
      </div>
      <div className="actions">
        <PrimaryButton buttonText="Edit" handleButtonClick={handleEditClick} />
        <PrimaryButton buttonText="Scan" handleButtonClick={handleScanClick} />
      </div>
    </div>
  );
};

export default MeetingDetailsPage;
