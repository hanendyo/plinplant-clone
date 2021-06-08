import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import NavbarLandingPage from '../../master/components/Navbar/NavbarLandingPage';
import Footer from '../../master/components/Footer/Footer';
import Loader from '../components/Loader';
import { Redirect } from 'react-router';

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  
  let userData = JSON.parse( localStorage.getItem('user-data') ) || {}
  console.log(`USERDATA-LANDINGPAGE: `, userData);

    useEffect(() => {
    setLoading(true);
    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {
      //   userData.data.loggedIn === true ? 
      // (loading ? (
      //   <Loader loading={loading} />
      // ) : (
      //   <div>
      //     <NavbarLandingPage />
      //     <Header />
      //     <Main />
      //     <Footer />
      //   </div>
      // )) 
      // : <Redirect to="/login"/>


      loading ? (
        <Loader loading={loading} />
      ) : (
        <div>
          <NavbarLandingPage />
          <Header />
          <Main />
          <Footer />
        </div>
      )
      // console.log(`USERDATA: `, userData)
      }
    </>
  );
};

export default LandingPage;
