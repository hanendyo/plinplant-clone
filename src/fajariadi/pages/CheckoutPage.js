import React from 'react';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Checkout from '../components/Checkout/Checkout';

const CheckoutPage = () => {
  return (
    <>
      <Navbar />
      <Checkout />
      <Footer colored />
    </>
  );
};

export default CheckoutPage;
