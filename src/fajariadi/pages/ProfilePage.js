import React from 'react';
import Profile from '../../dhika/Profile/Profile';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <Footer colored />
    </div>
  );
};

export default ProfilePage;
