import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import {
  decrementCart,
  getCarts,
  incrementCart,
} from '../../../context/actions/fetchingActions';
import { ContextStore } from '../../../context/store/ContextStore';
import { colors } from '../../constant/style';

const Quantity = ({ quantity, setQuantity, pk_cart_id, shop }) => {
  const { userCartDispatch, userInfoState } = useContext(ContextStore);

  return (
    <>
      {shop ? (
        <Counter shop={shop}>
          <span onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}>
            -
          </span>
          <span>{quantity}</span>
          <span onClick={() => setQuantity(quantity + 1)}>+</span>
        </Counter>
      ) : (
        <Counter>
          <span
            onClick={() =>
              userCartDispatch(decrementCart({ quantity, pk_cart_id }))
            }
          >
            -
          </span>
          <span>{quantity}</span>
          <span
            onClick={() =>
              userCartDispatch(incrementCart({ quantity, pk_cart_id }))
            }
          >
            +
          </span>
        </Counter>
      )}
    </>
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
    position: ${({ shop }) => (shop ? 'absolute' : 'auto')};
    bottom: ${({ shop }) => (shop ? '-60px' : 'auto')};
    right: ${({ shop }) => (shop ? '30px' : 'auto')};
    margin: unset;
    margin-left: 20px;
  }
`;

export default Quantity;
