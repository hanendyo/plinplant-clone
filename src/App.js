import React from 'react';
import LandingPage from './fajariadi/components/LandingPage/LandingPage';
import Footer from './master/components/Footer/Footer';
import Navbar from './master/components/Navbar/Navbar';
import NavbarLandingPage from './master/components/Navbar/NavbarLandingPage';

const App = () => {
  return (
    <div>
      <h1>PlinPlant Progress</h1>
      <LandingPage />
      <NavbarLandingPage />
      <h1>Content</h1>
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
