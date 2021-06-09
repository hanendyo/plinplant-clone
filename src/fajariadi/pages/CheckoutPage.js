import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {
  getCarts,
  getAddresses,
  getBanks,
} from '../../context/actions/fetchingActions';
import { ContextStore } from '../../context/store/ContextStore';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Checkout from '../components/Checkout/Checkout';
import Loader from '../components/Loader';

const CheckoutPage = () => {
  const {
    userCartDispatch,
    userAddressDispatch,
    userLoginState,
    bankDispatch,
    bankState,
  } = useContext(ContextStore);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    bankDispatch(getBanks());

    userCartDispatch(getCarts(userLoginState));

    userAddressDispatch(getAddresses(userLoginState));

    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div>
          <Navbar />
          <Checkout />
          <Footer colored />
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
