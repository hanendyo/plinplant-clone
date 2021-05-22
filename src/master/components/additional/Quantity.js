import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/style';

const Quantity = ({ quantity, shop }) => {
  return (
    <Counter shop={shop}>
      <span>-</span>
      <span>{quantity}</span>
      <span>+</span>
    </Counter>
  );
};

const Counter = styled.div`
  display: flex;
  justify-content: ${({ shop }) => (shop ? 'flex-end' : 'unset')};
  align-items: center;

  & > span {
    display: block;

    &:nth-of-type(odd) {
      background-color: ${colors.lightGreenTransparent};
      padding: 0 5px;
      border-radius: 50%;
      font-weight: 500;
      cursor: pointer;
    }

    &:nth-of-type(even) {
      font-weight: 500;
      font-size: 24px;
      width: 70px;
      text-align: center;
    }
  }

  @media (max-width: 760px) {
    position: absolute;
    bottom: -60px;
    right: 30px;
  }
`;

export default Quantity;
