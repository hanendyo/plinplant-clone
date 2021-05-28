import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../master/components/Navbar/Navbar';
import { Header } from '../../dhika/Ensiklopedia/';
import { Body } from '../../dhika/Ensiklopedia/';
import { CTAEnsiklopedia } from '../../dhika/Ensiklopedia/';
import { RelatedProduct } from '../../dhika/Ensiklopedia/';
import Footer from '../../master/components/Footer/Footer';
import axios from 'axios';
import { ContextStore } from '../../context/store/ContextStore';
import { getPlantById } from '../../context/actions/fetchingActions';

const Ensiklopedia = ({ match }) => {
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

  console.log('PLANT', plantIdState);

  return (
    <div>
      <Navbar />
      <Header />
      <Body />
      <CTAEnsiklopedia
        id={plantIdState.pk_plant_id}
        name={plantIdState.plant_name}
      />
      <RelatedProduct category={plantIdState.category_name} />
      <Footer colored />
    </div>
  );
};

export default Ensiklopedia;
