import React, { useEffect, useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { useContext } from "react";
import { ContextStore } from "../../../context/store/ContextStore";
import { postAPI, cmsAction } from "../../../context/actions/CmsAction";
import axios from "axios";
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
} from "../style/Form";
import { colors } from "../../../master/constant/style";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
    },
    button: {
      width: "80%",
      margin: "5px 0",
      backgroundColor: "rgb(187, 203, 194)",
      color: "primary",
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
      pk_cart_id: '',
      phase_image: '',
      plant_name: '',
      plant_phase: '',
      price: '',
      quantity: '',
      weight: '',
      fk_plant_id: '',
      fk_user_id: '',
      fk_invoice_id: ''
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);
  const {userLoginState} = useContext(ContextStore)
  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    console.log(`dataOrderItem: `, dataOrderItem);
  }, []);

  const url = "http://localhost:5000/input/";
  const endPoint = "cart";
  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + `${endPoint}/user/${userLoginState.pk_user_id}`)
      .then((res) => {
        setDataOrderItem(res.data.data);
        console.log(`GET RES DATA DATA: `, res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // POST
  // const postAPI = async (form) => {
  //   const data = new FormData();
  //   console.log(`formdata:`, form);
  //   data.append("phase_image", form.phase_image);
  //   data.append("plant_name", form.plant_name);
  //   data.append("plant_phase", form.plant_phase);
  //   data.append("price", form.price);
  //   data.append("quantity", form.quantity);
  //   data.append("weight", form.weight);
  //   data.append("fk_plant_id", form.fk_plant_id);
  //   data.append("fk_user_id", form.fk_user_id);
  //   data.append("fk_invoice_id", form.fk_invoice_id);
  //   data.append("pk_cart_id", form.pk_cart_id);

  //   axios
  //     .post(url + `${endPoint}_input`, data, {
  //       headers: {
  //         "content-type": "multipart/form-data",
  //       },
  //     })
  //     .then((res) => {
  //       getAllDatasAPI();
  //       console.log(`Order item successfuly created!`);
  //       console.log(res);
  //       return res;
  //     })
  //     .catch((err) => {
  //       console.log(`ERROR!`);
  //       console.log(err);
  //       return err;
  //     });
  // };

  // DELETE
  // const deleteAPI = async (id, index) => {
  //   await axios
  //     .delete(url + `${endPoint}_delete/` + id)
  //     .then((deleted) => {
  //       console.log(`DELETED: `, deleted);
  //       getAllDatasAPI();
  //     })
  //     .catch((err) => err);
  // };

  // UPDATE
  // const updateAPI = async (data) => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  //   axios
  //     .put(url + `${endPoint}_update`, data)
  //     .then((res) => {
  //       getAllDatasAPI();
  //       console.log(`Order item successfuly updated!`);
  //       console.log(res);
  //       return res;
  //     })
  //     .catch((err) => {
  //       console.log(`ERROR!`);
  //       console.log(err);
  //       return err;
  //     });
  // };

  // // HANDLE SUBMIT
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (isUpdate) {
  //     updateAPI(orderItemState);
  //     setIsUpdate(false);
  //   } else {
  //     postAPI(orderItemState);
  //   }

  //   setDataOrderItem([
  //     {
  //       ...dataOrderItem,
  //       quantity: orderItemState.quantity,
  //       pk_cart_id: orderItemState.pk_cart_id,
  //       phase_image: orderItemState.phase_image,
  //       plant_name: orderItemState.plant_name,
  //       plant_phase: orderItemState.plant_phase,
  //       price: orderItemState.price,
  //       quantity: orderItemState.quantity,
  //       weight: orderItemState.weight,
  //       fk_plant_id: orderItemState.fk_plant_id,
  //       fk_user_id: orderItemState.fk_user_id,
  //       fk_invoice_id: orderItemState.fk_invoice_id,
  //       pk_cart_id: orderItemState.pk_cart_id
  //     },
  //   ]);

  //   clearFormData();

  //   console.log(`CONTACT STATE SUBMIT: `, orderItemState);
  // };

  // // HANDLE DELETE
  // const handleDelete = (id, index) => {
  //   deleteAPI(id, index);
  // };

  // // HANDLE UPDATE
  // const handleUpdate = (data, index) => {
  //   console.log(`data id update: `, data.pk_order_item_id);
  //   setIsUpdate(true);
  //   setIndexUpdate(index);
  //   // orderItemDispatch(cmsAction(`pk_cart_id`, data.pk_cart_id));
  //   orderItemDispatch(cmsAction(`phase_image`, data.phase_image));
  //   orderItemDispatch(cmsAction(`plant_image`, data.plant_image));
  //   orderItemDispatch(cmsAction(`plant_phase`, data.plant_phase));
  //   orderItemDispatch(cmsAction(`price`, data.price));
  //   orderItemDispatch(cmsAction(`quantity`, data.quantity));
  //   orderItemDispatch(cmsAction(`weight`, data.weight));
  //   orderItemDispatch(cmsAction(`fk_plant_id`, data.fk_plant_id));
  //   orderItemDispatch(cmsAction(`fk_user_id`, data.fk_user_id));
  //   orderItemDispatch(cmsAction(`fk_invoice_id`, data.fk_invoice_id));

  //   console.log(`update from orderItemState: `, orderItemState);
  // };

  // // HANDLE CANCEL
  // const handleCancel = () => {
  //   clearFormData();
  //   setIsUpdate(false);
  // };

  // // CLEAR FORM
  // const clearFormData = () => {
  //   orderItemDispatch(cmsAction(`phase_image`,''));
  //   orderItemDispatch(cmsAction(`plant_image`, ''));
  //   orderItemDispatch(cmsAction(`plant_phase`, ''));
  //   orderItemDispatch(cmsAction(`price`, ''));
  //   orderItemDispatch(cmsAction(`quantity`, ''));
  //   orderItemDispatch(cmsAction(`weight`, ''));
  //   orderItemDispatch(cmsAction(`fk_plant_id`, ''));
  //   orderItemDispatch(cmsAction(`fk_user_id`, ''));
  //   orderItemDispatch(cmsAction(`fk_invoice_id`, ''));
  // };

  // FORM CHANGE
  const formChange = (name, value) => {
    orderItemDispatch(cmsAction(name, value));
  };

  return (
    <Container>
      {/* <h4>ORDER ITEM INPUT</h4> */}
      {/* <BoxForm>
        <form
          encType="multipart/form-data"
          className={classes.root}
          onSubmit={(e) => handleSubmit(e)}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={orderItemState.p}
            name="p"
            onChange={(e) => formChange(`p`, e.target.value)}
            id="outlined-basic"
            label="p"
            variant="outlined"
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            style={{ backgroundColor: `${colors.green}` }}
          >
            {isUpdate ? "Update" : "Submit"}
          </Button>
          {isUpdate && (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => handleCancel()}
              style={{ marginTop: "20px", backgroundColor: `${colors.green}` }}
            >
              Cancel
            </Button>
          )}
        </form>
      </BoxForm> */}
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
            {/* {
              <ButtonList>
                <Button
                  onClick={() => handleUpdate(data, index)}
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="update"
                  style={{
                    marginBottom: "10px",
                    backgroundColor: `${colors.green}`,
                  }}
                >
                  Update
                </Button>
                <Button
                  onClick={() => handleDelete(data.pk_order_item_id, index)}
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="delete"
                  style={{ backgroundColor: `${colors.green}` }}
                >
                  delete
                </Button>
              </ButtonList>
            } */}
          </ListData>
        ))}
      </BoxTable>
    </Container>
  );
};

export default Contact;
