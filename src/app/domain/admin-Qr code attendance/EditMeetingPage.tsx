// src/pages/admin-Qr code attendance/EditMeetingPage.tsx

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PrimaryButton from '../../shared/components/buttons/PrimaryButton';
import InputField from '../../shared/components/fields/InputFields';// Ensure correct import path
import './EditMeetingPage.scss';

const EditMeetingPage: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [meetingData, setMeetingData] = useState(state?.meetingData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeetingData((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleSaveClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Update meeting data logic here
    navigate('/dashboard/meeting-details', { state: { meetingData } });
  };

  const handleBackClick = () => {
    navigate('/dashboard/meeting-details', { state: { meetingData } });
  };

  return (
    <div className="edit-meeting-page">
      <div className="top-bar">
        <PrimaryButton buttonText="Back" handleButtonClick={handleBackClick} />
      </div>
      <form onSubmit={handleSaveClick}>
        <label>Meeting Title</label>
        <InputField name="title" type="text" placeholder='' handleInputChange={handleInputChange} />
        <label>Meeting Information</label>
        <InputField  name="information" type="text" placeholder='' handleInputChange={handleInputChange} />
        <label>Date</label>
        <InputField name="date" type="date" placeholder='' handleInputChange={handleInputChange} />
        <label>Time</label>
        <InputField  name="time" type="time" placeholder='' handleInputChange={handleInputChange} />
        <label>Agenda Notes</label>
        <InputField  name="agenda" type="text"placeholder=''  handleInputChange={handleInputChange} />
        <div className="button-container">
          <PrimaryButton buttonText="Save" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default EditMeetingPage;
