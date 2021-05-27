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
  const [scroll, setScroll] = useState(true);

  const { plantIdState, plantIdDispatch } = useContext(ContextStore);

  useEffect(() => {
    if (reviews.length < 4) setScroll(false);
    if (reviews.length > 3) setScroll(true);
  }, [reviews]);

  const isIpad = useMediaQuery({ maxWidth: 900 });
  const isPhone = useMediaQuery({ maxWidth: 760 });

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
              <Link
                to={`/ensiklopedia/${plantIdState.pk_plant_id}/${plantIdState.plant_name}`}
              >
                <ButtonInfo>Ensiklopedia</ButtonInfo>
              </Link>

              <FaInfoCircle size={20} className='info-icon' />
            </Info>

            <ProductHighlight>
              <div>
                <img src={plant.seed} alt='' />

                <Quantity shop quantity={1} />
              </div>

              <div>
                <h4>Lavender</h4>

                <div>
                  <span>
                    <FaStar className='star' /> 4.8
                  </span>

                  <span>Stok 123</span>
                </div>

                <h5>Rp 21.950</h5>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam.{' '}
                </p>

                <ButtonCart>
                  <FaCartPlus className='cart' /> Tambah ke Keranjang
                </ButtonCart>
              </div>
            </ProductHighlight>
          </div>

          <div>
            <div>
              <Image src={plant.seed} alt='' active={true} />
              <h6>Biji</h6>
            </div>

            <div>
              <Image src={plant.tuber} alt='' />
              <h6>Bonggol</h6>
            </div>

            <div>
              <Image src={plant.juvenil} alt='' />
              <h6>Muda</h6>
            </div>

            <div>
              <Image src={plant.mature} alt='' />
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
