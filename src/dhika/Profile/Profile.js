import React, { useState, useEffect, useContext } from "react";
import {
  StyledProfile,
  ProfileContainer,
  TextBox,
  Information,
  Data,
  RightArea,
} from "./Profile.component";
import axios from "axios";
import UploadBox from "../../master/components/additional/UploadBox";
import ProductsContainer from "../../fajariadi/components/Main/components/Product/ProductsContainer";
import { addresses } from "../../master/constant/data/dummy-data";
import ScrollSign from "../../master/components/additional/ScrollSign";
import { ContextStore } from "../../context/store/ContextStore";
import PopoutComponent from "../Modal/ModalAlamat/PopupComponent/Popout";
import Button from "../../master/components/additional/Button";
import { colors } from "../../master/constant/style";
import ModalNama from "../Modal/ModalNama/ModalNama";
import {
  openModalTambahAlamat,
  openModalGantiNama,
  openModalGantiBirthdate,
  openModalGantiGender,
  openModalGantiNomor,
} from "../../context/actions/modalActions";
import ModalBirthdate from "../Modal/ModalBirthdate/ModalBirthdate";
import ModalGender from "../Modal/ModalGender/ModalGender";
import ModalPhone from "../Modal/ModalPhone/ModalPhone";

const Profile = () => {
  const {
    modalTambahAlamatState,
    modalTambahAlamatDispatch,
    modalGantiNamaState,
    modalGantiNamaDispatch,
    modalGantiBirthdateState,
    modalGantiBirthdateDispatch,
    modalGantiGenderState,
    modalGantiGenderDispatch,
    modalGantiNomorState,
    modalGantiNomorDispatch,
    userAddressState,
    userInfoState,
  } = useContext(ContextStore);

  const [state, setState] = useState("");

  const [biodata, setBiodata] = useState(true);
  const [address, setAddress] = useState(false);

  // const [empty, setEmpty] = useState(true);
  // const [selected, setSelected] = useState(false);

  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    // ::: FETCH USER INFO :::
    const getUserInfo = async () => {
      const res = await axios.get("http://localhost:5000/input/user/1");

      console.log("INI DATA GET: ", res.data.data);
    };

    getUserInfo();
    if (userAddressState.length < 3) setScroll(false);
    if (userAddressState.length > 2) setScroll(true);
    console.log("HALO INI USER INFO :", userInfoState);
  }, [userAddressState, userInfoState]);

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
              <li>{userInfoState[0]?.fullname}</li>
              <li
                onClick={() => {
                  setState("name");
                  modalGantiNamaDispatch(openModalGantiNama());
                }}
              >
                Ubah
              </li>
            </Data>

            <Data>
              <li>Tanggal Lahir</li>
              <li>{userInfoState[0]?.birth_date}</li>
              <li
                onClick={() => {
                  setState("tanggal lahir");
                  modalGantiBirthdateDispatch(openModalGantiBirthdate());
                }}
              >
                Ubah
              </li>
            </Data>

            <Data>
              <li>Jenis Kelamin</li>
              <li>{userInfoState[0]?.type}</li>
              <li
                onClick={() => {
                  setState("Jenis Kelamin");
                  modalGantiGenderDispatch(openModalGantiGender());
                }}
              >
                Ubah
              </li>
            </Data>

            <h4>Ubah Kontak</h4>
            <Data>
              <li>Email</li>
              <li>adiwijna@gmail.com</li>
            </Data>

            <Data>
              <li>Nomor HP</li>
              <li>{userInfoState[0]?.phone_number}</li>
              <li
                onClick={() => {
                  setState("Nomor HP");
                  modalGantiNomorDispatch(openModalGantiNomor());
                }}
              >
                Ubah
              </li>
            </Data>
          </Information>
          <ModalNama modal={modalGantiNamaState} state={state} />
          <ModalBirthdate modal={modalGantiBirthdateState} state={state} />
          <ModalGender modal={modalGantiGenderState} state={state} />
          <ModalPhone modal={modalGantiNomorState} state={state} />
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
