import React, { useEffect, useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
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
  const { orderItemState, orderItemDispatch, cmsSidebarState } = context;

  // USE STATE
  const [dataOrderItem, setDataOrderItem] = useState([
    {
      pk_cart_id: '',
      phase_image: '',
      plant_name: '',
      plant_phase: '',
      price: '',
      quantity: '',
      weight: '',
      fk_plant_id: '',
      fk_user_id: '',
      fk_invoice_id: '',
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);
  const { userLoginState } = useContext(ContextStore);
  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    // console.log(`dataOrderItem: `, dataOrderItem);
  }, []);

  const url = 'http://localhost:5000/input/';
  const endPoint = 'cart';
  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + `${endPoint}/user/${userLoginState.pk_user_id}`)
      .then((res) => {
        setDataOrderItem(res.data.data);
        // console.log(`GET RES DATA DATA: `, res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    orderItemDispatch(cmsAction(name, value));
  };

  return (
    <Container>
      <br />
      <h4>ORDER ITEM DATA</h4>
      <BoxTable>
        <List>
          <li>USER ID</li>
          <li>PHASE IMAGE</li>
          <li>PLANT NAME</li>
          <li>PLANT PHASE</li>
          <li>PRICE</li>
          <li>QUANTITY</li>
          <li>WEIGHT</li>
          <li>PLANT ID</li>
          <li>INVOICE ID</li>
        </List>
        {dataOrderItem.map((data, index) => (
          <ListData key={index}>
            {/* <li>{data.pk_cart_id}</li> */}
            <li>{data.fk_user_id}</li>
            <li>{data.phase_image}</li>
            <li>{data.plant_name}</li>
            <li>{data.plant_phase}</li>
            <li>{data.price}</li>
            <li>{data.quantity}</li>
            <li>{data.weight}</li>
            <li>{data.fk_plant_id === null ? data.fk_plant_id : 'not yet'}</li>
            <li>{data.fk_invoice_id}</li>
          </ListData>
        ))}
      </BoxTable>
    </Container>
  );
};

export default Contact;
