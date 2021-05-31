import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { getPlantById } from '../../context/actions/fetchingActions';
import { ContextStore } from '../../context/store/ContextStore';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Shop from '../components/Shop/Shop';

const ShoppingPage = ({ match }) => {
  const { plantIdState, plantIdDispatch } = useContext(ContextStore);

  useEffect(() => {
    const getPlantId = async () => {
      const res = await axios.get(
        `http://localhost:5000/input/plant_get_by_id/${match.params.id}`
      );

      plantIdDispatch(getPlantById(res.data.data[0]));
    };

    window.scrollTo({
      top: 0,
    });

    getPlantId();
  }, [match.params.id]);

  console.log('SHOP', plantIdState);

  return (
    <div>
      <Navbar />
      <Shop />
      <Footer colored />
    </div>
  );
};

export default ShoppingPage;
