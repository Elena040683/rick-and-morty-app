import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { router } from './routes/router';
import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CheckConnection } from './components/CheckConnection/CheckConnection';
import Navigator from './routes/routerMob';

const App = () => {
  return (
    <CheckConnection>
      <>
        {/* <Navigator /> */}
        <Router>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              {router.map((route, index) => {
                console.log(route);
                const { path, element } = route;
                return <Route key={index} path={path} element={element} />;
              })}
            </Routes>
          </Suspense>
        </Router>
      </>
    </CheckConnection>
  );
};

export default App;
