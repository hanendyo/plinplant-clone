import React, { useContext, useState } from "react";
import {
  Popup,
  PopupInner,
  LineData,
  InsertData,
  ButtonContainer,
} from "./ModalNama.component";
import { colors } from "../../master/constant/style/index";
import { TextField } from "@material-ui/core";
import {
  closeModalGantiNama,
  openModalPilihNama,
} from "../../context/actions/modalActions";
import { ContextStore } from "../../context/store/ContextStore";
import Button from "../../master/components/additional/Button";

const ModalNama = ({ modal }) => {
  const { modalGantiNamaDispatch, modalPilihNamaDispatch } =
    useContext(ContextStore);

  const [input, setInput] = useState({
    data: "",
  });

  const HandleSubmit = () => {
    console.log(input);
    alert("Alamat berhasil dimasukkan");
  };

  return (
    <Popup modal={modal}>
      <PopupInner>
        <h4>Ubah Nama</h4>
        <p>Kamu dapat menguba nama mu disini</p>
        <p>Pastikan nama yang kamu ubah sudah benar</p>

        <LineData>
          <InsertData>
            <label>Nama</label>

            <TextField
              className="form"
              id="name"
              helperText="Nama ini akan ditampilkan di website kami"
              variant="outlined"
              value={input.data}
              onChange={(e) =>
                setInput({
                  ...input,
                  data: e.target.value,
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
              modalPilihNamaDispatch(openModalPilihNama());
            }}
          />

          <Button primary text="Ubah" bgColor={colors.green} />
        </ButtonContainer>
      </PopupInner>
    </Popup>
  );
};

export default ModalNama;
