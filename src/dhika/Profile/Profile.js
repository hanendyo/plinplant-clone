import React, { useState, useEffect, useContext } from 'react';
import {
  StyledProfile,
  ProfileContainer,
  TextBox,
  Information,
  Data,
  RightArea,
} from './Profile.component';
import UploadBox from '../../master/components/additional/UploadBox';
import ProductsContainer from '../../fajariadi/components/Main/components/Product/ProductsContainer';
import { addresses } from '../../master/constant/data/dummy-data';
import ScrollSign from '../../master/components/additional/ScrollSign';
import { ContextStore } from '../../context/store/ContextStore';
import PopoutComponent from '../ModalAlamat/PopupComponent/Popout';
import Button from '../../master/components/additional/Button';
import { colors } from '../../master/constant/style';
import { openModalTambahAlamat } from '../../context/actions/modalActions';

const Profile = () => {
  const {
    modalTambahAlamatState,
    modalTambahAlamatDispatch,
    userAddressState,
    userLoginState,
  } = useContext(ContextStore);

  const [biodata, setBiodata] = useState(true);
  const [address, setAddress] = useState(false);

  const [empty, setEmpty] = useState(true);

  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    if (userAddressState.length < 3) setScroll(false);
    if (userAddressState.length > 2) setScroll(true);
  }, [userAddressState]);

  return (
    <StyledProfile>
      {biodata && (
        <ProfileContainer>
          <div className='valueChoose'>
            <TextBox biodata={biodata}>
              <p>Biodata Diri</p>
            </TextBox>

            <TextBox
              onClick={() => {
                setBiodata(!biodata);
                setAddress(!address);
              }}
            >
              <p>Daftar Alamat</p>
            </TextBox>
          </div>

          <UploadBox profile />

          <Information>
            <h4>Ubah Biodata Diri</h4>
            <Data>
              <li>Nama</li>
              <li>{userLoginState.fullname}</li>
              <li>Ubah</li>
            </Data>

            <Data>
              <li>Tanggal Lahir</li>
              <li>{userLoginState.birth_date}</li>
              <li>Ubah</li>
            </Data>

            <Data>
              <li>Jenis Kelamin</li>
              <li>Laki-Laki</li>
              <li>Ubah</li>
            </Data>

            <h4>Ubah Kontak</h4>
            <Data>
              <li>Email</li>
              <li>{userLoginState.email}</li>
            </Data>

            <Data empty={empty}>
              <li>Nomor HP</li>
              {userLoginState.phone_number ? (
                <>
                  <li>{userLoginState.phone_number}</li>
                  <li>Ubah</li>
                </>
              ) : (
                <li>Tambah Nomor HP</li>
              )}
            </Data>
          </Information>
        </ProfileContainer>
      )}

      {address && (
        <ProfileContainer>
          <div className='valueChoose'>
            <TextBox
              onClick={() => {
                setBiodata(!biodata);
                setAddress(!address);
              }}
            >
              <p>Biodata Diri</p>
            </TextBox>

            <TextBox address={address}>
              <p>Daftar Alamat</p>
            </TextBox>
          </div>

          <RightArea>
            <Button
              primary
              address
              text='Tambah Alamat Baru'
              bgColor={colors.yellow}
              onClick={() => modalTambahAlamatDispatch(openModalTambahAlamat())}
            />

            <ProductsContainer profileAddress />

            {scroll && <ScrollSign center />}
          </RightArea>

          <PopoutComponent modal={modalTambahAlamatState} />
        </ProfileContainer>
      )}
    </StyledProfile>
  );
};

export default Profile;
