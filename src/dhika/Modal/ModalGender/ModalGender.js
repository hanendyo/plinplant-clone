import React, { useContext, useState, useEffect } from "react";
import {
  Popup,
  PopupInner,
  LineData,
  InsertData,
  ButtonContainer,
} from "./ModalGender.component";
import { colors } from "../../../master/constant/style/index";
// import { TextField } from "@material-ui/core";
import { closeModalGantiGender } from "../../../context/actions/modalActions";
import { ContextStore } from "../../../context/store/ContextStore";
import Button from "../../../master/components/additional/Button";
import axios from "axios";
import {
  makeStyles,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { userLogin } from "../../../context/actions/userLoginAction";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 550,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ModalGender = ({ modal, state }) => {
  const { modalGantiGenderDispatch, userLoginState } = useContext(ContextStore);

  const [input, setInput] = useState({
    fk_gender_id: userLoginState.fk_gender_id,
    // type: userInfoState[0]?.type,
    // birth_date: userInfoState[0]?.birth_date,
    // phone_number: userInfoState[0]?.phone_number,
  });

  const classes = useStyles();
  useEffect(() => {}, []);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const HandleSubmit = async (e) => {
    let data = JSON.parse(localStorage.getItem("userInfo"));
    data.fk_gender_id = input.fk_gender_id;
    localStorage.setItem("userInfo", JSON.stringify(data));
    e.preventDefault();
    await axios
      .put(
        `http://localhost:5000/input/user_update_gender/${userLoginState.pk_user_id}`,
        input
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    modalGantiGenderDispatch(closeModalGantiGender());
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

            <FormControl variant="filled" className={classes.formControl}>
              {/* <InputLabel id="gender-label">Jenis Kelamin</InputLabel> */}
              <Select
                labelId="gender-label"
                variant="outlined"
                id="gender-label"
                value={input.fk_gender_id}
                onChange={(e) =>
                  setInput({
                    ...input,
                    fk_gender_id: e.target.value,
                  })
                }
              >
                <MenuItem value={1}>Pria</MenuItem>
                <MenuItem value={2}>Wanita</MenuItem>
              </Select>
              <FormHelperText>
                Perubahan ini akan ditampilkan di website kami
              </FormHelperText>
            </FormControl>
          </InsertData>
        </LineData>
        <ButtonContainer>
          <Button
            primary
            text="Batal"
            bgColor="#2222224d"
            onClick={() => {
              modalGantiGenderDispatch(closeModalGantiGender());
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

export default ModalGender;
