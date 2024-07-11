// src/pages/admin-Qr code attendance/NewMeetingPage.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../shared/components/buttons/PrimaryButton';
import InputField from '../../shared/components/fields/InputFields'; // Ensure correct import path
import './NewMeetingPage.scss';

const NewMeetingPage: React.FC = () => {
  const [meetingData, setMeetingData] = useState({
    title: '',
    information: '',
    date: '',
    time: '',
    agenda: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeetingData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSaveClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Save meeting data logic here
    navigate('/dashboard/meeting-details', { state: { meetingData } });
  };

  const handleBackClick = () => {
    navigate('/dashboard/attendance');
  };

  return (
    <div className="new-meeting-page">
      <div className="top-bar">
        <PrimaryButton buttonText="Back" handleButtonClick={handleBackClick} />
      </div>
      <form onSubmit={handleSaveClick}>
        <label>Meeting Title</label>
        <InputField  name="title" type="text" placeholder='' handleInputChange={handleInputChange} />
        <label>Meetig information</label>
        <InputField  name="information" type="text" placeholder=''handleInputChange={handleInputChange} />
        <label>Date</label>
        <InputField  name="date" type="date" placeholder='' handleInputChange={handleInputChange} />
        <label>Time</label>
        <InputField  name="time" type="time" placeholder='' handleInputChange={handleInputChange} />
        <label>Agenda Notes</label>
        <InputField  name="agenda" type="text" placeholder='' handleInputChange={handleInputChange} />
        <div className="button-container">
          <PrimaryButton buttonText="Save" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default NewMeetingPage;
