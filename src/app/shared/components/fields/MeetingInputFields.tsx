import React from 'react';

interface MeetingInputFieldsProps {
  placeholder: string;
  type: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const MeetingInputFields: React.FC<MeetingInputFieldsProps> = ({
  placeholder,
  type,
  handleInputChange,
  name,
}) => {
  return (
    <div>
      <label htmlFor={name}></label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default MeetingInputFields;
