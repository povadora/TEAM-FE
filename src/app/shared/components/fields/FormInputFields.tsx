import React, { ChangeEvent } from 'react';

interface FormInputFieldProps {
  type: string;
  name: string;
  placeholder: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInputField: React.FC<FormInputFieldProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="inputField">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInputField;
