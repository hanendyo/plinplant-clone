import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import { colors } from '../../master/constant/style';

const Loader = ({ loading }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.green,
      }}
    >
      <PuffLoader color={colors.lightGreen} loading={loading} size={150} />
    </div>
  );
};

export default Loader;
