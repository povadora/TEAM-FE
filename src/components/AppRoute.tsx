import React from "react";
import { Routes, Route } from "react-router-dom"; // Updated import
import LoginPage from "../pages/login/LoginPage";
import DashboardPage from "../pages/admin-dashboard/DashboardPage";
import HouseholdPage from "../pages/admin-household/HouseholdPage";
import AccountPage from "../pages/admin-account/AccountPage";
import AttendancePage from "../pages/admin-Qr code attendance/AttendancePage";
import SettingsPage from "../pages/admin-system settings/SettingsPage";
import LogoutPage from "../pages/admin-logout/LogoutPage";
import SideBar from "./global/SideBar";
import { useAuth } from "../contexts/AuthContext";
import PrintCertificatesPage from "../pages/admin-printcertificates/PrintcertificatesPage";

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated && <SideBar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/household" element={<HouseholdPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/print-certificates" element={<PrintCertificatesPage />} />
        <Route path="/qr-attendance" element={<AttendancePage />} />
        <Route path="/system-settings" element={<SettingsPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
