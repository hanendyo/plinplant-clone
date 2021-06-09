import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../master/components/Navbar/Navbar';
import { Header } from '../../dhika/Ensiklopedia/';
import { Body } from '../../dhika/Ensiklopedia/';
import { CTAEnsiklopedia } from '../../dhika/Ensiklopedia/';
import { RelatedProduct } from '../../dhika/Ensiklopedia/';
import Footer from '../../master/components/Footer/Footer';
import { ContextStore } from '../../context/store/ContextStore';
import { getPlantById } from '../../context/actions/fetchingActions';
import Loader from '../components/Loader';

const Ensiklopedia = ({ match }) => {
  const { plantIdState, plantIdDispatch } = useContext(ContextStore);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    plantIdDispatch(getPlantById(match));

    window.scrollTo({ top: 0 });

    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [match.params.id]);

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
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
      )}
    </>
  );
};

export default Ensiklopedia;
