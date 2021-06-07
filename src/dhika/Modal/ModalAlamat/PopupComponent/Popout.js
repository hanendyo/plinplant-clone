import React, { useContext, useState } from "react";
import {
  Popup,
  PopupInner,
  LineData,
  InsertData,
  ButtonContainer,
} from "./Popout.component";
// import Button from "../../../master/components/additional/Button";
import { colors } from "../../../../master/constant/style";
import { FaTimes } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import {
  closeModalTambahAlamat,
  openModalPilihAlamat,
} from "../../../../context/actions/modalActions";
import { ContextStore } from "../../../../context/store/ContextStore";
import Button from "../../../../master/components/additional/Button";

const PopoutComponent = ({ modal }) => {
  const { modalTambahAlamatDispatch, modalPilihAlamatDispatch } =
    useContext(ContextStore);

  const [input, setInput] = useState({
    penerima: "",
    handphone: "",
    kota: "",
    kodepos: "",
    alamat: "",
  });

  const HandleSubmit = () => {
    console.log(input);
    alert("Alamat berhasil dimasukkan");
  };

  return (
    <Popup modal={modal}>
      <PopupInner>
        <h4>Tambah Alamat Baru</h4>

        <LineData>
          <InsertData>
            <label>Nama Penerima</label>

            <TextField
              className="form"
              id="name"
              label="Tulis nama penerima"
              variant="outlined"
              value={input.penerima}
              onChange={(e) =>
                setInput({
                  ...input,
                  penerima: e.target.value,
                })
              }
            />
          </InsertData>

          <InsertData>
            <label>No. Ponsel</label>

            <TextField
              className="form"
              id="number"
              label="Tulis nomor ponsel"
              variant="outlined"
              value={input.handphone}
              onChange={(e) =>
                setInput({
                  ...input,
                  handphone: e.target.value,
                })
              }
            />
          </InsertData>
        </LineData>

        <LineData>
          <InsertData>
            <label>Kota atau Kecamatan</label>

            <TextField
              className="form"
              id="city"
              label="Tulis kota/kecamatan"
              variant="outlined"
              value={input.kota}
              onChange={(e) =>
                setInput({
                  ...input,
                  kota: e.target.value,
                })
              }
            />
          </InsertData>

          <InsertData>
            <label>Kode Pos</label>

            <TextField
              className="form"
              id="postalcode"
              label="5 digit kode pos"
              variant="outlined"
              value={input.kodepos}
              onChange={(e) =>
                setInput({
                  ...input,
                  kodepos: e.target.value,
                })
              }
            />
          </InsertData>
        </LineData>

        <LineData>
          <InsertData>
            <label>Alamat</label>

            <TextField
              className="form"
              id="address"
              label="Tulis Detail Alamat"
              variant="outlined"
              value={input.alamat}
              onChange={(e) =>
                setInput({
                  ...input,
                  alamat: e.target.value,
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
              modalTambahAlamatDispatch(closeModalTambahAlamat());
              modalPilihAlamatDispatch(openModalPilihAlamat());
            }}
          />

          <Button primary text="Tambah" bgColor={colors.green} />
        </ButtonContainer>
      </PopupInner>
    </Popup>
  );
};

export default PopoutComponent;
