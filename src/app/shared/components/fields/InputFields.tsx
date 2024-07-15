import React, { ChangeEvent } from 'react';
import './InputFields.scss';

interface InputFieldProps {
  type: string;
  name: string;
  placeholder: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder,
  handleInputChange,
}) => {
  return (
    <div className="inputField">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputField;
