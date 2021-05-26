import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import NavbarLandingPage from '../../master/components/Navbar/NavbarLandingPage';
import Footer from '../../master/components/Footer/Footer';

const LandingPage = () => {
  return (
    <div>
      <NavbarLandingPage />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default LandingPage;
