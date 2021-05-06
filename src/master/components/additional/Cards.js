import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/style';
import Button from '../../../master/components/additional/Button';
import Rating from '../../../master/components/additional/Rating';

const Cards = ({
  name,
  img,
  created,
  text,
  rating,
  review,
  slider,
  illustration,
  scroll,
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

          <div className='shop'>
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
  border-radius: 10px;
  overflow: hidden;
  width: fit-content;
  margin-bottom: 10px;

  & > img {
    width: 130px;
    height: 130px;
    object-fit: cover;
    box-shadow: 7px 0 10px rgba(0, 0, 0, 0.1);
  }

  & > div {
    display: flex;
    flex-direction: column;
    padding: 10px;

    & > h5 {
      color: ${colors.white};
      margin-bottom: 10px;
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

export default Cards;
