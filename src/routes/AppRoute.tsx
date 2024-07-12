// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import LoginPage from '../app/domain/login/LoginPage';
// import DashboardPage from '../app/domain/admin-dashboard/DashboardPage';
// import HouseholdPage from '../app/domain/admin-household/HouseholdPage';
// import AccountPage from '../app/domain/admin-account/AccountPage';
// import LogoutPage from '../app/domain/admin-logout/LogoutPage';
// import DashboardLayout from '../app/domain/layout/DashboardLayout';
// import AddNewUser from '../app/domain/admin-account/AddNewUser';
// import PrintCertificatesPage from '../app/domain/admin-printcertificates/PrintcertificatesPage';
// import AttendancePage from '../app/domain/admin-Qr code attendance/AttendancePage';
// import SettingsPage from '../app/domain/admin-system settings/SettingsPage';
// import AddNewHousehold from '../app/domain/admin-household/AddNewHousehold';
// import Complete from '../app/domain/admin-household/completeProfile';
// import Incomplete from '../app/domain/admin-household/incompleteProfile';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <LoginPage />,
//   },
//   {
//     path: '/dashboard',
//     element: <DashboardLayout />,
//     children: [
//       {
//         index: true,
//         element: <DashboardPage />,
//       },
//       {
//         path: 'newHousehold',
//         element: <AddNewHousehold />,
//       },
//       {
//         path: 'household',
//         element: <HouseholdPage />,
//       },
//       {
//         path: 'complete-page',
//         element: <Complete />,
//       },
//       {
//         path: 'incomplete-page',
//         element: <Incomplete />,
//       },
//       {
//         path: 'account',
//         element: <AccountPage />,
//       },
//       {
//         path: 'add-new-user',
//         element: <AddNewUser />,
//       },
//       {
//         path: 'print-certificates',
//         element: <PrintCertificatesPage />,
//       },
//       {
//         path: 'attendance',
//         element: <AttendancePage />,
//       },
//       {
//         path: 'settings',
//         element: <SettingsPage />,
//       },
//       {
//         path: 'logout',
//         element: <LogoutPage />,
//       },
//     ],
//   },
// ]);

// const AppRoutes: React.FC = () => {
//   return <RouterProvider router={router} />;
// };

// export default AppRoutes;
import React from 'react';

export default function AppRoute() {
  return <div>AppRoute</div>;
}
