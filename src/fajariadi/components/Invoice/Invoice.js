import React, { useContext, useEffect, useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { openModalUpload } from '../../../context/actions';
import { ContextStore } from '../../../context/store/ContextStore';
import Button from '../../../master/components/additional/Button';
import ScrollSign from '../../../master/components/additional/ScrollSign';
import StatusOrder from '../../../master/components/additional/StatusOrder';
import UploadBox from '../../../master/components/additional/UploadBox';
import { invoiceProduct } from '../../../master/constant/data/dummy-data';
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
    userCartState,
  } = useContext(ContextStore);

  const [scroll, setScroll] = useState(true);

  const [status, setStatus] = useState('proses');

  useEffect(() => {
    if (invoiceProduct.length < 5) setScroll(false);
    if (invoiceProduct.length > 4) setScroll(true);
  }, [invoiceProduct]);

  console.log('INVOICEEEE', userCartState);

  return (
    <InvoiceSection>
      <Container>
        <h2>Invoice</h2>

        <HeaderInfo>
          <div>
            <p>No. Order</p>
            <h6>PP-lkjascLKJLKFklhadsl</h6>
          </div>

          <div>
            <p>Tanggal Pembelian</p>
            <h6>7 Mei 2021, 10.43 WIB</h6>
          </div>

          <div>
            <p>Status Transaksi</p>
            {status === 'bayar' && <StatusOrder status='Menunggu Pembayaran' />}
            {status === 'verif' && (
              <StatusOrder status='Verifikasi Pembayaran' />
            )}
            {status === 'proses' && <StatusOrder status='Pesanan Diantar' />}
            {status === 'selesai' && <StatusOrder status='Transaksi Selesai' />}
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
                Dikirim kepada <strong>Fajar Riadi</strong>
              </p>
              <p>Jl. Salembaran - Depan Bakso Zahra</p>
              <p>Kecamatan Cibeureum, Bogor, 15045</p>
              <p>Telp. 085156493801</p>
            </Shipping>

            <Payment>
              <h5>Pembayaran</h5>

              <div>
                <p>Total Harga (4 barang)</p>
                <h6>Rp 100.000</h6>
              </div>

              <div>
                <p>Total Ongkos Kirim (JKT - BGR, 2 Kg)</p>
                <h6>Rp 20.000</h6>
              </div>

              <div>
                <p>Total Tagihan</p>
                <h6>Rp 120.067 *</h6>
              </div>

              <div>
                <p>
                  Metode Pembayaran <br />
                  <span>
                    * Dimohon untuk transfer sesuai{' '}
                    <strong>Total Tagihan</strong> agar proses verifikasi lebih
                    cepat.
                  </span>
                </p>

                <h6>
                  Transfer Bank BCA <br />
                  3603136827 <br />
                  A/n PlinPlant, Etc
                  <FaExclamationTriangle className='warning' />
                </h6>
              </div>
            </Payment>
          </div>

          {status === 'proses' ? (
            <div>
              <Button
                primary
                address
                shop
                text='Pesanan Diterima'
                bgColor={colors.yellow}
                onClick={() => setStatus('selesai')}
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

      <UploadBox invoice modal={modalUploadState} />
      <ReviewModal modal={modalReviewState} />
    </InvoiceSection>
  );
};

export default Invoice;
