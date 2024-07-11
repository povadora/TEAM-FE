import React, { ChangeEvent } from "react";
import './InputFields.scss';

interface InputFieldProps {
  placeholder: string;
  type: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  type,
  handleInputChange,
  name,
}) => {
  return (
    <div className="inputField">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputField;
