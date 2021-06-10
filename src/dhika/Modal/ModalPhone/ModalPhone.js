import React, { useContext, useState, useEffect } from "react";
import {
  Popup,
  PopupInner,
  LineData,
  InsertData,
  ButtonContainer,
} from "./ModalPhone.component";
import { colors } from "../../../master/constant/style/index";
import { TextField } from "@material-ui/core";
import {
  closeModalGantiNomor,
  // openModalGantiNomor,
} from "../../../context/actions/modalActions";
import { ContextStore } from "../../../context/store/ContextStore";
import Button from "../../../master/components/additional/Button";
import axios from "axios";

const ModalPhone = ({ modal, state }) => {
  const { modalGantiNomorDispatch, userLoginState } = useContext(ContextStore);

  const [input, setInput] = useState({
    phone_number: userLoginState.phone_number,
  });

  useEffect(() => {}, []);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("userInfo"));
    console.log(data);
    data.phone_number = input.phone_number;
    localStorage.setItem("userInfo", JSON.stringify(data));
    await axios
      .put(
        `http://localhost:5000/input/user_update_phonenumber/${userLoginState.pk_user_id}`,
        input
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    modalGantiNomorDispatch(closeModalGantiNomor());
    refreshPage();
  };

  return (
    <Popup modal={modal}>
      <PopupInner>
        <h4>Ubah {state.charAt(0).toUpperCase() + state.slice(1)}</h4>
        <p>Kamu dapat mengubah {state} mu disini</p>
        <p>Pastikan {state} yang kamu ubah sudah benar</p>)
        <LineData>
          <InsertData>
            <label>{state.charAt(0).toUpperCase() + state.slice(1)}</label>

            <TextField
              className="form"
              id="phone_number"
              helperText="Perubahan ini akan ditampilkan di website kami"
              variant="outlined"
              value={input.phone_number}
              onChange={(e) =>
                setInput({
                  ...input,
                  phone_number: e.target.value,
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
              modalGantiNomorDispatch(closeModalGantiNomor());
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

export default ModalPhone;
