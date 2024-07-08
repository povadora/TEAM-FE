import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import DashboardPage from "../pages/admin-dashboard/DashboardPage";
import HouseholdPage from "../pages/admin-household/HouseholdPage";
import AccountPage from "../pages/admin-account/AccountPage";
import AttendancePage from "../pages/admin-Qr code attendance/AttendancePage";
import SettingsPage from "../pages/admin-system settings/SettingsPage";
import LogoutPage from "../pages/admin-logout/LogoutPage";
import PrintCertificatesPage from "../pages/admin-printcertificates/PrintcertificatesPage";
import DashboardLayout from "../pages/layout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "household",
        element: <HouseholdPage />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
      {
        path: "print-certificates",
        element: <PrintCertificatesPage />,
      },
      {
        path: "attendance",
        element: <AttendancePage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "logout",
        element: <LogoutPage />,
      },
    ],
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
