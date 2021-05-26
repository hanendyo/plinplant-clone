import React, { useContext } from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/style';
import Button from '../../../master/components/additional/Button';
import Rating from '../../../master/components/additional/Rating';
import Quantity from './Quantity';
import { FaCheck, FaCircle, FaRegTrashAlt } from 'react-icons/fa';
import StatusOrder from './StatusOrder';
import { ContextStore } from '../../../context/store/ContextStore';
import { openModalReview } from '../../../context/actions';
import { useMediaQuery } from 'react-responsive';
import p from '../../../fajariadi/assets/images/dummy.jpg';

const Cards = ({
  name,
  img,
  created,
  text,
  rating,
  review,
  reviewed,
  cart,
  article,
  release_date,
  reading_time,
  title,
  author,
  checkout,
  slider,
  illustration,
  scroll,
  phase,
  price,
  quantity,
  totalPrice,
  no_order,
  status,
  transaction,
  invoice,
  address,
  phone,
  city,
  postal,
  route,
  selected,
  search,
  selectAddress,
}) => {
  const { modalReviewDispatch } = useContext(ContextStore);
  const isMini = useMediaQuery({ maxWidth: 370 });

  return (
    <>
      {slider && (
        <CardProductLandingPage>
          <span>{name}</span>

          <div>
            <h5>{name}</h5>

            {/* BUTTON CONTAINER */}
            <div>
              <a href='/shop'>
                <Button card text='Beli' bgColor={colors.green} />
              </a>

              <a href='/ensiklopedia'>
                <Button
                  card
                  text='Ensiklopedia'
                  bgColor={colors.lightGreenTransparent}
                />
              </a>
            </div>
            {/* END OF BUTTON CONTAINER */}
          </div>

          <img src={process.env.PUBLIC_URL + `/images/Plant/${img}`} alt='' />
        </CardProductLandingPage>
      )}

      {search && (
        <CardProductSearched>
          <span>{name}</span>

          <div>
            <h5>{name}</h5>

            {/* BUTTON CONTAINER */}
            <div>
              <a href='/shop'>
                <Button card text='Beli' bgColor={colors.green} />
              </a>

              <a href='/ensiklopedia'>
                <Button
                  card
                  text='Ensiklopedia'
                  bgColor={colors.lightGreenTransparent}
                />
              </a>
            </div>
            {/* END OF BUTTON CONTAINER */}
          </div>

          <img src={process.env.PUBLIC_URL + `/images/Plant/${img}`} alt='' />
        </CardProductSearched>
      )}

      {scroll && (
        <CardProductShop>
          <img src={img} alt='' />

          <div>
            <h5>{name}</h5>

            <a href='/shop'>
              <Button primary shop text='Beli' bgColor={colors.green} />
            </a>

            <a href='/ensiklopedia'>
              <Button
                primary
                shop
                text='Ensiklopedia'
                bgColor={colors.lightGreenTransparent}
              />
            </a>
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
            <div>
              <h5>{name}</h5>
              <span>{phase}</span>
            </div>

            <h5>{price}</h5>
          </div>

          <Quantity quantity={quantity} />

          <FaRegTrashAlt className='trash' />
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

      {transaction && (
        <CardTransaction>
          {/* Header Info */}
          <div>
            <p>
              Tanggal Pembelian :<span>{created}</span>
            </p>

            <p>
              No. Order :<span>PP-{no_order}</span>
            </p>

            <StatusOrder status={status} />
          </div>

          {/* Product Info */}
          <div>
            <img src={img} alt='' />

            <div>
              <h6>{name}</h6>
              <span>{phase}</span>
              <span>
                {quantity} barang x {price}
              </span>

              <span>+3 produk lainnya</span>
            </div>

            <div>
              <p>Total Belanja</p>
              <h6>{totalPrice}</h6>
            </div>
          </div>

          {/* Button Container */}
          <div>
            {status === 'Transaksi Selesai' ? (
              <div>
                <a href='/invoice'>
                  <Button
                    primary
                    address
                    text='Lihat Detail Transaksi'
                    bgColor='unset'
                  />
                </a>

                <a href='/invoice'>
                  <Button
                    primary
                    address
                    text='Beri Ulasan'
                    bgColor={colors.yellow}
                  />
                </a>
              </div>
            ) : (
              <a href='/invoice'>
                <Button
                  primary
                  address
                  text='Lihat Detail Transaksi'
                  bgColor={colors.yellow}
                />
              </a>
            )}
          </div>
        </CardTransaction>
      )}

      {invoice && (
        <CardInvoice>
          <div>
            <img src={img} alt='' />

            <div>
              <h6>{name}</h6>
              <span>{phase}</span>
              <span>
                {quantity} barang (500 gr) x {price}
              </span>
            </div>
          </div>

          {status === 'selesai' && (
            <>
              {reviewed ? (
                <Rating reviewed rate={4} />
              ) : (
                <div>
                  <Button
                    primary
                    shop
                    address
                    text='Beri Ulasan'
                    bgColor={colors.lightGreenTransparent}
                    onClick={() => modalReviewDispatch(openModalReview())}
                  />
                </div>
              )}
            </>
          )}
        </CardInvoice>
      )}

      {article && (
        <CardArticle>
          <img src={img} alt='' />

          <div>
            <h6>{title}</h6>
            <span>
              Oleh <strong>{author}</strong>
            </span>

            {isMini ? (
              <p>{release_date}</p>
            ) : (
              <p>
                {release_date} <FaCircle size={5} className='circle' />{' '}
                {reading_time} menit baca
              </p>
            )}
          </div>
        </CardArticle>
      )}

      {address && (
        <CardAddress>
          <div>
            <h6>{name}</h6>
            <span>{phone}</span>
          </div>

          <p>{route}</p>
          <p>
            {city}, {postal}
          </p>

          <button>Ubah Alamat</button>

          {selected ? (
            <FaCheck size={20} color={colors.white} className='checked' />
          ) : (
            <Button primary text='Pilih' bgColor={colors.darkGreen} />
          )}
        </CardAddress>
      )}

      {selectAddress && (
        <CardModalAddress>
          <div>
            <h6>{name}</h6>
            <span>{phone}</span>
          </div>

          <p>{route}</p>
          <p>
            {city}, {postal}
          </p>

          <button>Ubah Alamat</button>

          {selected ? (
            <FaCheck size={20} color={colors.white} className='checked' />
          ) : (
            <Button primary text='Pilih' bgColor={colors.darkGreen} />
          )}
        </CardModalAddress>
      )}
    </>
  );
};

const CardProductLandingPage = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  & > span {
    display: block;
    position: absolute;
    background-color: #22222280;
    padding: 20px 0;
    right: 0;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    transition: all 0.5s ease;
  }

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

    & > div {
      display: flex;
    }
  }

  & > img {
    border-radius: 10px;
    width: 500px;
    height: 200px;
    object-fit: cover;
  }

  &:hover {
    & > span {
      /* top: 0; */
      opacity: 0;
      transform: translateY(-150%);
    }

    & > div {
      transform: translateY(0);
      transition: all 0.5s ease;
    }
  }
`;

const CardProductSearched = styled(CardProductLandingPage)`
  margin: 5px;

  & > img {
    width: 300px;
    /* max-width: 500px; */
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

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

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
  padding: 10px 20px 15px;
  border-radius: 10px;
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }

  & > div {
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
  position: relative;

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

    & > div {
      & > h5 {
        color: ${colors.white};
      }

      & > span {
        display: inline-block;
        background-color: ${colors.lightGreenTransparent};
        padding: 3px 10px;
        border-radius: 5px;
        font-size: 14px;
        margin-top: 5px;
      }
    }

    & > h5 {
      color: ${colors.white};
      margin-top: 20px;
    }
  }

  & > h5 {
    color: ${colors.white};
    margin-right: 10px;
  }

  @media (max-width: 760px) {
    align-items: flex-start;
    padding-right: 10px;

    & > img {
      margin-right: 10px;
    }

    & > div {
      &:last-of-type {
        flex: unset;
        margin-right: unset;
      }
    }

    & > .trash {
      position: absolute;
      bottom: 20px;
      right: 10px;
      font-size: 20px;
    }
  }
`;

const CardCheckout = styled(CardCart)`
  & > div {
    & > h5 {
      margin-top: 0;
      margin-bottom: 5px;
    }

    &:first-of-type > span:first-of-type {
      background-color: ${colors.lightGreenTransparent};
      padding: 3px 7px;
      border-radius: 5px;
      font-size: 14px;
    }

    &:first-of-type > span:last-of-type {
      display: block;
      font-size: 14px;
      margin-top: 10px;
    }
  }

  @media (max-width: 760px) {
    align-items: center;

    & > div:first-of-type {
      flex: 1;
      margin-right: 10px;
    }

    & > h5 {
      margin-right: unset;
    }
  }
`;

const CardTransaction = styled.div`
  background-color: ${colors.darkGreen};
  padding: 15px 30px 70px;
  border-radius: 10px;
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }

  /* Header info */
  & > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    & > p {
      &:nth-of-type(2) {
        flex: 1;
        border-left: 1px solid ${colors.yellowTransparent};
        margin-left: 20px;
        padding-left: 20px !important;
      }

      & > span {
        margin-left: 10px;
      }
    }
  }

  /* Product info */
  & > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 10px;
    }

    & > div:nth-of-type(1) {
      flex: 1;
      margin-left: 20px;

      & > h6 {
        color: ${colors.white};
      }

      & > span {
        display: block;
        font-size: 14px;

        &:nth-of-type(1) {
          background-color: ${colors.lightGreenTransparent};
          width: fit-content;
          padding: 3px 10px;
          border-radius: 10px;
          font-size: 12px;
        }

        &:nth-of-type(2) {
          margin: 5px 0 10px;
        }
      }
    }

    & > div:nth-of-type(2) {
      border-left: 1px solid ${colors.lightGreenTransparent};
      padding-left: 30px;

      & > h6 {
        color: ${colors.white};
        margin-top: 10px;
      }
    }
  }

  /* Button Container */
  & > div:nth-of-type(3) {
    position: absolute;
    bottom: 15px;
    right: 30px;

    & > button {
      margin-left: 10px;
    }
  }

  @media (max-width: 900px) {
    & > div:nth-of-type(1) {
      & > p {
        display: flex;
        flex-direction: column;

        & > span {
          margin-left: unset;
        }
      }
    }
  }

  @media (max-width: 760px) {
    padding: 15px 15px 80px;

    & > div:nth-of-type(1) {
      flex-direction: column;
      align-items: unset;
      margin-bottom: 30px;

      & > p {
        margin-bottom: 10px;
        flex-direction: row;
        justify-content: space-between;

        &:nth-of-type(2) {
          flex: 1;
          border-left: unset;
          margin-left: unset;
          padding-left: unset !important;
        }

        & > span {
          margin-left: 10px;
        }
      }

      /* :: STATUS :: */
      & > span {
        align-self: flex-end;
      }
    }

    & > div:nth-of-type(2) {
      align-items: flex-start;

      & > div:nth-of-type(1) {
        margin-left: 10px;
      }

      & > div:nth-of-type(2) {
        padding-left: 20px;
        margin-left: 20px;
      }
    }

    & > div:nth-of-type(3) {
      bottom: 15px;
      right: 15px;
    }
  }
