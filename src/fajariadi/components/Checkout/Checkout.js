import React, { useContext, useEffect, useState } from 'react';
import { FaChevronDown, FaExclamationTriangle } from 'react-icons/fa';
import { openModalPilihAlamat } from '../../../context/actions/modalActions';
import { ContextStore } from '../../../context/store/ContextStore';
import PopoutComponent from '../../../dhika/ModalAlamat/PopupComponent/Popout';
import PopoutPengiriman from '../../../dhika/Pengiriman/PoputPengiriman/PopoutPengiriman';
import Button from '../../../master/components/additional/Button';
import ScrollSign from '../../../master/components/additional/ScrollSign';
import ShoppingSummary from '../../../master/components/additional/ShoppingSummary';
import { cartItems } from '../../../master/constant/data/dummy-data';
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
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    if (cartItems.length < 3) setScroll(false);
    if (cartItems.length > 2) setScroll(true);
  }, [cartItems]);

  const {
    modalPilihAlamatState,
    modalPilihAlamatDispatch,
    modalTambahAlamatState,
  } = useContext(ContextStore);

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: colors.green,
        paddingTop: 130,
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
                  onClick={() =>
                    modalPilihAlamatDispatch(openModalPilihAlamat())
                  }
                />
              </div>
            </ShippingAddress>

            <div>
              <ListItem>
                <ProductsContainer checkout />

                {scroll && <ScrollSign />}
              </ListItem>

              <Payment>
                <h6>Pilih Pembayaran</h6>

                <button>
                  Bank Transfer <FaChevronDown className='dropdown' />
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

                <ul>
                  <li>Transfer Bank BCA</li>
                  <li>Transfer Bank BNI</li>
                  <li>Transfer Bank MANDIRI</li>
                </ul>
              </Payment>
            </div>
          </div>

          <ShoppingSummary checkout />
        </div>
      </Container>

      <PopoutPengiriman modal={modalPilihAlamatState} />
      <PopoutComponent modal={modalTambahAlamatState} />
    </main>
  );
};

export default Checkout;
