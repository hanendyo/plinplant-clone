import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {
  getCarts,
  getPlantById,
  getReviews,
} from '../../context/actions/fetchingActions';
import { ContextStore } from '../../context/store/ContextStore';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Loader from '../components/Loader';
import Shop from '../components/Shop/Shop';

const ShoppingPage = ({ match }) => {
  const {
    plantIdDispatch,
    plantReviewDispatch,
    userCartDispatch,
    userCartState,
    userLoginState,
  } = useContext(ContextStore);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    plantIdDispatch(getPlantById(match));

    plantReviewDispatch(getReviews(match));

    if (userLoginState) userCartDispatch(getCarts(userLoginState));

    window.scrollTo({ top: 0 });

    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [match.params.id, userCartDispatch]);

  console.log('SHOPP STATE', userCartState);

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div>
          <Navbar />
          <Shop />
          <Footer colored />
        </div>
      )}
    </>
  );
};

export default ShoppingPage;
