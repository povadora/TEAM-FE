import React, { useState } from "react";
import "./dropdownButton.scss";

interface DropdownButtonProps {
  buttonText: string;
  options: string[];
  onSelect: (option: string) => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  buttonText,
  options,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleToggle}>
        {buttonText}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
