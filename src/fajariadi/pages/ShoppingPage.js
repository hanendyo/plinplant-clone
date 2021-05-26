import React from 'react';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Shop from '../components/Shop/Shop';

const ShoppingPage = () => {
  return (
    <div>
      <Navbar />
      <Shop />
      <Footer colored />
    </div>
  );
};

export default ShoppingPage;
