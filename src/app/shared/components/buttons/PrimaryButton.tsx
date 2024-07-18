import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface PrimaryButtonProps {
  buttonText: ReactNode;
  icon?: IconType;
  handleButtonClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonText,
  icon: Icon,
  handleButtonClick,
  type = 'button',
  className = '',
}) => {
  return (
    <button
      type={type}
      className={`primary-button ${className}`}
      onClick={handleButtonClick}
    >
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
