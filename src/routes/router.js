import { lazy } from 'react';

const HomePage = lazy(() => import('../components/Pages/Home'));
const DetailsPage = lazy(() => import('../components/Pages/Details'));
const SettingsPage = lazy(() => import('../components/Pages/Settings'));
const ErrorViewPage = lazy(() => import('../components/Pages/ErrorView'));

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
    element: <ErrorViewPage message={'Press nav tab :)'} />,
  },
];
