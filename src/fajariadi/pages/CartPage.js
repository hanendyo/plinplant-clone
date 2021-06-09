import React, { useContext, useEffect, useState } from 'react';
import { getAddresses, getCarts } from '../../context/actions/fetchingActions';
import { ContextStore } from '../../context/store/ContextStore';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Cart from '../components/Cart/Cart';
import Loader from '../components/Loader';

const CartPage = () => {
  const { userCartDispatch, userLoginState, userAddressDispatch } =
    useContext(ContextStore);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    userCartDispatch(getCarts(userLoginState));

    userAddressDispatch(getAddresses(userLoginState));

    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [userCartDispatch]);

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div>
          <Navbar />
          <Cart />
          <Footer colored />
        </div>
      )}
    </>
  );
};

export default CartPage;
