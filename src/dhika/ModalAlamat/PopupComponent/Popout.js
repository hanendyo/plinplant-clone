import React, { useState } from "react";
import {
  Popup,
  PopupInner,
  LineData,
  InsertData,
  ButtonContainer,
} from "./Popout.component";
// import Button from "../../../master/components/additional/Button";
import { colors } from "../../../master/constant/style";
import { FaTimes } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "5px 10px",
      width: "90%",
    },
  },
}));
const PopoutComponent = (props) => {
  const classes = useStyles();

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

  return props.trigger ? (
    <div>
      <Popup>
        <PopupInner>
          <h4
            style={{
              color: `${colors.black}`,
              textAlign: "center",
              margin: "20px",
            }}
          >
            Tambah Alamat Baru
          </h4>
          <LineData>
            <InsertData>
              <label
                style={{
                  color: `${colors.black}`,
                  padding: "0 5px",
                  fontWeight: "600",
                  margin: "0 5px",
                }}
              >
                Nama Penerima
              </label>
              <TextField
                className={classes.root}
                id="outlined-basic"
                label="Tulis nama penerima"
                variant="outlined"
                style={{ width: "30ch" }}
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
              <label
                style={{
                  color: `${colors.black}`,
                  padding: "0 5px",
                  fontWeight: "600",
                  margin: "0 5px",
                }}
              >
                No. Ponsel
              </label>
              <TextField
                className={classes.root}
                id="outlined-basic"
                label="Tulis nomor ponsel"
                variant="outlined"
                style={{ width: "30ch" }}
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
              <label
                style={{
                  color: `${colors.black}`,
                  padding: "0 5px",
                  fontWeight: "600",
                  margin: "0 5px",
                }}
              >
                Kota atau Kecamatan
              </label>
              <TextField
                className={classes.root}
                id="outlined-basic"
                label="Tulis kota/kecamatan"
                variant="outlined"
                style={{ width: "40ch" }}
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
              <label
                style={{
                  color: `${colors.black}`,
                  padding: "0 5px",
                  fontWeight: "600",
                  margin: "0 5px",
                }}
              >
                Kode Pos
              </label>
              <TextField
                className={classes.root}
                id="outlined-basic"
                label="5 digit kode pos"
                variant="outlined"
                style={{ width: "19ch" }}
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
              <label
                style={{
                  color: `${colors.black}`,
                  padding: "0 5px",
                  fontWeight: "600",
                  margin: "0 5px",
                }}
              >
                Alamat
              </label>
              <TextField
                className={classes.root}
                id="outlined-basic"
                label="Tulis nama jalan, nomor rumah, nomor komplel"
                variant="outlined"
                style={{ width: "64ch" }}
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
          <FaTimes
            color={colors.black}
            size="20px"
            style={{ position: "absolute", top: "20px", right: "20px" }}
            onClick={() => props.setTrigger(false)}
            cursor="pointer"
          />
          <ButtonContainer>
            <Button
              variant="contained"
              color="primary"
              component="span"
              style={{
                width: "100px",
                marginTop: "35px",
                marginRight: "30px",
                padding: "10px 60px",
                fontWeight: "700",
                color: `${colors.black}`,
                border: `1px solid ${colors.black}`,
                background: `${colors.white}`,
              }}
              onClick={() => props.setTrigger(false)}
            >
              Batal
            </Button>
            <Button
              variant="contained"
              component="span"
              style={{
                width: "100px",
                marginTop: "35px",
                fontWeight: "700",
                padding: "10px 60px",
                background: `${colors.green}`,
                color: `${colors.white}`,
              }}
              onClick={HandleSubmit}
            >
              Tambah
            </Button>
          </ButtonContainer>
        </PopupInner>
      </Popup>
    </div>
  ) : (
    ""
  );
};

export default PopoutComponent;
