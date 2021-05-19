<<<<<<< HEAD
import React, { useState, useRef, useEffect, useContext } from "react";
=======
import React, { useState, useRef, useEffect, useContext } from 'react';
>>>>>>> 820fd6304f3bfd6b0cb82f50b8c2148dc23d9197
import {
  StyledProfile,
  ProfileContainer,
  TextBox,
  Information,
  Data,
  RightArea,
<<<<<<< HEAD
} from "./Profile.component";
import ModalAlamat from "../ModalAlamat/ModalAlamat";
import UploadBox from "../../master/components/additional/UploadBox";
import ProductsContainer from "../../fajariadi/components/Main/components/Product/ProductsContainer";
import { addresses } from "../../master/constant/data/dummy-data";
import ScrollSign from "../../master/components/additional/ScrollSign";
import { ContextStore } from "../../context/store/ContextStore";
import PopoutComponent from "../ModalAlamat/PopupComponent/Popout";
import Button from "../../master/components/additional/Button";
import { colors } from "../../master/constant/style";
import { openModalTambahAlamat } from "../../context/actions/modalActions";
=======
} from './Profile.component';
import ModalAlamat from '../ModalAlamat/ModalAlamat';
import UploadBox from '../../master/components/additional/UploadBox';
import ProductsContainer from '../../fajariadi/components/Main/components/Product/ProductsContainer';
import { addresses } from '../../master/constant/data/dummy-data';
import ScrollSign from '../../master/components/additional/ScrollSign';
import { ContextStore } from '../../context/store/ContextStore';
import PopoutComponent from '../ModalAlamat/PopupComponent/Popout';
import Button from '../../master/components/additional/Button';
import { colors } from '../../master/constant/style';
import { openModalTambahAlamat } from '../../context/actions/modalActions';
>>>>>>> 820fd6304f3bfd6b0cb82f50b8c2148dc23d9197

const Profile = () => {
  const [visible, setVisible] = useState(true);

  const [trigger, setTrigger] = useState(true);
  const [empty, setEmpty] = useState(true);
  const [selected, setSelected] = useState(false);

  const { modalTambahAlamatState, modalTambahAlamatDispatch } = useContext(
    ContextStore
  );

  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    if (addresses.length < 4) setScroll(false);
    if (addresses.length > 3) setScroll(true);
  }, [addresses]);

  const HandleClick = () => {
    setTrigger(!trigger);
  };

  return (
    <StyledProfile>
      {trigger ? (
        <>
          <ProfileContainer>
            <div className='valueChoose'>
              <TextBox>
                <p>Biodata Diri</p>
              </TextBox>

              <TextBox onClick={HandleClick}>
                <p>Daftar Alamat</p>
              </TextBox>
            </div>

            <UploadBox profile />

            <Information>
              <h4>Ubah Biodata Diri</h4>
              <Data>
                <li>Nama</li>
                <li>Muhammad Adhika Adhiwijna</li>
                <li>Ubah</li>
              </Data>

              <Data>
                <li>Tanggal Lahir</li>
                <li>9 May 2021</li>
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
                <li>adiwijna@gmail.com</li>
              </Data>

              <Data empty={empty}>
                <li>Nomor HP</li>
                <li>Tambah Nomor HP</li>
              </Data>
            </Information>
          </ProfileContainer>
        </>
      ) : (
        <>
          <ProfileContainer>
            <div className='valueChoose'>
              <TextBox onClick={HandleClick}>
                <p>Biodata Diri</p>
              </TextBox>

              <TextBox>
                <p>Daftar Alamat</p>
              </TextBox>
            </div>

            <RightArea>
              <Button
                primary
                address
                text="Tambah Alamat Baru"
                bgColor={colors.yellow}
                onClick={() =>
                  modalTambahAlamatDispatch(openModalTambahAlamat())
                }
              />

              <ProductsContainer profileAddress selected={selected} />

              {scroll && <ScrollSign center />}
            </RightArea>

            <PopoutComponent modal={modalTambahAlamatState} />
          </ProfileContainer>
        </>
      )}
    </StyledProfile>
  );
};

export default Profile;
