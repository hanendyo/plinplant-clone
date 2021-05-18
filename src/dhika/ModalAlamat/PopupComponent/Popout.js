import React, { useContext, useState } from 'react';
import {
  Popup,
  PopupInner,
  LineData,
  InsertData,
  ButtonContainer,
} from './Popout.component';
// import Button from "../../../master/components/additional/Button";
import { colors } from '../../../master/constant/style';
import { FaTimes } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import {
  closeModalTambahAlamat,
  openModalPilihAlamat,
} from '../../../context/actions/modalActions';
import { ContextStore } from '../../../context/store/ContextStore';
import Button from '../../../master/components/additional/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: '5px 10px',
      width: '90%',
    },
  },
}));

const PopoutComponent = ({ modal }) => {
  const { modalTambahAlamatDispatch, modalPilihAlamatDispatch } =
    useContext(ContextStore);

  const classes = useStyles();

  const [input, setInput] = useState({
    penerima: '',
    handphone: '',
    kota: '',
    kodepos: '',
    alamat: '',
  });

  const HandleSubmit = () => {
    console.log(input);
  };

  return (
    <Popup modal={modal}>
      <PopupInner>
        <h4>Tambah Alamat Baru</h4>

        <LineData>
          <InsertData>
            <label
              style={{
                color: `${colors.black}`,
                padding: '0 5px',
                fontWeight: '600',
                margin: '0 5px',
              }}
            >
              Nama Penerima
            </label>

            <TextField
              className={classes.root}
              id='outlined-basic'
              label='Tulis nama penerima'
              variant='outlined'
              style={{ width: '30ch' }}
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
                padding: '0 5px',
                fontWeight: '600',
                margin: '0 5px',
              }}
            >
              No. Ponsel
            </label>

            <TextField
              className={classes.root}
              id='outlined-basic'
              label='Tulis nomor ponsel'
              variant='outlined'
              style={{ width: '30ch' }}
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
                padding: '0 5px',
                fontWeight: '600',
                margin: '0 5px',
              }}
            >
              Kota atau Kecamatan
            </label>

            <TextField
              className={classes.root}
              id='outlined-basic'
              label='Tulis kota/kecamatan'
              variant='outlined'
              style={{ width: '40ch' }}
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
                padding: '0 5px',
                fontWeight: '600',
                margin: '0 5px',
              }}
            >
              Kode Pos
            </label>

            <TextField
              className={classes.root}
              id='outlined-basic'
              label='5 digit kode pos'
              variant='outlined'
              style={{ width: '19ch' }}
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
                padding: '0 5px',
                fontWeight: '600',
                margin: '0 5px',
              }}
            >
              Alamat
            </label>

            <TextField
              className={classes.root}
              id='outlined-basic'
              label='Tulis nama jalan, nomor rumah, nomor komplel'
              variant='outlined'
              style={{ width: '64ch' }}
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
            text='Batal'
            bgColor='#2222224d'
            onClick={() => {
              modalTambahAlamatDispatch(closeModalTambahAlamat());
              modalPilihAlamatDispatch(openModalPilihAlamat());
            }}
          />
          <Button primary text='Tambah' bgColor={colors.green} />
        </ButtonContainer>
      </PopupInner>
    </Popup>
  );
};

export default PopoutComponent;
