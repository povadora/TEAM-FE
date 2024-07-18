import React from 'react';

interface LoginButtonProps {
  text: string;
  onClick?: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ text, onClick }) => {
  return (
    <button className="main-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default LoginButton;
