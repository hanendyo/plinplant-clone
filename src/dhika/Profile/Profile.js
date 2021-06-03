import React, { useState, useRef, useEffect, useContext } from "react";
import {
  StyledProfile,
  ProfileContainer,
  TextBox,
  Information,
  Data,
  RightArea,
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
import {
  openModalGantiNama,
  openModalTambahAlamat,
} from "../../context/actions/modalActions";
import ModalNama from "../ModalNama/ModalNama";

const Profile = () => {
  const [visible, setVisible] = useState(true);

  const [biodata, setBiodata] = useState(true);
  const [address, setAddress] = useState(false);

  const [empty, setEmpty] = useState(true);

  const [selected, setSelected] = useState(false);

  const {
    modalTambahAlamatState,
    modalTambahAlamatDispatch,
    modalGantiNamaState,
    modalGantiNamaDispatch,
  } = useContext(ContextStore);

  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    if (addresses.length < 4) setScroll(false);
    if (addresses.length > 3) setScroll(true);
  }, [addresses]);

  return (
    <StyledProfile>
      {biodata && (
        <ProfileContainer>
          <div className="valueChoose">
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
              <li>Muhammad Adhika Adhiwijna</li>
              <li onClick={() => modalGantiNamaDispatch(openModalGantiNama())}>
                Ubah
              </li>
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
          <ModalNama modal={modalGantiNamaState} />
        </ProfileContainer>
      )}

      {address && (
        <ProfileContainer>
          <div className="valueChoose">
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
              text="Tambah Alamat Baru"
              bgColor={colors.yellow}
              onClick={() => modalTambahAlamatDispatch(openModalTambahAlamat())}
            />

            <ProductsContainer profileAddress selected={selected} />

            {scroll && <ScrollSign center />}
          </RightArea>

          <PopoutComponent modal={modalTambahAlamatState} />
        </ProfileContainer>
      )}
    </StyledProfile>
  );
};

export default Profile;
