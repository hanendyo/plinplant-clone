import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { getCarts } from '../../context/actions/fetchingActions';
import { ContextStore } from '../../context/store/ContextStore';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Cart from '../components/Cart/Cart';
import Loader from '../components/Loader';

const CartPage = () => {
  const { userCartDispatch, userCartState, userInfoState } =
    useContext(ContextStore);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const getCartUserId = async () => {
      const res = await axios.get(
        `http://localhost:5000/input/cart/${userInfoState[0]?.pk_user_id}`
      );

      userCartDispatch(getCarts(res.data.data));
    };

    getCartUserId();

    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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
