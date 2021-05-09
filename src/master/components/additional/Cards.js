import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/style';
import Button from '../../../master/components/additional/Button';
import Rating from '../../../master/components/additional/Rating';
import Quantity from './Quantity';
import { FaRegTrashAlt } from 'react-icons/fa';

const Cards = ({
  name,
  img,
  created,
  text,
  rating,
  review,
  cart,
  checkout,
  slider,
  illustration,
  scroll,
  phase,
  price,
  quantity,
}) => {
  return (
    <>
      {slider && (
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
      )}

      {scroll && (
        <CardProductShop>
          <img src={img} alt='' />

          <div>
            <h5>{name}</h5>
            <Button primary shop text='Beli' bgColor={colors.green} />
            <Button
              primary
              shop
              text='Ensiklopedia'
              bgColor={colors.lightGreenTransparent}
            />
          </div>
        </CardProductShop>
      )}

      {illustration && (
        <CardValueProps>
          <img src={img} alt='' />
          <h5>{name}</h5>
        </CardValueProps>
      )}

      {review && (
        <CardReview>
          <div>
            <h6>{name}</h6>
            <span>{created}</span>
          </div>

          <p>{text}</p>

          <img src={img} alt='' />

          <Rating rate={rating} />
        </CardReview>
      )}

      {cart && (
        <CardCart>
          <img src={img} alt='' />

          <div>
            <h5>{name}</h5>
            <span>{phase}</span>
          </div>

          <h5>{price}</h5>

          <Quantity quantity={quantity} />

          <FaRegTrashAlt />
        </CardCart>
      )}

      {checkout && (
        <CardCheckout>
          <img src={img} alt='' />

          <div>
            <h5>{name}</h5>
            <span>{phase}</span>
            <span>1 barang (500 gr)</span>
          </div>

          <h5>{price}</h5>
        </CardCheckout>
      )}
    </>
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
      transition: all 0.5s ease;
    }
  }
`;

const CardValueProps = styled.div`
  &:not(:last-of-type) {
    margin-right: 10px;
  }

  & > img {
    margin-bottom: 10px;
  }
`;

const CardProductShop = styled.div`
  background-color: ${colors.lightGreenTransparent};
  display: flex;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  margin-bottom: 10px;

  & > img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    box-shadow: 7px 0 10px rgba(0, 0, 0, 0.1);
  }

  & > div {
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    & > h5 {
      color: ${colors.white};
      margin-bottom: 5px;
      font-size: 14px;
    }
  }
`;

const CardReview = styled.div`
  background-color: ${colors.lightGreenTransparent};
  margin-bottom: 15px;
  padding: 10px 20px 15px;
  border-radius: 10px;
  position: relative;

  & > div {
    /*  */
    margin-left: 30px;

    & > h6 {
      color: ${colors.white};
    }

    & > span {
      font-size: 12px;
      display: block;
      margin-bottom: 10px;
    }
  }

  & > p {
    font-size: 14px;
  }

  & > img {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: -8px;
    left: -8px;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.2);
  }
`;

const CardCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.lightGreenTransparent};
  border-radius: 10px;
  padding: 10px;
  padding-right: 30px;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }

  & > img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 20px;
  }

  & > div {
    flex: 1;
    margin-right: 10px;

    &:last-of-type {
      justify-content: center;
    }

    & > h5 {
      color: ${colors.white};
    }

    &:first-of-type > span {
      display: inline-block;
      background-color: ${colors.lightGreenTransparent};
      padding: 3px 10px;
      border-radius: 10px;
      font-size: 12px;
      margin-top: 5px;
    }
  }

  & > h5 {
    color: ${colors.white};
    margin-right: 10px;
  }
`;

const CardCheckout = styled(CardCart)`
  & > div {
    &:first-of-type > span:first-of-type {
      margin-top: 0;
    }

    &:first-of-type > span:last-of-type {
      display: block;
      background-color: unset;
      padding: unset;
      font-size: 14px;
      margin-top: 10px;
    }
  }
`;

export default Cards;
