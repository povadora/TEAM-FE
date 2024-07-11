import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './LogoutPage.scss'; // Import the SCSS file

const LogoutPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to the login page with a logout message
    navigate('/login', );
  }, [navigate]);

  return (
    <div className="logout-container">
      {/* You can leave this div empty or add any necessary elements */}
    </div>
  );
};

export default LogoutPage;