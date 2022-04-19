import React, { useContext, useState, useEffect } from "react";
import {
  Popup,
  PopupInner,
  LineData,
  InsertData,
  ButtonContainer,
} from "./ModalNama.component";
import { colors } from "../../../master/constant/style/index";
import { TextField } from "@material-ui/core";
import {
  closeModalGantiNama,
  openModalPilihNama,
} from "../../../context/actions/modalActions";
import { ContextStore } from "../../../context/store/ContextStore";
import Button from "../../../master/components/additional/Button";
import axios from "axios";

const ModalNama = ({ modal, state }) => {
  const { modalGantiNamaDispatch, userLoginState } = useContext(ContextStore);

  // console.log("Halo ini yang ditangkap modal :", state);
  // let userData = JSON.parse(localStorage.getItem("user-data")) || {};
  const [input, setInput] = useState({
    // fullname: userData.data.result[0].fullname,
    fullname: userLoginState.fullname,
  });

  useEffect(() => {}, []);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("userInfo"));
    data.fullname = input.fullname;
    localStorage.setItem("userInfo", JSON.stringify(data));
    await axios
      .put(
        `http://localhost:8081/input/user_update_name/${userLoginState.pk_user_id}`,
        input
      )
      .then((response) => console.log("Ini response", response))
      .catch((err) => console.log(err));

    modalGantiNamaDispatch(closeModalGantiNama());
    refreshPage();
  };

  return (
    <Popup modal={modal}>
      <PopupInner>
        <h4>Ubah {state}</h4>
        <p>Kamu dapat mengubah {state.toLowerCase()} mu disini</p>
        <p>Pastikan {state.toLowerCase()} yang kamu ubah sudah benar</p>)
        <LineData>
          <InsertData>
            <label>{state}</label>

            <TextField
              className="form"
              id="name"
              helperText="Perubahan ini akan ditampilkan di website kami"
              variant="outlined"
              value={input.fullname}
              onChange={(e) =>
                setInput({
                  ...input,
                  fullname: e.target.value,
                })
              }
            />
          </InsertData>
        </LineData>
        <ButtonContainer>
          <Button
            primary
            text="Batal"
            bgColor="#2222224d"
            onClick={() => {
              modalGantiNamaDispatch(closeModalGantiNama());
            }}
          />

          <Button
            primary
            text="Ubah"
            bgColor={colors.green}
            type="submit"
            onClick={(e) => {
              HandleSubmit(e);
            }}
          />
        </ButtonContainer>
      </PopupInner>
    </Popup>
  );
};

export default ModalNama;
