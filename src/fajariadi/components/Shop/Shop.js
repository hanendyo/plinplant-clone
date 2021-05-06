import React from 'react';
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
} from './Shop.elemen';
import { plant } from '../../../master/constant/data/dummy-data';

const Shop = () => {
  return (
    <main
      style={{
        backgroundColor: colors.green,
        minHeight: 'calc(100vh - 100px)',
      }}
    >
      <Container>
        <RelatedProduct>
          <h5>Tanaman Terkait</h5>

          <ProductsContainer scroll category='hias' />
        </RelatedProduct>

        <Product>
          <div>
            <ButtonInfo>
              Ensiklopedia <FaInfoCircle className='info' />
            </ButtonInfo>

            <ProductHighlight>
              <div>
                <img src={plant.seed} alt='' />

                <div>
                  <span>-</span>
                  <span>0</span>
                  <span>+</span>
                </div>
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
        </ReviewContainer>

        {/* <div></div> */}
      </Container>
    </main>
  );
};

export default Shop;