`;

const CardInvoice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background-color: red; */

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

  & > div:first-of-type {
    display: flex;
    /* background-color: green; */

    & > img {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      margin-right: 10px;
      object-fit: cover;
    }

    & > div {
      & > h6 {
        color: ${colors.white};
      }

      & > span {
        display: block;
        font-size: 12px;

        &:first-of-type {
          background-color: ${colors.lightGreenTransparent};
          width: fit-content;
          padding: 3px 7px;
          border-radius: 5px;
          margin-bottom: 5px;
        }
      }
    }
  }

  @media (max-width: 760px) {
    & > div:first-of-type {
      & > div {
        /* background-color: red; */
        width: 120px;
      }
    }
  }
`;

const CardArticle = styled.div`
  background-color: ${colors.lightGreenTransparent};
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

  &:first-of-type,
  &:hover {
    background-color: ${colors.lightGreen};

    & > div {
      & > span,
      p {
        font-size: 14px;
        color: #22222280;
      }
    }
  }

  & > img {
    width: 130px;
    height: 120px;
    object-fit: cover;
    margin-right: 10px;
  }

  & > div {
    padding: 10px 0;

    & > h6 {
      color: ${colors.white};
    }

    & > span,
    p {
      font-size: 14px;
      color: ${colors.lightGreen};
    }

    & > p {
      display: flex;
      align-items: center;

      & > .circle {
        margin: 0 5px;
      }
    }
  }
`;

