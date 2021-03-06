import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { colors } from "../../constant/style";
import { ContextStore } from "../../../context/store/ContextStore";
import { closeModalUpload } from "../../../context/actions";
import { updateStatusTransaction } from "../../../context/actions/fetchingActions";
import axios from "axios";
import { cmsAction } from "../../../context/actions/CmsAction";
import { userPictureUpdate } from "../../../context/actions/userLoginAction";

const UploadBox = ({
  pk_invoice_id,
  invoice,
  modal,
  profile,
  payment,
  setPayment,
}) => {
  const {
    modalUploadDispatch,
    invoiceDispatch,
    userState,
    userDispatch,
    userLoginState,
    userLoginDispatch,
  } = useContext(ContextStore);

  const inputFile = useRef(null);
  const [reviewImageInvoice, setReviewImageInvoice] = useState(null);
  const [reviewImageUser, setReviewImageUser] = useState(null);
  const [imageUploadInvoice, setImageUploadInvoice] = useState(null);
  const [imageUploadUser, setImageUploadUser] = useState(null);
  const [picture, setPicture] = useState("");

  const transactionStatus = "verif";

  const userData = JSON.parse(localStorage.getItem("userInfo"));
  // console.log(`USERDATA UPLOAD BOX: `, userData.picture);

  const onButtonClick = (e) => {
    // `current` points to the mounted file input element
    e.preventDefault();
    inputFile.current.click();
  };

  const handleUpdateStatus = (data) => {
    invoiceDispatch(updateStatusTransaction(data));

    modalUploadDispatch(closeModalUpload());

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  // API
  const url = "http://localhost:8081/input/";
  const endPointInvoice = "invoice";
  const endPointUser = "user";

  const updateImageInvoiceAPI = async (form) => {
    const data = new FormData();
    data.set("payment_image_upload", imageUploadInvoice); //--> objectnya/file + upload
    axios
      .put(url + endPointInvoice + `_update`, data)
      .then((res) => {
        // getAllDatasAPI();
        // console.log(`Proof of payment successfuly updated!`);
        // console.log(res);
        return res;
      })
      .catch((err) => {
        // console.log(`ERROR!`);
        // console.log(err);
        return err;
      });
  };

  const updateImageUserAPI = async (form) => {
    const data = new FormData();
    data.append("picture", form.picture);
    data.append("picture_upload", imageUploadUser);

    axios
      .put(url + endPointUser + `_update/${userLoginState.pk_user_id}`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log(`User profile picture successfuly Updated!`);
        // console.log(res);
        return res;
      })
      .catch((err) => {
        // console.log(`ERROR!`);
        // console.log(err);
        return err;
      });
  };

  const handleSubmitInvoice = (
    { pk_invoice_id, transactionStatus, payment },
    e
  ) => {
    e.preventDefault();
    handleUpdateStatus({ pk_invoice_id, transactionStatus, payment });
    updateImageInvoiceAPI();
  };

  userData[`picture`] = userState.picture;
  const handleSubmitUser = (e) => {
    e.preventDefault();
    updateImageUserAPI(userState);

    const pk_user_id = userLoginState.pk_user_id;

    userLoginDispatch(userPictureUpdate({ picture, pk_user_id }));

    localStorage.setItem(`userInfo`, JSON.stringify(userData));

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const formImageInvoice = (e) => {
    const img = e.target.files[0];
    const imgName = e.target.files[0].name;
    // console.log(`IMEJ: `, img);
    setPayment(imgName);
    setReviewImageInvoice(URL.createObjectURL(img));
    setImageUploadInvoice(img);
  };

  const formImageUser = (e) => {
    const img = e.target.files[0];
    const imgName = e.target.files[0].name;
    // console.log(`IMEJ: `, img);
    userDispatch(cmsAction("picture", imgName));
    setPicture(imgName);
    setReviewImageUser(URL.createObjectURL(img));
    setImageUploadUser(img);
  };

  return (
    <>
      {profile && (
        <ModalBox
          profile={profile}
          encType="multipart/form-data"
          noValidate
          autoComplete="off"
        >
          <img
            src={
              reviewImageUser !== null
                ? reviewImageUser
                : userLoginState.picture === null
                ? process.env.PUBLIC_URL + `/images/user_image/default.png`
                : process.env.PUBLIC_URL +
                  `/images/user_image/${userLoginState.picture}`
            }
            alt=""
          />

          <input
            name="picture_upload"
            type="file"
            id="file"
            ref={inputFile}
            onChange={(e) => formImageUser(e)}
            style={{ display: "none" }}
          />

          <Button
            primary
            summary
            text="Pilih Foto"
            bgColor={colors.green}
            onClick={onButtonClick}
          />

          <Button
            primary
            summary
            text="Upload"
            bgColor={colors.green}
            onClick={handleSubmitUser}
          />

          <p>Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>
        </ModalBox>
      )}

      {invoice && (
        <ModalOverlay modal={modal}>
          <form encType="multipart/form-data" noValidate autoComplete="off">
            <ModalBox>
              <img src={reviewImageInvoice} alt="" />

              <input
                name="payment_image_upload"
                type="file"
                id="file"
                ref={inputFile}
                onChange={(e) => formImageInvoice(e)}
                style={{ display: "none" }}
              />

              <Button
                primary
                summary
                text="Pilih Foto"
                bgColor={colors.green}
                onClick={onButtonClick}
              />

              <p>Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>

              <div>
                <Button
                  primary
                  text="Batal"
                  bgColor="#2222224d"
                  onClick={() => modalUploadDispatch(closeModalUpload())}
                />

                <Button
                  primary
                  text="Kirim"
                  bgColor={colors.green}
                  onClick={(e) =>
                    handleSubmitInvoice(
                      { pk_invoice_id, transactionStatus, payment },
                      e
                    )
                  }
                />
              </div>
            </ModalBox>
          </form>
        </ModalOverlay>
      )}
    </>
  );
};

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #222222cc;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${({ modal }) => (modal ? "auto" : "none")};
`;

const ModalBox = styled.form`
  width: 100%;
  max-width: 340px;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
  background-color: ${colors.white};
  padding: 20px;

  margin-right: ${({ profile }) => (profile ? "30px" : "unset")};

  & > img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  & > p {
    color: #22222280;
    font-size: 12px;
    margin-top: 10px;
  }

  & > button:first-of-type {
    margin-bottom: 5px;
  }

  & > div {
    text-align: right;
    margin-top: 20px;

    & > button {
      margin-left: 5px;
    }
  }

  @media (max-width: 760px) {
    margin-right: ${({ profile }) => (profile ? "unset" : "unset")};
    margin-bottom: ${({ profile }) => (profile ? "30px" : "unset")};
  }
`;

export default UploadBox;
