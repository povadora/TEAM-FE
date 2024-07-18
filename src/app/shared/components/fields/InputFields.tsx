import React, { ChangeEvent } from 'react';
import './InputFields.scss';

interface InputFieldProps {
  type: string;
  placeholder: string;
  icon: React.ReactNode;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  icon,
  name,
  onChange,
}) => {
  return (
    <div className="input-field">
      <div className="icon">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
