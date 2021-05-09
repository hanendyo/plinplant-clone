import React from 'react';
import { FaChevronDown, FaExclamationTriangle } from 'react-icons/fa';
import Button from '../../../master/components/additional/Button';
import ShoppingSummary from '../../../master/components/additional/ShoppingSummary';
import { colors } from '../../../master/constant/style';
import ProductsContainer from '../Main/components/Product/ProductsContainer';
import {
  Address,
  Container,
  ListItem,
  Payment,
  ShippingAddress,
} from './Checkout.elemen';

const Checkout = () => {
  return (
    <main
      style={{
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: colors.green,
        paddingTop: 30,
      }}
    >
      <Container>
        <h2>Checkout</h2>

        <div>
          <div>
            <ShippingAddress>
              <h5>Alamat Pengiriman</h5>

              <div>
                <Address>
                  <div>
                    <h6>Fajar</h6>
                    <span>085156493801</span>
                  </div>

                  {/* Detail Alamat */}
                  <p>Jl. Salembaran - Depan Bakso Zahra</p>
                  {/* Kota - Kecamatan - Kode pos */}
                  <p>Kecamatan Cibereum, Bogor, 15213</p>
                </Address>

                <Button
                  primary
                  address
                  text='Pilih Alamat Lain'
                  bgColor={colors.lightGreenTransparent}
                />
              </div>
            </ShippingAddress>

            <div>
              <ListItem>
                <ProductsContainer checkout />
              </ListItem>

              <Payment>
                <h6>Pilih Pembayaran</h6>

                <button>
                  Bank Tujuan <FaChevronDown className='dropdown' />
                </button>

                <p>
                  Pembayaran diatas pukul 14:00 berpotensi dikirim hari
                  berikutnya. <FaExclamationTriangle className='warning' />
                </p>
                <p>
                  Berat barang ({'< 1 Kg'}) dikenakan biaya ongkos kirim sebesar
                  Rp 10.000. Berlaku kelipatan.{' '}
                  <FaExclamationTriangle className='warning' />
                </p>
              </Payment>
            </div>
          </div>

          <ShoppingSummary checkout />
        </div>
      </Container>
    </main>
  );
};

export default Checkout;
