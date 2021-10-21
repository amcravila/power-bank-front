import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Customers from './pages/Customers';
import Chat from './pages/Chat';
import Participants from './pages/Participants';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to='/dashboard/app' replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'customers', element: <Customers /> },
        { path: 'products', element: <Products /> },
        { path: 'profile', element: <Profile /> },
        { path: 'chat', element: <Chat /> },
        { path: 'participants', element: <Participants /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [{ path: '/', element: <Navigate to='/dashboard' /> }],
    },
  ]);
}
