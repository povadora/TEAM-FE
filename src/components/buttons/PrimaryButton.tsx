import React from "react";

interface PrimaryButtonProps {
  buttonText: string;
  handleButtonClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonText,
  handleButtonClick,
}) => {
  return (
    <div>
      <button onClick={handleButtonClick}>{buttonText}</button>
    </div>
  );
};

export default PrimaryButton;
