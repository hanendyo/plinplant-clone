import React, { useContext, useEffect, useState } from 'react';
import { FaCartPlus, FaInfoCircle, FaStar } from 'react-icons/fa';
import { colors } from '../../../master/constant/style';
import ProductsContainer from '../Main/components/Product/ProductsContainer';
import {
  ButtonCart,
  ButtonInfo,
  Container,
  Image,
  Product,
  ProductHighlight,
  RelatedProduct,
  ReviewContainer,
  Info,
} from './Shop.elemen';
import Quantity from '../../../master/components/additional/Quantity';
import ScrollSign from '../../../master/components/additional/ScrollSign';
import { useMediaQuery } from 'react-responsive';
import { ContextStore } from '../../../context/store/ContextStore';
import { Link, useHistory } from 'react-router-dom';
import { priceFormat } from '../../../master/constant/constantVariables';
import { addCart } from '../../../context/actions/fetchingActions';
import AlertSign from '../../../master/components/additional/AlertSign';

const Shop = () => {
  const { plantIdState, plantReviewState, userCartDispatch, userLoginState } =
    useContext(ContextStore);
  const {
    pk_plant_id,
    plant_name,
    seed_image,
    tuber_image,
    young_image,
    mature_image,
    seed_price,
    tuber_price,
    teen_price,
    mature_price,
    seed_stock,
    tuber_stock,
    teen_stock,
    mature_stock,
    seed_weight,
    tuber_weight,
    young_weight,
    mature_weight,
  } = plantIdState;

  const history = useHistory();

  const rate = plantReviewState
    .map((review) => review.rating)
    .reduce((a, b) => a + b, 0);

  const ratingAvg = rate === 0 ? 0 : rate / plantReviewState.length;

  // ::: SCROLL SIGN :::
  const [scroll, setScroll] = useState(true);

  // ::: ALERT SIGN :::
  const [notif, setNotif] = useState(false);

  // ::: HIGHLIGHT PRODUCT :::
  const [highlight, setHighlight] = useState('Biji');

  // ::: QUANTITIY EACH PHASE :::
  const [seedQuantity, setSeedQuantity] = useState(1);
  const [tuberQuantity, setTuberQuantity] = useState(1);
  const [youngQuantity, setYoungQuantity] = useState(1);
  const [matureQuantity, setMatureQuantity] = useState(1);

  useEffect(() => {
    if (plantReviewState.length < 6) setScroll(false);
    if (plantReviewState.length > 5) setScroll(true);
  }, [plantReviewState, userCartDispatch]);

  const isIpad = useMediaQuery({ maxWidth: 900 });
  const isPhone = useMediaQuery({ maxWidth: 760 });

  const slug = (title) => title.toLowerCase().split(' ').join('-');

  const addToCartHandler = () => {
    const { pk_user_id } = userLoginState;

    if (highlight === 'Biji') {
      userCartDispatch(
        addCart(
          {
            seed_image,
            plant_name,
            highlight,
            seed_price,
            seedQuantity,
            seed_weight,
            pk_plant_id,
            pk_user_id,
          },
          highlight,
          setNotif
        )
      );
    }

    if (highlight === 'Bonggol') {
      userCartDispatch(
        addCart(
          {
            tuber_image,
            plant_name,
            highlight,
            tuber_price,
            tuberQuantity,
            tuber_weight,
            pk_plant_id,
            pk_user_id,
          },
          highlight,
          setNotif
        )
      );
    }

    if (highlight === 'Muda') {
      userCartDispatch(
        addCart(
          {
            young_image,
            plant_name,
            highlight,
            teen_price,
            youngQuantity,
            young_weight,
            pk_plant_id,
            pk_user_id,
          },
          highlight,
          setNotif
        )
      );
    }

    if (highlight === 'Dewasa') {
      userCartDispatch(
        addCart(
          {
            mature_image,
            plant_name,
            highlight,
            mature_price,
            matureQuantity,
            mature_weight,
            pk_plant_id,
            pk_user_id,
          },
          highlight,
          setNotif
        )
      );
    }

    setSeedQuantity(1);
    setTuberQuantity(1);
    setYoungQuantity(1);
    setMatureQuantity(1);
  };

  console.log('NOTIFFF', notif);

  return (
    <main
      style={{
        backgroundColor: colors.green,
        minHeight: '100vh',
        paddingTop: 130,
      }}
    >
      <Container>
        <RelatedProduct isIpad={isIpad}>
          {isIpad ? (
            <ProductsContainer related category={plantIdState.category_name} />
          ) : (
            <>
              <h5>Tanaman Terkait</h5>
              <ProductsContainer scroll category={plantIdState.category_name} />
            </>
          )}

          <ScrollSign center />
        </RelatedProduct>

        <Product>
          <div>
            <Info>
              <Link to={`/ensiklopedia/${pk_plant_id}/${slug(plant_name)}`}>
                <ButtonInfo>Ensiklopedia</ButtonInfo>
              </Link>

              <FaInfoCircle size={20} className='info-icon' />
            </Info>

            <ProductHighlight>
              <div>
                <>
                  {highlight === 'Biji' && (
                    <>
                      <img
                        src={
                          process.env.PUBLIC_URL + `/images/Plant/${seed_image}`
                        }
                        alt={plant_name}
                      />

                      <Quantity
                        shop
                        quantity={seedQuantity}
                        setQuantity={setSeedQuantity}
                      />
                    </>
                  )}

                  {highlight === 'Bonggol' && (
                    <>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/images/Plant/${tuber_image}`
                        }
                        alt={plant_name}
                      />

                      <Quantity
                        shop
                        quantity={tuberQuantity}
                        setQuantity={setTuberQuantity}
                      />
                    </>
                  )}

                  {highlight === 'Muda' && (
                    <>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/images/Plant/${young_image}`
                        }
                        alt={plant_name}
                      />

                      <Quantity
                        shop
                        quantity={youngQuantity}
                        setQuantity={setYoungQuantity}
                      />
                    </>
                  )}

                  {highlight === 'Dewasa' && (
                    <>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/images/Plant/${mature_image}`
                        }
                        alt={plant_name}
                      />

                      <Quantity
                        shop
                        quantity={matureQuantity}
                        setQuantity={setMatureQuantity}
                      />
                    </>
                  )}
                </>
              </div>

              <div>
                <h4>{plant_name}</h4>

                <div>
                  <span>
                    <FaStar className='star' />{' '}
                    {ratingAvg === 0 ? 0 : ratingAvg.toFixed(1)}
                  </span>

                  {highlight === 'Biji' && <span>Stok {seed_stock}</span>}
                  {highlight === 'Bonggol' && <span>Stok {tuber_stock}</span>}
                  {highlight === 'Muda' && <span>Stok {teen_stock}</span>}
                  {highlight === 'Dewasa' && <span>Stok {mature_stock}</span>}
                </div>

                {highlight === 'Biji' && (
                  <h5>{priceFormat.format(seed_price)}</h5>
                )}
                {highlight === 'Bonggol' && (
                  <h5>{priceFormat.format(tuber_price)}</h5>
                )}
                {highlight === 'Muda' && (
                  <h5>{priceFormat.format(teen_price)}</h5>
                )}
                {highlight === 'Dewasa' && (
                  <h5>{priceFormat.format(mature_price)}</h5>
                )}

                <p>
                  Kamu sedang melihat fase {highlight} dari tanaman {plant_name}
                </p>

                {userLoginState ? (
                  <ButtonCart onClick={addToCartHandler}>
                    <FaCartPlus className='cart' /> Tambah ke Keranjang
                  </ButtonCart>
                ) : (
                  <ButtonCart onClick={() => history.push('/login')}>
                    <FaCartPlus className='cart' /> Tambah ke Keranjang
                  </ButtonCart>
                )}
              </div>
            </ProductHighlight>
          </div>

          <div>
            <div onClick={() => setHighlight('Biji')}>
              <Image
                src={process.env.PUBLIC_URL + `/images/Plant/${seed_image}`}
                alt={plant_name}
                active={'Biji'}
                highlight={highlight}
              />
              <h6>Biji</h6>
            </div>

            <div onClick={() => setHighlight('Bonggol')}>
              <Image
                src={process.env.PUBLIC_URL + `/images/Plant/${tuber_image}`}
                alt={plant_name}
                active={'Bonggol'}
                highlight={highlight}
              />
              <h6>Bonggol</h6>
            </div>

            <div onClick={() => setHighlight('Muda')}>
              <Image
                src={process.env.PUBLIC_URL + `/images/Plant/${young_image}`}
                alt={plant_name}
                active={'Muda'}
                highlight={highlight}
              />
              <h6>Muda</h6>
            </div>

            <div onClick={() => setHighlight('Dewasa')}>
              <Image
                src={process.env.PUBLIC_URL + `/images/Plant/${mature_image}`}
                alt={plant_name}
                active={'Dewasa'}
                highlight={highlight}
              />
              <h6>Dewasa</h6>
            </div>
          </div>
        </Product>

        <ReviewContainer>
          <h5>Ulasan</h5>
          {plantReviewState.length === 0 ? (
            <p>
              Ayo, jadi orang pertama yang memberikan ulasan untuk tanaman
              favoritmu!
            </p>
          ) : (
            <ProductsContainer review />
          )}

          {scroll && <ScrollSign center />}
        </ReviewContainer>

        <AlertSign
          text='Berhasil menambahkan tanaman kedalam keranjang.'
          notif={notif}
        />
      </Container>
    </main>
  );
};

export default Shop;
