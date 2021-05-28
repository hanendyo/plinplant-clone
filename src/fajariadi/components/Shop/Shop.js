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
import { plant, reviews } from '../../../master/constant/data/dummy-data';
import Quantity from '../../../master/components/additional/Quantity';
import ScrollSign from '../../../master/components/additional/ScrollSign';
import { useMediaQuery } from 'react-responsive';
import { ContextStore } from '../../../context/store/ContextStore';
import { Link } from 'react-router-dom';

const Shop = () => {
  const { plantIdState, plantIdDispatch } = useContext(ContextStore);
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
  } = plantIdState;

  // ::: SCROLL SIGN :::
  const [scroll, setScroll] = useState(true);

  // ::: HIGHLIGHT PRODUCT :::
  const [highlight, setHighlight] = useState('seed');

  // ::: QUANTITIY EACH PHASE :::
  const [seedQuantity, setSeedQuantity] = useState(1);
  const [tuberQuantity, setTuberQuantity] = useState(1);
  const [youngQuantity, setYoungQuantity] = useState(1);
  const [matureQuantity, setMatureQuantity] = useState(1);

  useEffect(() => {
    if (reviews.length < 4) setScroll(false);
    if (reviews.length > 3) setScroll(true);
  }, [reviews]);

  const isIpad = useMediaQuery({ maxWidth: 900 });
  const isPhone = useMediaQuery({ maxWidth: 760 });

  const priceFormat = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

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
              <Link to={`/ensiklopedia/${pk_plant_id}/${plant_name}`}>
                <ButtonInfo>Ensiklopedia</ButtonInfo>
              </Link>

              <FaInfoCircle size={20} className='info-icon' />
            </Info>

            <ProductHighlight>
              <div>
                <>
                  {highlight === 'seed' && (
                    <img
                      src={
                        process.env.PUBLIC_URL + `/images/Plant/${seed_image}`
                      }
                      alt={plant_name}
                    />
                  )}

                  {highlight === 'tuber' && (
                    <img
                      src={
                        process.env.PUBLIC_URL + `/images/Plant/${tuber_image}`
                      }
                      alt={plant_name}
                    />
                  )}

                  {highlight === 'young' && (
                    <img
                      src={
                        process.env.PUBLIC_URL + `/images/Plant/${young_image}`
                      }
                      alt={plant_name}
                    />
                  )}

                  {highlight === 'mature' && (
                    <img
                      src={
                        process.env.PUBLIC_URL + `/images/Plant/${mature_image}`
                      }
                      alt={plant_name}
                    />
                  )}
                </>

                <Quantity shop quantity={1} />
              </div>

              <div>
                <h4>{plant_name}</h4>

                <div>
                  <span>
                    <FaStar className='star' /> 4.8
                  </span>

                  {highlight === 'seed' && <span>Stok {seed_stock}</span>}
                  {highlight === 'tuber' && <span>Stok {tuber_stock}</span>}
                  {highlight === 'young' && <span>Stok {teen_stock}</span>}
                  {highlight === 'mature' && <span>Stok {mature_stock}</span>}
                </div>

                {highlight === 'seed' && (
                  <h5>{priceFormat.format(seed_price)}</h5>
                )}
                {highlight === 'tuber' && (
                  <h5>{priceFormat.format(tuber_price)}</h5>
                )}
                {highlight === 'young' && (
                  <h5>{priceFormat.format(teen_price)}</h5>
                )}
                {highlight === 'mature' && (
                  <h5>{priceFormat.format(mature_price)}</h5>
                )}

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam.
                </p>

                <ButtonCart>
                  <FaCartPlus className='cart' /> Tambah ke Keranjang
                </ButtonCart>
              </div>
            </ProductHighlight>
          </div>

          <div>
            <div onClick={() => setHighlight('seed')}>
              <Image
                src={process.env.PUBLIC_URL + `/images/Plant/${seed_image}`}
                alt={plant_name}
                active={'seed'}
                highlight={highlight}
              />
              <h6>Biji</h6>
            </div>

            <div onClick={() => setHighlight('tuber')}>
              <Image
                src={process.env.PUBLIC_URL + `/images/Plant/${tuber_image}`}
                alt={plant_name}
                active={'tuber'}
                highlight={highlight}
              />
              <h6>Bonggol</h6>
            </div>

            <div onClick={() => setHighlight('young')}>
              <Image
                src={process.env.PUBLIC_URL + `/images/Plant/${young_image}`}
                alt={plant_name}
                active={'young'}
                highlight={highlight}
              />
              <h6>Muda</h6>
            </div>

            <div onClick={() => setHighlight('mature')}>
              <Image
                src={process.env.PUBLIC_URL + `/images/Plant/${mature_image}`}
                alt={plant_name}
                active={'mature'}
                highlight={highlight}
              />
              <h6>Dewasa</h6>
            </div>
          </div>
        </Product>

        <ReviewContainer>
          <h5>Ulasan</h5>
          <ProductsContainer review />

          {scroll && <ScrollSign center />}
        </ReviewContainer>
      </Container>
    </main>
  );
};

export default Shop;
