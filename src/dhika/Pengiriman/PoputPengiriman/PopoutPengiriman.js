import React, { useContext, useEffect, useState } from 'react';
import ModalAlamat from '../../ModalAlamat/ModalAlamat';
import {
  Popup,
  PopupInner,
  BoxAlamat,
  BoxLeft,
  FirstLine,
  ButtonPilih,
} from './PopoutPengiriman.component';
import { FaTimes } from 'react-icons/fa';
import { colors } from '../../../master/constant/style/index';
// import Button from "@material-ui/core/Button";
import Button from '../../../master/components/additional/Button';
import {
  closeModalPilihAlamat,
  openModalTambahAlamat,
} from '../../../context/actions/modalActions';
import { ContextStore } from '../../../context/store/ContextStore';
import ProductsContainer from '../../../fajariadi/components/Main/components/Product/ProductsContainer';
import { addresses } from '../../../master/constant/data/dummy-data';
import ScrollSign from '../../../master/components/additional/ScrollSign';

const PopoutPengiriman = ({ modal }) => {
  const { modalPilihAlamatDispatch, modalTambahAlamatDispatch } =
    useContext(ContextStore);

  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    if (addresses.length < 2) setScroll(false);
    if (addresses.length > 1) setScroll(true);
  }, [addresses]);

  return (
    <Popup modal={modal}>
      <PopupInner>
        <h4>Pilih Alamat Pengiriman</h4>

        <FaTimes
          className='times'
          size={20}
          onClick={() => modalPilihAlamatDispatch(closeModalPilihAlamat())}
        />

        <Button
          primary
          summary
          text='Tambah Alamat Baru'
          bgColor='#dedede'
          onClick={() => {
            modalTambahAlamatDispatch(openModalTambahAlamat());
            modalPilihAlamatDispatch(closeModalPilihAlamat());
          }}
        />

        <ProductsContainer selectAddress />

        {scroll && <ScrollSign center />}
      </PopupInner>
    </Popup>
  );
};

export default PopoutPengiriman;
