import React, { useContext } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
  cartCheckout,
  createInvoice,
} from '../../../context/actions/fetchingActions';
import { openModalTambahAlamat } from '../../../context/actions/modalActions';
import { ContextStore } from '../../../context/store/ContextStore';
import {
  priceFormat,
  weightFormat,
  months,
} from '../../constant/constantVariables';
import { colors } from '../../constant/style';
import Button from './Button';

const ShoppingSummary = ({
  checkout,
  city_code,
  shipping_price,
  fk_contact_id,
  fk_bank_id,
}) => {
  const {
    modalTambahAlamatDispatch,
    userCartState,
    userCartDispatch,
    userAddressState,
    userInfoState,
    invoiceDispatch,
  } = useContext(ContextStore);

  const history = useHistory();

  const totalPrice = userCartState
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);

  const totalItems = userCartState
    .map((item) => item.quantity)
    .reduce((a, b) => a + b, 0);

  // ::: DALAM GRAM :::
  const totalWeight = userCartState
    .map((item) => item.weight * item.quantity)
    .reduce((a, b) => a + b, 0);

  const totalShippingPrice = Math.ceil(totalWeight / 1000) * shipping_price;

  const handleCheckout = () => {
    console.log('CHECKOUT!!');
    const fk_user_id = userInfoState[0]?.pk_user_id;

    const time = new Date();
    const fk_invoice_id = time.getTime();
    const date = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    const hour = time.getHours();
    const min = time.getMinutes();

    const created_at = `${date} ${months[month]} ${year}, ${
      hour < 10 ? `0${hour}` : hour
    }:${min < 10 ? `0${min}` : min} WIB`;
    const status = 'bayar';

    userCartDispatch(cartCheckout({ fk_invoice_id, fk_user_id }));

    invoiceDispatch(
      createInvoice({
        fk_invoice_id,
        fk_invoice_id,
        created_at,
        status,
        fk_user_id,
        fk_contact_id,
        fk_bank_id,
      })
    );

    console.log('HISTORY PUSH CHECKOUT!!');

    history.push(`/invoice/${fk_user_id}/${fk_invoice_id}`);
  };

  return (
    <SummarySection>
      <h4>Ringkasan Belanja</h4>

      <TotalPrice>
        <div>
          <p>Total Harga</p>
          <span>{totalItems} barang</span>
        </div>

        <p>{priceFormat.format(totalPrice)}</p>
      </TotalPrice>

      {checkout && (
        <TotalShipping>
          <div>
            <p>Total Ongkos Kirim</p>
            <span>
              JKT <FaLongArrowAltRight className='arrow' /> {city_code}
            </span>
            <span>{weightFormat(totalWeight)}</span>
          </div>

          <p>{priceFormat.format(totalShippingPrice)}</p>
        </TotalShipping>
      )}

      {checkout ? (
        <TotalBill>
          <h6>Total Tagihan</h6>
          <h6>{priceFormat.format(totalPrice + totalShippingPrice)}</h6>
        </TotalBill>
      ) : (
        <TotalBill>
          <h6>Total Tagihan</h6>
          <h6>{priceFormat.format(totalPrice)}</h6>
        </TotalBill>
      )}

      {checkout ? (
        <Button
          // disabled={true}
          onClick={handleCheckout}
          primary
          summary
          text='Proses'
          bgColor={colors.yellow}
        />
      ) : (
        <div>
          {userAddressState.length === 0 ? (
            <Button
              primary
              summary
              text='Beli'
              bgColor={colors.yellow}
              onClick={() => modalTambahAlamatDispatch(openModalTambahAlamat())}
            />
          ) : (
            <Link to='/checkout'>
              <Button primary summary text='Beli' bgColor={colors.yellow} />
            </Link>
          )}
        </div>
      )}
    </SummarySection>
  );
};

const SummarySection = styled.section`
  background-color: ${colors.darkGreen};
  width: 100%;
  max-width: 330px;
  padding: 20px 20px 30px;
  border-radius: 10px;
  margin-left: 20px;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.1);

  & > h4 {
    color: ${colors.white};
    margin-bottom: 20px;
  }

  @media (max-width: 1200px) {
    margin-left: unset;
    max-width: 100%;
    margin-top: 30px;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    & > span {
      display: inline-block;
      font-size: 12px;
      background-color: ${colors.lightGreenTransparent};
      padding: 5px 7px;
      border-radius: 10px;
    }
  }
`;

const TotalShipping = styled(TotalPrice)`
  margin-top: 20px;

  & > div {
    & > span:first-of-type {
      margin-right: 5px;

      & > .arrow {
        margin: 0 5px;
      }
    }
  }
`;

const TotalBill = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${colors.lightGreenTransparent};
  margin: 20px 0;
  padding-top: 20px;

  & > h6 {
    color: ${colors.white};
  }
`;

export default ShoppingSummary;
