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
import AddInhabitant from './domain/admin-household/AddInhabitant';
import Complete from './domain/admin-household/completeProfile';
import Incomplete from './domain/admin-household/incompleteProfile';
import Others from './domain/admin-household/others';
import NewMeetingPage from '../app/domain/admin-Qr code attendance/NewMeetingPage';
import MeetingDetailsPage from '../app/domain/admin-Qr code attendance/MeetingDetailsPage';
import ScanPage from '../app/domain/admin-Qr code attendance/ScanPage';
import AddNewHousehold from './domain/admin-household/household/AddNewHousehold';
import AddAccount from './domain/admin-account/AddAccount';

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
        path: 'add-inhabitant',
        element: <AddInhabitant />,
      },
      {
        path: 'add-inhabitant/:householdUuid',
        element: <AddInhabitant />,
      },
      {
        path: 'household',
        element: <HouseholdPage />,
      },
      {
        path: 'add-household',
        element: <AddNewHousehold />,
      },
      {
        path: 'edit-household/:householdUuid',
        element: <AddNewHousehold />,
      },
      {
        path: 'others',
        element: <Others />,
      },

      {
        path: 'complete-page',
        element: <Complete />,
      },
      {
        path: 'incomplete-page',
        element: <Incomplete />,
      },
      {
        path: 'account',
        element: <AccountPage />,
      },
      {
        path: 'add-account',
        element: <AddAccount />,
      },
      {
        path: 'edit-account/:accountUuid',
        element: <AddAccount />,
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
        path: 'new-meeting',
        element: <NewMeetingPage />,
      },
      {
        path: 'meeting-details',
        element: <MeetingDetailsPage />,
      },
      {
        path: 'scan',
        element: <ScanPage />,
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
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
