import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import DashboardPage from "../pages/admin-dashboard/DashboardPage";
import HouseholdPage from "../pages/admin-household/HouseholdPage";
import AccountPage from "../pages/admin-account/AccountPage";
import AttendancePage from "../pages/admin-Qr code attendance/AttendancePage";
import SettingsPage from "../pages/admin-system settings/SettingsPage";
import LogoutPage from "../pages/admin-logout/LogoutPage";
import PrintCertificatesPage from "../pages/admin-printcertificates/PrintcertificatesPage";

const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <LoginPage />,
  },
  {
    path: "/dashboard", // Dashboard root path
    element: <DashboardPage />,
    children: [
      {
        path: "/", // Base path for DashboardPage itself
        element: <Outlet />,
      },
      {
        path: "household", // Nested under /dashboard
        element: <HouseholdPage />,
      },
      {
        path: "account", // Nested under /dashboard
        element: <AccountPage />,
      },
      {
        path: "print-certificates", // Nested under /dashboard
        element: <PrintCertificatesPage />,
      },
      {
        path: "attendance", // Nested under /dashboard
        element: <AttendancePage />,
      },
      {
        path: "settings", // Nested under /dashboard
        element: <SettingsPage />,
      },
      {
        path: "logout", // Nested under /dashboard
        element: <LogoutPage />,
      },
    ],
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
