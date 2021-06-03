import React, { useContext, useEffect, useState } from 'react';
import { Popup, PopupInner } from './PopoutPengiriman.component';
import { FaTimes } from 'react-icons/fa';
import Button from '../../../master/components/additional/Button';
import {
  closeModalPilihAlamat,
  openModalTambahAlamat,
} from '../../../context/actions/modalActions';
import { ContextStore } from '../../../context/store/ContextStore';
import ProductsContainer from '../../../fajariadi/components/Main/components/Product/ProductsContainer';
import ScrollSign from '../../../master/components/additional/ScrollSign';

const PopoutPengiriman = ({ modal }) => {
  const {
    modalPilihAlamatDispatch,
    modalTambahAlamatDispatch,
    userAddressState,
  } = useContext(ContextStore);

  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    if (userAddressState.length < 2) setScroll(false);
    if (userAddressState.length > 1) setScroll(true);
  }, [userAddressState]);

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
