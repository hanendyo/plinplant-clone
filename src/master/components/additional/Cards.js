import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/style';
import Button from '../../../master/components/additional/Button';

const Cards = ({ name, img }) => {
  return (
    <CardProductLandingPage>
      <div>
        <h5>{name}</h5>
        <Button card text='Beli' bgColor={colors.green} />
        <Button
          card
          text='Ensiklopedia'
          bgColor={colors.lightGreenTransparent}
        />
      </div>
      <img src={img} alt='' />
    </CardProductLandingPage>
  );
};

const CardProductLandingPage = styled.div`
  position: relative;
  overflow: hidden;

  & > div {
    background: linear-gradient(to top, #111, #11111100);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    border-radius: 0 0 10px 10px;
    transform: translateY(100%);
    transition: all 0.5s ease;

    & > h5 {
      color: ${colors.white};
      margin-bottom: 5px;
    }
  }

  & > img {
    border-radius: 10px;
  }

  &:hover {
    & > div {
      transform: translateY(0);
      transition: all 0.5s ease 0.3s;
    }
  }
`;

export default Cards;
