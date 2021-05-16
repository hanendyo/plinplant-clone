import React from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import { colors } from '../../constant/style';

const Rating = ({ rate }) => {
  return (
    <>
      {rate === 5 && (
        <Star>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
        </Star>
      )}

      {rate === 4 && (
        <Star>
          <FaStar /> <FaStar /> <FaStar /> <FaStar />{' '}
          <FaStar color={colors.lightGreenTransparent} />
        </Star>
      )}

      {rate === 3 && (
        <Star>
          <FaStar /> <FaStar /> <FaStar />{' '}
          <FaStar color={colors.lightGreenTransparent} />{' '}
          <FaStar color={colors.lightGreenTransparent} />
        </Star>
      )}

      {rate === 2 && (
        <Star>
          <FaStar /> <FaStar /> <FaStar color={colors.lightGreenTransparent} />{' '}
          <FaStar color={colors.lightGreenTransparent} />{' '}
          <FaStar color={colors.lightGreenTransparent} />
        </Star>
      )}

      {rate === 1 && (
        <Star>
          <FaStar /> <FaStar color={colors.lightGreenTransparent} />{' '}
          <FaStar color={colors.lightGreenTransparent} />{' '}
          <FaStar color={colors.lightGreenTransparent} />{' '}
          <FaStar color={colors.lightGreenTransparent} />
        </Star>
      )}
    </>
  );
};

const Star = styled.p`
  /* margin: 5px 0; */
  color: ${colors.yellow};
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default Rating;
