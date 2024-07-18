// SubmitButton.tsx
import React from 'react';

interface SubmitButtonProps {
  type: 'submit';
  handleSubmit?: () => void;
  buttonText: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  type,
  handleSubmit,
  buttonText,
}) => {
  return (
    <button type={type} onClick={handleSubmit}>
      {buttonText}
    </button>
  );
};

export default SubmitButton;
