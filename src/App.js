import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Settings from './components/Pages/Settings';
// import Details from './components/Pages/Details';
// import Home from './components/Pages/Home';
// import NotFound from './components/Pages/NotFound';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./components/Pages/Home'));
const DetailsPage = lazy(() => import('./components/Pages/Details'));
const SettingsPage = lazy(() => import('./components/Pages/Settings'));
const NotFoundPage = lazy(() => import('./components/Pages/NotFound'));

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="details/:id" element={<DetailsPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
