import React, { useEffect, useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useContext } from 'react';
import { ContextStore } from '../../../../context/store/ContextStore';
import { postAPI, cmsAction } from '../../../../context/actions/CmsAction';
import axios from 'axios';
import { colors } from '../../../../master/constant/style/index';
import {
  Container,
  BoxInput,
  SpanImage,
  ButtonContainer,
} from '../../style/Form';

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
      backgroundColor: 'rgb(187, 203, 194)',
      color: 'primary',
    },
  },
}));

const Contact = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { orderItemState, orderItemDispatch } = context;

  // USE STATE
  const [dataOrderItem, setDataOrderItem] = useState([
    {
      quantity: '',
      fk_price_list_id: '',
      // fk_user_id: '',
      // fk_city_id: ''
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);

  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    console.log(`dataOrderItem: `, dataOrderItem);
  }, []);

  const url = 'http://localhost:5000/input/';
  const endPoint = 'order_item';
  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + `${endPoint}_get_all_datas`)
      .then((res) => {
        setDataOrderItem(res.data.data);
        console.log(`GET RES DATA DATA: `, res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // POST
  const postAPI = async (form) => {
    const data = new FormData();
    console.log(`formdata:`, form);
    data.append('quantity', form.quantity);
    data.append('fk_price_list_id', form.fk_price_list_id);
    // // data.append("fk_user_id", form.fk_user_id);
    // data.append("pk_city_id", form.pk_city_id);

    axios
      .post(url + `${endPoint}_input`, data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        getAllDatasAPI();
        console.log(`Order item successfuly created!`);
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
        console.log(`Order item successfuly updated!`);
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
      updateAPI(orderItemState);
      setIsUpdate(false);
    } else {
      postAPI(orderItemState);
    }

    setDataOrderItem([
      {
        ...dataOrderItem,
        quantity: orderItemState.quantity,
        fk_price_list_id: orderItemState.fk_price_list_id,
        pk_order_item_id: orderItemState.pk_order_item_id,
        // // fk_user_id: orderItemState.fk_user_id,
        // // fk_city_id: orderItemState.fk_city_id
      },
    ]);

    clearFormData();

    console.log(`CONTACT STATE SUBMIT: `, orderItemState);
  };

  // HANDLE DELETE
  const handleDelete = (id, index) => {
    deleteAPI(id, index);
  };

  // HANDLE UPDATE
  const handleUpdate = (data, index) => {
    // console.log(`index update: `, index);
    console.log(`data id update: `, data.pk_order_item_id);
    setIsUpdate(true);
    setIndexUpdate(index);
    orderItemDispatch(cmsAction(`pk_order_item_id`, data.pk_order_item_id));
    orderItemDispatch(cmsAction(`quantity`, data.quantity));
    orderItemDispatch(cmsAction(`fk_price_list_id`, data.fk_price_list_id));
    // // orderItemDispatch(cmsAction(`fk_user_id`, data.fk_user_id));
    // // orderItemDispatch(cmsAction(`fk_city_id`, data.fk_city_id));

    console.log(`update from orderItemState: `, orderItemState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    orderItemDispatch(cmsAction(`quantity`, ''));
    orderItemDispatch(cmsAction(`fk_price_list_id`, ''));
    // orderItemDispatch(cmsAction(`fk_user_id`, ''));
    // orderItemDispatch(cmsAction(`fk_city_id`, ''));
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    orderItemDispatch(cmsAction(name, value));
  };

  return (
    <Container>
      <h4>Order item input</h4>
      <BoxInput>
        <form
          encType='multipart/form-data'
          className={classes.root}
          onSubmit={(e) => handleSubmit(e)}
          noValidate
          autoComplete='off'
        >
          <TextField
            value={orderItemState.quantity}
            name='quantity'
            onChange={(e) => formChange(`quantity`, e.target.value)}
            id='outlined-basic'
            label='Quantity'
            variant='outlined'
          />
          <TextField
            value={orderItemState.fk_price_list_id}
            name='fk_price_list_id'
            onChange={(e) => formChange(`fk_price_list_id`, e.target.value)}
            id='outlined-basic'
            label='Price_list_ID'
            variant='outlined'
          />

          <Button
            className={classes.button}
            variant='contained'
            color='primary'
            type='submit'
            style={{ backgroundColor: `${colors.green}`, marginLeft: '25px' }}
          >
            {isUpdate ? 'Update' : 'Submit'}
          </Button>
          {isUpdate && (
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              onClick={() => handleCancel()}
            >
              Cancel
            </Button>
          )}
        </form>
      </BoxInput>
      <br />
      <h4>Data Order Item</h4>
      <div>
        {dataOrderItem.map(
          (data, index) => (
            console.log(`data contact map: `, dataOrderItem),
            (
              <ul className='map' key={index}>
                <li>
                  ORDER ITEM ID: <span>{data.pk_order_item_id}</span>
                </li>
                <li>
                  QUANTITY: <span>{data.quantity}</span>
                </li>
                <li>
                  PRICE_LIST_ID: <span>{data.fk_price_list_id}</span>
                </li>
                {/* <li>USER_ID: <span>{data.fk_user_id}</span></li> */}
                {
                  <div>
                    <button
                      onClick={() => handleDelete(data.pk_order_item_id, index)}
                    >
                      delete
                    </button>
                    <button onClick={() => handleUpdate(data, index)}>
                      Update
                    </button>
                    <br />
                  </div>
                }
                <br />
              </ul>
            )
          )
        )}
      </div>
    </Container>
  );
};

export default Contact;