import React, { useContext, useState, useEffect } from "react";
import {
  Popup,
  PopupInner,
  LineData,
  InsertData,
  ButtonContainer,
} from "./ModalBirthdate.component";
import { colors } from "../../../master/constant/style/index";
import { TextField } from "@material-ui/core";
import { closeModalGantiBirthdate } from "../../../context/actions/modalActions";
import { ContextStore } from "../../../context/store/ContextStore";
import Button from "../../../master/components/additional/Button";
import axios from "axios";

const ModalBirthdate = ({ modal, state }) => {
  const { modalGantiBirthdateDispatch, userInfoState } =
    useContext(ContextStore);

  // console.log("Halo ini yang ditangkap modal :", state);

  const [input, setInput] = useState({
    birth_date: userInfoState[0]?.birth_date,
  });

  useEffect(() => {}, []);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const HandleSubmit = async (e) => {
    console.log(input);
    e.preventDefault();
    await axios
      .put("http://localhost:5000/input/user_update_birthdate/1", input)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    modalGantiBirthdateDispatch(closeModalGantiBirthdate());

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
              id="birthdate"
              helperText="Perubahan ini akan ditampilkan di website kami"
              variant="outlined"
              value={input.birth_date}
              onChange={(e) =>
                setInput({
                  ...input,
                  birth_date: e.target.value,
                })
              }
            />
            {/* <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={input.birth_date}
          onChange={(e) =>
            setInput({
              ...input,
              birth_date: e.target.value,
            })
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> */}
          </InsertData>
        </LineData>
        <ButtonContainer>
          <Button
            primary
            text="Batal"
            bgColor="#2222224d"
            onClick={() => {
              modalGantiBirthdateDispatch(closeModalGantiBirthdate());
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

export default ModalBirthdate;
