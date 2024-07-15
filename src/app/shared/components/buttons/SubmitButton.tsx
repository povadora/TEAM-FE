import React from 'react';

interface SubmitButtonProps {
  type: 'submit';
  className: string;
  handleSubmit: () => void;
  buttonText: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  type,
  className,
  handleSubmit,
  buttonText,
}) => {
  return (
    <button type={type} className={className} onClick={handleSubmit}>
      {buttonText}
    </button>
  );
};

export default SubmitButton;
