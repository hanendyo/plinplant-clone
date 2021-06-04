import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {
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
    plantIdState,
    plantIdDispatch,
    plantReviewDispatch,
    plantReviewState,
  } = useContext(ContextStore);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPlantId = async () => {
      const res = await axios.get(
        `http://localhost:5000/input/plant_get_by_id/${match.params.id}`
      );

      plantIdDispatch(getPlantById(res.data.data[0]));
    };

    const getPlantReview = async () => {
      const res = await axios.get(
        `http://localhost:5000/input/review/${match.params.id}`
      );

      plantReviewDispatch(getReviews(res.data.data));
    };

    window.scrollTo({
      top: 0,
    });

    setLoading(true);

    getPlantId();
    getPlantReview();

    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [match.params.id]);

  console.log('SHOP', plantIdState);
  console.log('REVIEWWWWW', plantReviewState);

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
