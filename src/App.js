import React from 'react';
import SignIn from './hanendyo/SignIn/SignIn';
import SignUp from './hanendyo/SignUp/SignUp';
import Footer from './master/components/Footer/Footer';
import Navbar from './master/components/Navbar/Navbar';
import NavbarLandingPage from './master/components/Navbar/NavbarLandingPage';

const App = () => {
  return (
    <div>
      <SignUp/>
      <SignIn/>
      {/* <NavbarLandingPage />
      <h1>Content</h1>
      <Navbar />
      <Footer /> */}
    </div>
  );
};

export default App;
