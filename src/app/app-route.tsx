import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './domain/login/LoginPage';
import DashboardPage from './domain/admin-dashboard/DashboardPage';
import HouseholdPage from './domain/admin-household/HouseholdPage';
import AccountPage from './domain/admin-account/AccountPage';
import AttendancePage from './domain/admin-Qr code attendance/AttendancePage';
import SettingsPage from './domain/admin-system settings/SettingsPage';
import LogoutPage from './domain/admin-logout/LogoutPage';
import PrintCertificatesPage from './domain/admin-printcertificates/PrintcertificatesPage';
import DashboardLayout from './domain/layout/DashboardLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'household',
        element: <HouseholdPage />,
      },
      {
        path: 'account',
        element: <AccountPage />,
      },
      {
        path: 'print-certificates',
        element: <PrintCertificatesPage />,
      },
      {
        path: 'attendance',
        element: <AttendancePage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: 'logout',
        element: <LogoutPage />,
      },
    ],
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
