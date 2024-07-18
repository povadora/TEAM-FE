import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewMeetingPage.scss';
import MeetingInputFields from '../../shared/components/fields/MeetingInputFields';
import SubmitButton from '../../shared/components/buttons/SubmitButton';

const NewMeetingPage: React.FC = () => {
  const [meetingData, setMeetingData] = useState({
    title: '',
    information: '',
    date: '',
    time: '',
    agenda: '',
  });

  const navigate = useNavigate();

  const handleSaveClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Save meeting data logic here
    navigate('/dashboard/meeting-details', { state: { meetingData } });
  };

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeetingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="new-meeting-page">
      <div className="top-bar">
        <button type="button" onClick={handleBackClick}>
          BACK
        </button>
      </div>
      <form onSubmit={handleSaveClick}>
        <label>Meeting Title</label>
        <MeetingInputFields
          name="title"
          type="text"
          placeholder=""
          handleInputChange={handleChange}
        />
        <label>Meeting Information</label>
        <MeetingInputFields
          name="information"
          type="text"
          placeholder=""
          handleInputChange={handleChange}
        />
        <label>Date</label>
        <MeetingInputFields
          name="date"
          type="date"
          placeholder=""
          handleInputChange={handleChange}
        />
        <label>Time</label>
        <MeetingInputFields
          name="time"
          type="time"
          placeholder=""
          handleInputChange={handleChange}
        />
        <label>Agenda Notes</label>
        <MeetingInputFields
          name="agenda"
          type="text"
          placeholder=""
          handleInputChange={handleChange}
        />

        <div className="button-container">
          <SubmitButton type="submit" buttonText="Save" />
        </div>
      </form>
    </div>
  );
};

export default NewMeetingPage;
