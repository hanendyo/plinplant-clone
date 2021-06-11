import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { getAddresses } from '../../context/actions/fetchingActions';
import { ContextStore } from '../../context/store/ContextStore';
import Profile from '../../dhika/Profile/Profile';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Loader from '../components/Loader';

const ProfilePage = () => {
  const { userAddressDispatch, userAddressState, userLoginState } =
    useContext(ContextStore);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userAddressDispatch(getAddresses(userLoginState));

    setLoading(true);

    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 10);
  }, [userAddressDispatch]);

  console.log('PROFILEEEEE', userAddressState);

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div>
          <Navbar />
          <Profile />
          <Footer colored />
        </div>
      )}
    </>
  );
};

export default ProfilePage;
