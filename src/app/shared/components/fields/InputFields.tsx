import React, { ChangeEvent } from "react";

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

export default InputField;