const CardAddress = styled.div`
  background-color: ${colors.lightGreenTransparent};
  border-radius: 10px;
  padding: 20px 30px;
  position: relative;
  overflow: hidden;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }

  &::before {
    content: '';
    width: 20px;
    height: 50px;
    background-color: ${colors.lightGreen};
    position: absolute;
    border-radius: 999px;
    top: 30px;
    left: -10px;
  }

  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    & > h6 {
      color: ${colors.white};
    }

    & > span {
      display: block;
      font-size: 12px;
      background-color: ${colors.lightGreenTransparent};
      padding: 3px 7px;
      border-radius: 5px;
      margin-left: 10px;
    }
  }

  & > button:nth-of-type(1) {
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-family: inherit;
    font-weight: 500;
    color: ${colors.lightGreen};
    margin-top: 30px;
    cursor: pointer;
    outline: none;
  }

  & > button:nth-of-type(2),
  & > .checked {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
  }

  @media (max-width: 760px) {
    padding: 10px 15px;

    &::before {
      width: 15px;
      height: 40px;
      top: 30px;
      left: -8px;
    }

    & > p {
      width: 200px;
    }

    & > button:nth-of-type(2),
    & > .checked {
      right: 15px;
    }
  }
`;

const CardModalAddress = styled(CardAddress)`
  background-color: transparent;
  border: 2px solid ${colors.lightGreen};
  color: ${colors.black};

  & > div {
    & > h6 {
      color: ${colors.black};
    }
  }

  & > p {
    font-size: 14px;
    max-width: 350px;
  }

  & > button:nth-of-type(1) {
    color: ${colors.green};
  }
`;

export default Cards;
