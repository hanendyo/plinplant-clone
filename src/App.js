import React from 'react';
import LandingPage from './fajariadi/pages/LandingPage';
// import Navbar from './master/components/Navbar/Navbar';
import Footer from './master/components/Footer/Footer';
import NavbarLandingPage from './master/components/Navbar/NavbarLandingPage';

const App = () => {
  return (
    <div>
      <NavbarLandingPage />
      <LandingPage />
      {/* <Navbar /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
