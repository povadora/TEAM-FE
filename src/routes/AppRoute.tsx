import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import DashboardPage from "../pages/admin-dashboard/DashboardPage";
import HouseholdPage from "../pages/admin-household/HouseholdPage";
import AccountPage from "../pages/admin-account/AccountPage";
import LogoutPage from "../pages/admin-logout/LogoutPage";
import DashboardLayout from "../pages/layout/DashboardLayout";
import AddNewUser from "../pages/admin-account/AddNewUser";
import PrintCertificatesPage from "../pages/admin-printcertificates/PrintcertificatesPage";
import AttendancePage from "../pages/admin-Qr code attendance/AttendancePage";
import SettingsPage from "../pages/admin-system settings/SettingsPage";
import AddNewHousehold from "../pages/admin-household/AddNewHousehold";
import Complete from "../pages/admin-household/completeProfile";
import Incomplete from "../pages/admin-household/incompleteProfile";

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
        path: "newHousehold",
        element: <AddNewHousehold />,
      },
      {
        path: "household",
        element: <HouseholdPage />,
      },
      {
        path: "complete-page",
        element: <Complete />,
      },
      {
        path: "incomplete-page",
        element: <Incomplete />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
      {
        path: "add-new-user",
        element: <AddNewUser />,
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
