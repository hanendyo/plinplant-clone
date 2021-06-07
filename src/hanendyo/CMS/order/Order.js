import React, { useEffect, useState } from 'react';
import {
  Button,
  makeStyles,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import { useContext } from 'react';
import { ContextStore } from '../../../context/store/ContextStore';
import { postAPI, cmsAction } from '../../../context/actions/CmsAction';
import axios from 'axios';
import {
  TableListPhone,
  ContentBox,
  ButtonList,
  Container,
  BoxForm,
  BoxTable,
  BoxTablePhone,
  SpanImage,
  ButtonContainer,
  ImageBox,
  List,
  ListData,
} from '../style/Form';
import { colors } from '../../../master/constant/style';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex',
    },
    button: {
      width: '80%',
      margin: '5px 0',
      backgroundColor: `"rgb(187, 203, 194)"`,
      color: 'primary',
    },
  },
}));

const Contact = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { orderState, orderDispatch } = context;

  // USE STATE
  const [dataOrder, setDataOrder] = useState([
    {
      status: '',
      created_at: '',
      fk_user_id: '',
      // fk_city_id: ''
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);

  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    console.log(`dataOrder: `, dataOrder);
  }, []);

  const url = 'http://localhost:5000/input/';
  const endPoint = 'order';
  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + `${endPoint}_get_all_datas`)
      .then((res) => {
        if (res.status === 200) {
          console.log(`GET RES DATA DATA: `, res.data.data);
          setDataOrder(res.data.data);
        } else {
          console.log('Error');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // POST
  const postAPI = async (form) => {
    const data = new FormData();
    console.log(`formdata:`, form);
    data.append('status', form.status);
    data.append('created_at', form.created_at);
    data.append('fk_user_id', form.fk_user_id);
    // data.append("pk_city_id", form.pk_city_id);

    axios
      .post(url + `${endPoint}_input`, data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        getAllDatasAPI();
        console.log(`Category successfuly created!`);
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(`ERROR!`);
        console.log(err);
        return err;
      });
  };

  // DELETE
  const deleteAPI = async (id, index) => {
    await axios
      .delete(url + `${endPoint}_delete/` + id)
      .then((deleted) => {
        console.log(`DELETED: `, deleted);
        getAllDatasAPI();
      })
      .catch((err) => err);
  };

  // UPDATE
  const updateAPI = async (data) => {
    axios
      .put(url + `${endPoint}_update`, data)
      .then((res) => {
        getAllDatasAPI();
        console.log(`Contact successfuly updated!`);
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(`ERROR!`);
        console.log(err);
        return err;
      });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      updateAPI(orderState);
      setIsUpdate(false);
    } else {
      postAPI(orderState);
    }

    setDataOrder([
      {
        ...dataOrder,
        status: orderState.status,
        created_at: orderState.created_at,
        fk_user_id: orderState.fk_user_id,
        // // fk_city_id: orderState.fk_city_id
      },
    ]);

    clearFormData();

    console.log(`CONTACT STATE SUBMIT: `, orderState);
  };

  // HANDLE DELETE
  const handleDelete = (id, index) => {
    deleteAPI(id, index);
  };

  // HANDLE UPDATE
  const handleUpdate = (data, index) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // console.log(`index update: `, index);
    console.log(`data id update: `, data.pk_order_id);
    setIsUpdate(true);
    setIndexUpdate(index);
    orderDispatch(cmsAction(`pk_invoice_id`, data.pk_invoice_id));
    orderDispatch(cmsAction(`status`, data.status));
    // // orderDispatch(cmsAction(`fk_city_id`, data.fk_city_id));

    console.log(`update from orderState: `, orderState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    orderDispatch(cmsAction(`status`, ''));
    orderDispatch(cmsAction(`created_at`, ''));
    orderDispatch(cmsAction(`fk_user_id`, ''));
    // orderDispatch(cmsAction(`fk_city_id`, ''));
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    orderDispatch(cmsAction(name, value));
  };

  return (
    <Container>
      <h4>ORDER INPUT</h4>
      <BoxForm>
        <form
          encType='multipart/form-data'
          className={classes.root}
          onSubmit={(e) => handleSubmit(e)}
          noValidate
          autoComplete='off'
        >
          <FormControl className={classes.formControl}>
            <InputLabel id='status'> Order Status</InputLabel>
            <Select
              value={orderState.status}
              onChange={(e) => formChange('status', e.target.value)}
              name='status'
              labelId='status'
              id='outlined-basic'
              variant='outlined'
            >
              <MenuItem value={'bayar'}>{'Menunggu Pembayaran'}</MenuItem>
              <MenuItem value={'verif'}>{'Verifikasi Pembayaran'}</MenuItem>
              <MenuItem value={'proses'}>{'Pesanan Dikirim'}</MenuItem>
              <MenuItem value={'selese'}>{'Transaksi Selesai'}</MenuItem>
            </Select>
          </FormControl>
          {/* <TextField
            value={orderState.status}
            name="status"
            onChange={(e) => formChange(`status`, e.target.value)}
            id="outlined-basic"
            label="Order status"
            variant="outlined"
          /> */}
          <TextField
            value={orderState.created_at}
            name='created_at'
            onChange={(e) => formChange(`created_at`, e.target.value)}
            id='outlined-basic'
            label='Created at'
            variant='outlined'
          />
          <TextField
            value={orderState.fk_user_id}
            name='fk_user_id'
            onChange={(e) => formChange(`fk_user_id`, e.target.value)}
            id='outlined-basic'
            label='User_ID'
            variant='outlined'
          />

          <Button
            className={classes.button}
            variant='contained'
            color='primary'
            type='submit'
            style={{ backgroundColor: `${colors.green}` }}
          >
            {isUpdate ? 'Update' : 'Submit'}
          </Button>
          {isUpdate && (
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              onClick={() => handleCancel()}
              style={{ marginTop: '20px', backgroundColor: `${colors.green}` }}
            >
              Cancel
            </Button>
          )}
        </form>
      </BoxForm>
      <br />
      <h4>ORDER STATUS DATA</h4>
      <BoxTable>
        <List>
          <li>ORDER ID</li>
          <li>STATUS</li>
          <li>CREATED AT</li>
          <li>USER ID</li>
          <li>ACTION</li>
        </List>

        {dataOrder.map((data, index) => (
          <ListData key={index}>
            <li>{data.pk_order_id}</li>
            <li>{data.status}</li>
            <li>{data.created_at}</li>
            <li>{data.fk_user_id}</li>
            {
              <ButtonList>
                <Button
                  onClick={() => handleUpdate(data, index)}
                  className={classes.button}
                  variant='contained'
                  color='primary'
                  type='update'
                  style={{
                    marginBottom: '10px',
                    backgroundColor: `${colors.green}`,
                  }}
                >
                  Update
                </Button>
                <Button
                  onClick={() => handleDelete(data.pk_order_id, index)}
                  className={classes.button}
                  variant='contained'
                  color='primary'
                  type='delete'
                  style={{ backgroundColor: `${colors.green}` }}
                >
                  delete
                </Button>
              </ButtonList>
            }
          </ListData>
        ))}
      </BoxTable>
    </Container>
  );
};

export default Contact;
