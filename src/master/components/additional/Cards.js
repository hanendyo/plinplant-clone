import React, { useContext } from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/style';
import Button from '../../../master/components/additional/Button';
import Rating from '../../../master/components/additional/Rating';
import Quantity from './Quantity';
import { FaCheck, FaCircle, FaRegTrashAlt } from 'react-icons/fa';
import StatusOrder from './StatusOrder';
import { ContextStore } from '../../../context/store/ContextStore';
import { openModalReview, setSelectedAddress } from '../../../context/actions';
import { useMediaQuery } from 'react-responsive';
import { Link, useHistory } from 'react-router-dom';
import { priceFormat, weightFormat } from '../../constant/constantVariables';
import { deleteCart } from '../../../context/actions/fetchingActions';
import { getPlantId } from '../../../context/actions/modalActions';

const Cards = ({
  id,
  plant,
  name,
  img,
  weight,
  created,
  text,
  rating,
  review,
  reviewed,
  cart,
  article,
  created_at,
  duration,
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
  setSelected,
  search,
  selectAddress,
  index,
  cartId,
  total_price,
  total_products,
  user,
}) => {
  const {
    modalReviewDispatch,
    articleIdState,
    selectedAddressState,
    selectedAddressDispatch,
    userCartDispatch,
    plantIdReviewDispatch,
  } = useContext(ContextStore);

  const history = useHistory();

  const isMini = useMediaQuery({ maxWidth: 370 });

  const slug = (title) => title.toLowerCase().split(' ').join('-');

  return (
    <>
      {slider && (
        <CardProductLandingPage>
          <span>{name}</span>

          <div>
            <h5>{name}</h5>

            {/* BUTTON CONTAINER */}
            <div>
              <Link to={`/shop/${id}/${slug(name)}`}>
                <Button card text='Beli' bgColor={colors.green} />
              </Link>

              <Link to={`/ensiklopedia/${id}/${slug(name)}`}>
                <Button
                  card
                  text='Ensiklopedia'
                  bgColor={colors.lightGreenTransparent}
                />
              </Link>
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
              <Link to={`/shop/${id}/${slug(name)}`}>
                <Button card text='Beli' bgColor={colors.green} />
              </Link>

              <Link to={`/ensiklopedia/${id}/${slug(name)}`}>
                <Button
                  card
                  text='Ensiklopedia'
                  bgColor={colors.lightGreenTransparent}
                />
              </Link>
            </div>
            {/* END OF BUTTON CONTAINER */}
          </div>

          <img src={process.env.PUBLIC_URL + `/images/Plant/${img}`} alt='' />
        </CardProductSearched>
      )}

      {scroll && (
        <CardProductShop>
          <img src={process.env.PUBLIC_URL + `/images/Plant/${img}`} alt='' />

          <div>
            <h5>{name}</h5>

            <Link to={`/shop/${id}/${slug(name)}`}>
              <Button primary shop text='Beli' bgColor={colors.green} />
            </Link>

            <Link to={`/ensiklopedia/${id}/${slug(name)}`}>
              <Button
                primary
                shop
                text='Ensiklopedia'
                bgColor={colors.lightGreenTransparent}
              />
            </Link>
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

          <img
            src={
              !img
                ? process.env.PUBLIC_URL + `/images/user_image/default.png`
                : process.env.PUBLIC_URL + `/images/user_image/${img}`
            }
            alt={name}
          />

          <Rating rate={rating} />
        </CardReview>
      )}

      {cart && (
        <CardCart>
          <img
            src={process.env.PUBLIC_URL + `/images/Plant/${img}`}
            alt={name}
          />

          <div>
            <div>
              <h5>{name}</h5>
              <span>{phase}</span>
            </div>

            <h5>{priceFormat.format(price)}</h5>
          </div>

          <Quantity quantity={quantity} pk_cart_id={id} />

          <FaRegTrashAlt
            className='trash'
            onClick={() => userCartDispatch(deleteCart(id))}
          />
        </CardCart>
      )}

      {checkout && (
        <CardCheckout>
          <img
            src={process.env.PUBLIC_URL + `/images/Plant/${img}`}
            alt={img}
          />

          <div>
            <h5>{name}</h5>
            <span>{phase}</span>
            <span>
              {quantity} barang ({weightFormat(weight)})
            </span>
          </div>

          <h5>{priceFormat.format(price)}</h5>
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
            <img
              src={process.env.PUBLIC_URL + `/images/Plant/${img}`}
              alt={name}
            />

            <div>
              <h6>{name}</h6>
              <span>{phase}</span>
              <span>
                {quantity} barang x {priceFormat.format(price)}
              </span>

              {total_products > 1 && (
                <span>+{total_products - 1} produk lainnya</span>
              )}
            </div>

            <div>
              <p>Total Belanja</p>
              <h6>{priceFormat.format(total_price)}</h6>
            </div>
          </div>

          {/* Button Container */}
          <div>
            {status === 'selesai' ? (
              <div>
                <Link to={`/invoice/${user}/${id}`}>
                  <Button
                    primary
                    address
                    text='Lihat Detail Transaksi'
                    bgColor='unset'
                  />
                </Link>

                <Link to={`/invoice/${user}/${id}`}>
                  <Button
                    primary
                    address
                    text='Beri Ulasan'
                    bgColor={colors.yellow}
                  />
                </Link>
              </div>
            ) : (
              <Link to={`/invoice/${user}/${id}`}>
                <Button
                  primary
                  address
                  text='Lihat Detail Transaksi'
                  bgColor={colors.yellow}
                />
              </Link>
            )}
          </div>
        </CardTransaction>
      )}

      {invoice && (
        <CardInvoice>
          <div>
            <img
              src={process.env.PUBLIC_URL + `/images/Plant/${img}`}
              alt={name}
            />

            <div>
              <h6 onClick={() => history.push(`/shop/${plant}/${slug(name)}`)}>
                {name}
              </h6>
              <span>{phase}</span>
              <span>
                {quantity} barang ({weightFormat(weight)}) x{' '}
                {priceFormat.format(price)}
              </span>
            </div>
          </div>

          {status === 'selesai' && (
            <>
              {reviewed ? (
                <Rating reviewed rate={reviewed} />
              ) : (
                <div>
                  <Button
                    primary
                    shop
                    address
                    text='Beri Ulasan'
                    bgColor={colors.lightGreenTransparent}
                    onClick={() => {
                      // console.log('CARTTTT IDDD', cartId);
                      plantIdReviewDispatch(
                        getPlantId({ plant, phase, cartId })
                      );
                      modalReviewDispatch(openModalReview());
                    }}
                  />
                </div>
              )}
            </>
          )}
        </CardInvoice>
      )}

      {article && (
        <CardArticle
          onClick={() => history.push(`/article/${id}/${slug(title)}`)}
          active={articleIdState.pk_article_id}
          id={id}
        >
          <img
            src={process.env.PUBLIC_URL + `/images/article_image/${img}`}
            alt={title}
          />

          <div>
            <h6>{title}</h6>
            <span>
              Oleh <strong>{author}</strong>
            </span>

            {isMini ? (
              <p>{created_at}</p>
            ) : (
              <p>
                {created_at} <FaCircle size={5} className='circle' /> {duration}{' '}
                baca
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

          {index === selectedAddressState ? (
            <FaCheck size={20} color={colors.white} className='checked' />
          ) : (
            <Button
              onClick={() => selectedAddressDispatch(setSelectedAddress(index))}
              primary
              text='Pilih'
              bgColor={colors.darkGreen}
            />
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

          {index === selectedAddressState ? (
            <FaCheck size={20} color={colors.darGreen} className='checked' />
          ) : (
            <Button
              onClick={() => selectedAddressDispatch(setSelectedAddress(index))}
              primary
              text='Pilih'
              bgColor={colors.darkGreen}
            />
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
      width: 100%;
      max-width: 140px;

      @media (max-width: 1200px) {
        max-width: 100%;
      }

      @media (max-width: 576px) {
        max-width: 170px;
      }
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
    object-fit: cover;
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

  & > .trash {
    cursor: pointer;
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
        cursor: pointer;
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
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  background-color: ${({ id, active }) =>
    active === id ? colors.lightGreen : colors.lightGreenTransparent};

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

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
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-right: 10px;
  }

  & > div {
    padding: 10px 10px 10px 0;

    & > h6 {
      color: ${colors.white};
    }

    & > span,
    p {
      font-size: 14px;
      color: ${({ id, active }) =>
        active === id ? '#22222280' : colors.lightGreen};
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
