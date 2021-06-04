import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { getAddresses } from '../../context/actions/fetchingActions';
import { ContextStore } from '../../context/store/ContextStore';
import Profile from '../../dhika/Profile/Profile';
import Footer from '../../master/components/Footer/Footer';
import Navbar from '../../master/components/Navbar/Navbar';
import Loader from '../components/Loader';

const ProfilePage = () => {
  const { userAddressDispatch, userAddressState, userInfoState } =
    useContext(ContextStore);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAddressUserId = async () => {
      const res = await axios.get(
        `http://localhost:5000/input/address/${userInfoState[0]?.pk_user_id}`
      );
      userAddressDispatch(getAddresses(res.data.data));
    };

    setLoading(true);

    getAddressUserId();

    // ::: LOADING TIME :::
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
