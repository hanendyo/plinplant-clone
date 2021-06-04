import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { getCarts, getAddresses } from '../../context/actions/fetchingActions';
import { ContextStore } from '../../context/store/ContextStore';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Checkout from '../components/Checkout/Checkout';
import Loader from '../components/Loader';

const CheckoutPage = () => {
  const { userCartDispatch, userAddressDispatch, userInfoState } =
    useContext(ContextStore);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const getCartUserId = async () => {
    //   const res = await axios.get(
    //     `http://localhost:5000/input/cart/${userInfoState[0]?.pk_user_id}`
    //   );
    //   userCartDispatch(getCarts(res.data.data));
    // };

    // const getAddressUserId = async () => {
    //   const res = await axios.get(
    //     `http://localhost:5000/input/address/${userInfoState[0]?.pk_user_id}`
    //   );
    //   userAddressDispatch(getAddresses(res.data.data));
    // };

    setLoading(true);

    // getCartUserId();
    // getAddressUserId();

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
