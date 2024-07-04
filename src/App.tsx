import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/AppRoute";
import SideBar from "./components/global/SideBar";
import { AuthProvider } from "./contexts/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="container">
          <SideBar />
          <div className="content">
            <AppRoutes />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
