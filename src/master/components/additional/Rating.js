import React from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import { colors } from '../../constant/style';

const Rating = ({ rate, reviewed }) => {
  return (
    <div>
      {rate === 5 && (
        <Star reviewed={reviewed}>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
        </Star>
      )}

      {rate === 4 && (
        <Star reviewed={reviewed}>
          <FaStar /> <FaStar /> <FaStar /> <FaStar />{' '}
          <FaStar color={colors.lightGreenTransparent} />
        </Star>
      )}

      {rate === 3 && (
        <Star reviewed={reviewed}>
          <FaStar /> <FaStar /> <FaStar />{' '}
          <FaStar color={colors.lightGreenTransparent} />{' '}
          <FaStar color={colors.lightGreenTransparent} />
        </Star>
      )}

      {rate === 2 && (
        <Star reviewed={reviewed}>
          <FaStar /> <FaStar /> <FaStar color={colors.lightGreenTransparent} />{' '}
          <FaStar color={colors.lightGreenTransparent} />{' '}
          <FaStar color={colors.lightGreenTransparent} />
        </Star>
      )}

      {rate === 1 && (
        <Star reviewed={reviewed}>
          <FaStar /> <FaStar color={colors.lightGreenTransparent} />{' '}
          <FaStar color={colors.lightGreenTransparent} />{' '}
          <FaStar color={colors.lightGreenTransparent} />{' '}
          <FaStar color={colors.lightGreenTransparent} />
        </Star>
      )}

      {rate === 0 && (
        <Star reviewed={reviewed}>
          <FaStar color={colors.lightGreenTransparent} />{' '}
          <FaStar color={colors.lightGreenTransparent} />{' '}
          <FaStar color={colors.lightGreenTransparent} />{' '}
          <FaStar color={colors.lightGreenTransparent} />{' '}
          <FaStar color={colors.lightGreenTransparent} />
        </Star>
      )}
    </div>
  );
};

const Star = styled.p`
  /* margin: 5px 0; */
  color: ${colors.yellow};
  position: ${({ reviewed }) => (reviewed ? 'auto' : 'absolute')};
  top: ${({ reviewed }) => (reviewed ? 'unset' : '10px')};
  right: ${({ reviewed }) => (reviewed ? 'unset' : '10px')};
`;

export default Rating;
