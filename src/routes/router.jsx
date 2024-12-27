import React, { lazy} from 'react';

const HomePage = lazy(() => import('../components/Pages/Home'));
const DetailsPage = lazy(() => import('../components/Pages/Details'));
const SettingsPage = lazy(() => import('../components/Pages/Settings'));
const NotFoundPage = lazy(() => import('../components/Pages/NotFound'));

export const router = [
  {
    path: '/',
    element: <HomePage/>,
  },
  {
    path: '/details/:id',
    element: <DetailsPage/>
  },
  {
    path: '/settings',
    element: <SettingsPage/>
  },
  {
    path: '*',
    element: <NotFoundPage/>
  }
]
