import React, { useContext, useEffect, useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { openModalUpload } from '../../../context/actions';
import { cmsAction } from '../../../context/actions/CmsAction';
import { updateStatusTransaction } from '../../../context/actions/fetchingActions';
import { ContextStore } from '../../../context/store/ContextStore';
import Button from '../../../master/components/additional/Button';
import ScrollSign from '../../../master/components/additional/ScrollSign';
import StatusOrder from '../../../master/components/additional/StatusOrder';
import UploadBox from '../../../master/components/additional/UploadBox';
import {
  priceFormat,
  weightFormat,
} from '../../../master/constant/constantVariables';
import { colors } from '../../../master/constant/style';
import { ReviewModal } from '../../modals';
import ProductsContainer from '../Main/components/Product/ProductsContainer';
import {
  Container,
  HeaderInfo,
  Payment,
  Shipping,
  ShoppingDetail,
  InvoiceSection,
} from './Invoice.elemen';

const Invoice = () => {
  const {
    modalUploadState,
    modalUploadDispatch,
    modalReviewState,
    invoiceState,
    invoiceDispatch,
    plantIdReviewState,
  } = useContext(ContextStore);

  // console.log('STATE INVOICEEE', invoiceState);
  // console.log('PLANT IDD REVIEWWWW', plantIdReviewState);

  const {
    pk_invoice_id,
    no_order,
    created_at,
    status,
    recipient_name,
    address,
    city_name,
    zipcode,
    phone_number,
    bank_name,
    no_rek,
    owner,
    shipping_price,
    payment_image,
  } = invoiceState[0];

  const [scroll, setScroll] = useState(true);
  const transactionStatus = 'selesai';

  const [payment, setPayment] = useState(payment_image);

  useEffect(() => {
    if (invoiceState.length < 5) setScroll(false);
    if (invoiceState.length > 4) setScroll(true);
  }, [invoiceState]);

  const totalPrice = invoiceState
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);

  const totalItems = invoiceState
    .map((item) => item.quantity)
    .reduce((a, b) => a + b, 0);

  // ::: DALAM GRAM :::
  const totalWeight = invoiceState
    .map((item) => item.weight * item.quantity)
    .reduce((a, b) => a + b, 0);

  const totalShippingPrice = Math.ceil(totalWeight / 1000) * shipping_price;

  const handleUpdateStatus = (data) => {
    invoiceDispatch(updateStatusTransaction(data));

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  // console.log('PAYMENTR IMEHHHH', payment);

  return (
    <InvoiceSection>
      <Container>
        <h2>Invoice</h2>

        <HeaderInfo>
          <div>
            <p>No. Order</p>
            <h6>PP-{no_order}</h6>
          </div>

          <div>
            <p>Tanggal Pembelian</p>
            <h6>{created_at}</h6>
          </div>

          <div>
            <p>Status Transaksi</p>
            {status === 'bayar' && <StatusOrder status='bayar' />}
            {status === 'verif' && <StatusOrder status='verif' />}
            {status === 'proses' && <StatusOrder status='proses' />}
            {status === 'selesai' && <StatusOrder status='selesai' />}
            {status === 'gagal' && <StatusOrder status='gagal' />}
            {status === 'diantar' && <StatusOrder status='diantar' />}
          </div>
        </HeaderInfo>

        <ShoppingDetail status={status}>
          <div>
            <h5>Daftar Produk</h5>

            <ProductsContainer invoice status={status} />

            {scroll && <ScrollSign />}
          </div>

          <div>
            <Shipping>
              <h5>Pengiriman</h5>

              <p>
                Dikirim kepada <strong>{recipient_name}</strong>
              </p>
              <p>{address}</p>
              <p>
                {city_name}, {zipcode}
              </p>
              <p>Telp. {phone_number}</p>
            </Shipping>

            <Payment>
              <h5>Pembayaran</h5>

              <div>
                <p>Total Harga ({totalItems} barang)</p>
                <h6>{priceFormat.format(totalPrice)}</h6>
              </div>

              <div>
                <p>
                  Total Ongkos Kirim (JKT - BGR, {weightFormat(totalWeight)} )
                </p>
                <h6>{priceFormat.format(totalShippingPrice)}</h6>
              </div>

              <div>
                <p>Total Tagihan</p>
                <h6>{priceFormat.format(totalShippingPrice + totalPrice)}</h6>
              </div>

              <div>
                <p>
                  Metode Pembayaran <br />
                  {/* <span>
                    * Dimohon untuk transfer sesuai{' '}
                    <strong>Total Tagihan</strong> agar proses verifikasi lebih
                    cepat.
                  </span> */}
                </p>

                <h6>
                  Transfer Bank {bank_name} <br />
                  {no_rek} <br />
                  A/n {owner}
                  <FaExclamationTriangle className='warning' />
                </h6>
              </div>
            </Payment>
          </div>

          {status === 'diantar' ? (
            <div>
              <Button
                primary
                address
                shop
                text='Pesanan Diterima'
                bgColor={colors.yellow}
                onClick={() =>
                  handleUpdateStatus({
                    transactionStatus,
                    pk_invoice_id,
                    payment,
                  })
                }
              />
            </div>
          ) : (
            <div>
              <Button
                primary
                address
                shop
                text='Upload Bukti Transfer'
                bgColor={colors.yellow}
                onClick={() => modalUploadDispatch(openModalUpload())}
              />
            </div>
          )}
        </ShoppingDetail>
      </Container>

      <UploadBox
        pk_invoice_id={pk_invoice_id}
        invoice
        modal={modalUploadState}
        payment={payment}
        setPayment={setPayment}
      />

      <ReviewModal
        fk_invoice_id={pk_invoice_id}
        plantId={plantIdReviewState.id}
        phase={plantIdReviewState.phase}
        modal={modalReviewState}
      />
    </InvoiceSection>
  );
};

export default Invoice;
