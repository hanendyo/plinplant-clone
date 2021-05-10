import React from 'react';
import Profile from '../../dhika/Profile/Profile';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <Profile />
      <Footer colored />
    </>
  );
};

export default ProfilePage;
