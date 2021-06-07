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
  const { modalGantiNomorDispatch, userInfoState } = useContext(ContextStore);

  console.log("Halo ini yang ditangkap modal :", state);

  const [input, setInput] = useState({
    phone_number: userInfoState[0]?.phone_number,
  });

  useEffect(() => {}, []);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const HandleSubmit = async (e) => {
    console.log(input);
    e.preventDefault();
    await axios
      .put("http://localhost:5000/input/user_update_phonenumber/1", input)
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
