import React, { useContext, useState } from 'react';
import {
  Popup,
  PopupInner,
  LineData,
  InsertData,
  ButtonContainer,
} from './Popout.component';
// import Button from "../../../master/components/additional/Button";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {
  closeModalTambahAlamat,
  openModalPilihAlamat,
} from '../../../../context/actions/modalActions';
import { createAddress } from '../../../../context/actions/fetchingActions';
import Button from '../../../../master/components/additional/Button';
import { colors } from '../../../../master/constant/style';
import { ContextStore } from '../../../../context/store/ContextStore';

const PopoutComponent = ({ cart, modal }) => {
  const {
    modalTambahAlamatDispatch,
    modalPilihAlamatDispatch,
    userAddressDispatch,
    userLoginState,
  } = useContext(ContextStore);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [address, setAddress] = useState('');

  const history = useHistory();

  const cityFormat = (city) => {
    if (city.toLocaleLowerCase() === 'jakarta') return 1;
    if (city.toLocaleLowerCase() === 'bogor') return 2;
    if (city.toLocaleLowerCase() === 'depok') return 3;
    if (city.toLocaleLowerCase() === 'tangerang') return 4;
    if (city.toLocaleLowerCase() === 'bekasi') return 5;
  };

  const fk_city_id = cityFormat(city);
  const fk_user_id = userLoginState.pk_user_id;

  // const HandleSubmit = () => {
  //   console.log(input);
  //   alert('Alamat berhasil dimasukkan');
  // };

  const handleCreateAddress = () => {
    userAddressDispatch(
      createAddress({
        name,
        phone,
        fk_city_id,
        postalCode,
        address,
        fk_user_id,
      })
    );

    setTimeout(() => {
      if (cart) {
        modalTambahAlamatDispatch(closeModalTambahAlamat());
        history.push('/checkout');
      }
    }, 1000);
  };

  return (
    <Popup modal={modal}>
      <PopupInner>
        <h4>Tambah Alamat Baru</h4>

        <LineData>
          <InsertData>
            <label>Nama Penerima</label>

            <TextField
              className='form'
              id='name'
              label='Tulis nama penerima'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InsertData>

          <InsertData>
            <label>No. Ponsel</label>

            <TextField
              className='form'
              id='number'
              label='Tulis nomor ponsel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </InsertData>
        </LineData>

        <LineData>
          <InsertData>
            <label>Kota atau Kecamatan</label>

            <TextField
              className='form'
              id='city'
              label='Tulis kota/kecamatan'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </InsertData>

          <InsertData>
            <label>Kode Pos</label>

            <TextField
              className='form'
              id='postalcode'
              label='5 digit kode pos'
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </InsertData>
        </LineData>

        <LineData>
          <InsertData>
            <label>Alamat</label>

            <TextField
              className='form'
              id='address'
              label='Tulis Detail Alamat'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </InsertData>
        </LineData>

        <ButtonContainer>
          <Button
            primary
            text='Batal'
            bgColor='#2222224d'
            onClick={() => {
              modalTambahAlamatDispatch(closeModalTambahAlamat());
              modalPilihAlamatDispatch(openModalPilihAlamat());
            }}
          />

          <Button
            onClick={handleCreateAddress}
            primary
            text='Tambah'
            bgColor={colors.green}
          />
        </ButtonContainer>
      </PopupInner>
    </Popup>
  );
};

export default PopoutComponent;
