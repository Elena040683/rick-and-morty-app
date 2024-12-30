import { lazy } from 'react';

const HomePage = lazy(() => import('../components/Pages/Home'));
const DetailsPage = lazy(() => import('../components/Pages/Details'));
const SettingsPage = lazy(() => import('../components/Pages/Settings'));
const StartViewPage = lazy(() => import('../components/Pages/StartView'));

export const router = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/details/:id',
    element: <DetailsPage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  {
    path: '*',
    element: <StartViewPage message={'Press nav tab :)'} />,
  },
];
