import React, { useContext, useEffect, useState } from 'react';
import { FaChevronDown, FaExclamationTriangle } from 'react-icons/fa';
import { getSelectedAddress } from '../../../context/actions';
import { openModalPilihAlamat } from '../../../context/actions/modalActions';
import { ContextStore } from '../../../context/store/ContextStore';
import PopoutComponent from '../../../dhika/Modal/ModalAlamat/PopupComponent/Popout';
import PopoutPengiriman from '../../../dhika/Pengiriman/PoputPengiriman/PopoutPengiriman';
import AlertSign from '../../../master/components/additional/AlertSign';
import Button from '../../../master/components/additional/Button';
import ScrollSign from '../../../master/components/additional/ScrollSign';
import ShoppingSummary from '../../../master/components/additional/ShoppingSummary';
import { priceFormat } from '../../../master/constant/constantVariables';
import { colors } from '../../../master/constant/style';
import ProductsContainer from '../Main/components/Product/ProductsContainer';
import {
  Address,
  Container,
  ListItem,
  Payment,
  ShippingAddress,
  CheckoutSection,
} from './Checkout.elemen';

const Checkout = () => {
  const { userCartState, userAddressState, selectedAddressState, bankState } =
    useContext(ContextStore);

  const [scroll, setScroll] = useState(true);
  const [payment, setPayment] = useState(false);
  const [bankId, setBankId] = useState(0);
  const [placeholder, setPlaceholder] = useState('Bank Transfer');

  // ::: ALERT SIGN :::
  const [notif, setNotif] = useState(false);

  const {
    pk_contact_id,
    recipient_name,
    phone_number,
    address,
    zipcode,
    city_name,
    city_code,
    shipping_price,
  } = userAddressState[selectedAddressState];

  useEffect(() => {
    if (userCartState.length < 3) setScroll(false);
    if (userCartState.length > 2) setScroll(true);
  }, [userCartState]);

  const {
    modalPilihAlamatState,
    modalPilihAlamatDispatch,
    modalTambahAlamatState,
  } = useContext(ContextStore);

  const handleBank = (id, name) => {
    setBankId(id);
    setPlaceholder(`Transfer ${name}`);

    setPayment(!payment);
  };

  return (
    <CheckoutSection>
      <Container>
        <h2>Checkout</h2>

        <div>
          <div>
            <ShippingAddress>
              <h5>Alamat Pengiriman</h5>

              <div>
                <Address>
                  <div>
                    <h6>{recipient_name}</h6>
                    <span>{phone_number}</span>
                  </div>

                  {/* Detail Alamat */}
                  <p>{address}</p>
                  {/* Kota - Kecamatan - Kode pos */}
                  <p>
                    {city_name}, {zipcode}
                  </p>
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

              <Payment payment={payment}>
                <h6>Pilih Pembayaran</h6>

                <button onClick={() => setPayment(!payment)}>
                  {placeholder} <FaChevronDown className='dropdown' />
                </button>

                <p>
                  Pembayaran diatas pukul 14:00 berpotensi dikirim hari
                  berikutnya. <FaExclamationTriangle className='warning' />
                </p>
                <p>
                  Berat barang ({'< 1 Kg'}) dikenakan biaya ongkos kirim sebesar{' '}
                  {priceFormat.format(shipping_price)}. Berlaku kelipatan.{' '}
                  <FaExclamationTriangle className='warning' />
                </p>

                <ul>
                  {bankState.map(({ pk_bank_id, bank_name }) => (
                    <li
                      key={pk_bank_id}
                      pk_bank_id={pk_bank_id}
                      onClick={() => handleBank(pk_bank_id, bank_name)}
                    >
                      Transfer Bank {bank_name}
                    </li>
                  ))}
                </ul>
              </Payment>
            </div>
          </div>

          <ShoppingSummary
            checkout
            city_code={city_code}
            shipping_price={shipping_price}
            fk_contact_id={pk_contact_id}
            fk_bank_id={bankId}
            setNotif={setNotif}
          />
        </div>

        <AlertSign
          text='Tunggu sebentar ya. Sistem sedang memproses belanjaan kamu.'
          notif={notif}
        />
      </Container>

      <PopoutPengiriman modal={modalPilihAlamatState} />
      <PopoutComponent checkout modal={modalTambahAlamatState} />
    </CheckoutSection>
  );
};

export default Checkout;
