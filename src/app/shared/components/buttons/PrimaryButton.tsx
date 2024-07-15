import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface PrimaryButtonProps {
  buttonText: ReactNode;
  icon?: IconType; // Icon prop using react-icons
  handleButtonClick?: () => void;
  type?: 'button' | 'submit' | 'reset'; // Button type prop
  className?: string; // Optional class name for styling
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
          <Icon /> {/* Wrap the icon in a span */}
        </span>
      )}
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
