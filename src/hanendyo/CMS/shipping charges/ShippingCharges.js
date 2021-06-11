import React, { useEffect, useState } from "react";
import {
  Button,
  makeStyles,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { useContext } from "react";
import { ContextStore } from "../../../context/store/ContextStore";
import { cmsAction } from "../../../context/actions/CmsAction";
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
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  },
}));

const ShippingCharges = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { shippingChargesState, shippingChargesDispatch, cmsSidebarState } =
    context;

  // USE STATE
  const [dataShippingCharges, setDataShippingCharges] = useState([
    {
      shipping_price: "",
      fk_city_id: "",
    },
  ]);

  const [dataCity, setDataCity] = useState([
    {
      city_name: "",
    },
  ]);

  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);

  // USE EFFECT
  useEffect(() => {
    getAllDataAPI();
    getCityData();
    console.log(`dataShippingCharges: `, dataShippingCharges);
    console.log(`city Data: `, dataCity);
  }, []);

  const url = "http://localhost:5000/input/";
  const endPoint = "shipping_charges";
  // CITY DROPDOWN
  const cityDropdown = "city";

  // GET
  const getAllDataAPI = async () => {
    await axios
      .get(url + endPoint + "_get_all_datas")
      .then((res) => {
        if (res.status === 200) {
          console.log(`GET RES DATA DATA: `, res.data.data);
          setDataShippingCharges(res.data.data);
        } else {
          console.log("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // CITY FOR DROPDOWN
  const getCityData = async () => {
    await axios
      .get(url + cityDropdown + "_get_all_datas")
      .then((res) => {
        if (res.status === 200) {
          console.log(`GET RES DATA DATA: `, res.data.data);
          setDataCity(res.data.data);
        } else {
          console.log("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // POST
  const postAPI = async (form) => {
    const data = new FormData();
    data.append("shipping_price", form.shipping_price);
    data.append("fk_city_id", form.fk_city_id);
    axios
      .post(url + endPoint + `_input`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        getAllDataAPI();
        console.log(`Shipping charges successfuly created!`);
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
  const deleleAPI = async (id, index) => {
    await axios
      .delete(url + endPoint + "_delete/" + id)
      .then((deleted) => {
        console.log(`DELETED: `, deleted);
        getAllDataAPI();
      })
      .catch((err) => err);
  };

  // UPDATE
  const updateAPI = async (data) => {
    console.log(`DATA UPDATE: `, data);
    axios
      .put(url + endPoint + `_update`, data)
      .then((res) => {
        getAllDataAPI();
        console.log(`Shipping charges successfuly updated!`);
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
      updateAPI(shippingChargesState);
      setIsUpdate(false);
    } else {
      postAPI(shippingChargesState);
    }

    setDataShippingCharges([
      {
        ...dataShippingCharges,
        shipping_price: shippingChargesState.shipping_price,
        fk_city_id: shippingChargesState.fk_city_id,
      },
    ]);

    clearFormData();

    console.log(`SHIPPING CHARGES STATE SUBMIT: `, shippingChargesState);
  };

  // HANDLE DELETE
  const handleDelete = (id, index) => {
    deleleAPI(id, index);
  };

  // HANDLE UPDATE
  const handleUpdate = (data, index) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsUpdate(true);
    setIndexUpdate(index);
    shippingChargesDispatch(cmsAction(`shipping_price`, data.shipping_price));
    shippingChargesDispatch(cmsAction(`fk_city_id`, data.fk_city_id));
    shippingChargesDispatch(
      cmsAction(`pk_shipping_charges_id`, data.pk_shipping_charges_id)
    );
    console.log(`update from shippingChargesState: `, shippingChargesState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    shippingChargesDispatch(cmsAction(`shipping_price`, ""));
    shippingChargesDispatch(cmsAction(`fk_city_id`, ""));
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    shippingChargesDispatch(cmsAction(name, value));
  };

  return (
    <Container sidebar={cmsSidebarState}>
      <h4>Shipping charges input</h4>
      <BoxForm>
        <form
          encType="multipart/form-data"
          className={classes.root}
          onSubmit={(e) => handleSubmit(e)}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={shippingChargesState.shipping_price}
            name="shipping_price"
            onChange={(e) => formChange(`shipping_price`, e.target.value)}
            id="outlined-basic"
            label="Shipping price"
            variant="outlined"
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="City_ID"> City Name</InputLabel>
            <Select
              value={shippingChargesState.fk_city_id}
              onChange={(e) => formChange("fk_city_id", e.target.value)}
              name="fk_city_id"
              labelId="City_ID"
              id="outlined-basic"
              variant="outlined"
            >
              {dataCity.map((data, index) => (
                <MenuItem value={data.pk_city_id} key={index}>
                  {data.city_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* <TextField
            value={shippingChargesState.fk_city_id}
            onChange={(e) => formChange("fk_city_id", e.target.value)}
            name="fk_city_id"
            id="outlined-basic"
            label="City_ID"
            variant="outlined"
          /> */}
          <ButtonContainer>
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
                style={{
                  marginTop: "20px",
                  backgroundColor: `${colors.green}`,
                }}
              >
                Cancel
              </Button>
            )}
          </ButtonContainer>
        </form>
      </BoxForm>
      <br />
      <h4>SHIPPING CHARGE DATA</h4>
      <BoxTable>
        <List>
          <li>SHIPPING PRICE ID</li>
          <li>PRICE</li>
          <li>CITY</li>
          <li>ACTION</li>
        </List>
        {dataShippingCharges.map((data, index) => (
          <ListData key={index}>
            <li>{data.pk_shipping_charges_id}</li>
            <li>{data.shipping_price}</li>
            <li>{data.fk_city_id}</li>
            {
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
                  onClick={() =>
                    handleDelete(data.pk_shipping_charges_id, index)
                  }
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="delete"
                  style={{ backgroundColor: `${colors.green}` }}
                >
                  delete
                </Button>
                <br />
              </ButtonList>
            }
          </ListData>
          // (
          //   <ul className="map" key={index}>
          //     <li>
          //      SHIPPING PRICE ID: <span>{data.pk_shipping_charges_id}</span>
          //     </li>
          //     <li>
          //       SHIPPING PRICE: <span>{data.shipping_price}</span>
          //     </li>
          //     <li>
          //       CITY_ID: <span>{data.fk_city_id}</span>
          //     </li>
          //     {
          //       <div>
          //         <button
          //           onClick={() => handleDelete(data.pk_shipping_charges_id, index)}
          //         >
          //           delete
          //         </button>
          //         <button onClick={() => handleUpdate(data, index)}>
          //           Update
          //         </button>
          //         <br />
          //       </div>
          //     }
          //   </ul>
          // )
        ))}
      </BoxTable>
    </Container>
  );
};

export default ShippingCharges;
