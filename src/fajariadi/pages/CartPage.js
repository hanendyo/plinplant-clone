import React from 'react';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Cart from '../components/Cart/Cart';

const CartPage = () => {
  return (
    <div>
      <Navbar />
      <Cart />
      <Footer colored />
    </div>
  );
};

export default CartPage;
