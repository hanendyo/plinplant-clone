import React, { useEffect, useState } from "react";
import {
  Button,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { useContext } from "react";
import { ContextStore } from "../../../context/store/ContextStore";
import { cmsAction } from "../../../context/actions/CmsAction";
import axios from "axios";
import "../CMS.css";

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

const Article = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { shippingChargesState, shippingChargesDispatch } = context;

  // USE STATE
  const [dataShippingCharges, setDataShippingCharges] = useState([
    {
      shipping_price: "",
      fk_city_id: "",
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);

  // USE EFFECT
  useEffect(() => {
    getAllDataAPI();
    console.log(`dataShippingCharges: `, dataShippingCharges);
  }, []);

  const url = "http://localhost:5000/input/";
  const endPoint = "shipping_charges";

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

  // POST
  const postAPI = async (form) => {
    const data = new FormData();
    console.log(`formdata:`, form);
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
  const updateAPI = async (form) => {
    console.log(`DATA UPDATE: `, data);
    const data = new FormData();
    console.log(`formdata:`, form);
    data.append("shipping_price", form.shipping_price);
    data.append("fk_city_id", form.fk_city_id);

    axios
      .put(url + endPoint + `_update`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
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
    setIsUpdate(true);
    setIndexUpdate(index);
    shippingChargesDispatch(cmsAction(`shipping_price`, data.shipping_price));
    shippingChargesDispatch(cmsAction(`fk_city_id`, data.fk_city_id));
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
    <div className="cmsForm">
      <h3>Shipping charges input</h3>
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
        <TextField
          value={shippingChargesState.fk_city_id}
          onChange={(e) => formChange("fk_city_id", e.target.value)}
          name="fk_city_id"
          id="outlined-basic"
          label="City_ID"
          variant="outlined"
        />

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          {isUpdate ? "Update" : "Submit"}
        </Button>
        {isUpdate && (
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => handleCancel()}
          >
            Cancel
          </Button>
        )}
      </form>
      <div>
        <br />
        <h3>Result: </h3>
        {dataShippingCharges.map(
          (data, index) => (
            console.log(`data article map: `, dataShippingCharges),
            (
              <ul className="map" key={index}>
                <li>
                  NO: <span>{index + 1}</span>
                </li>
                <li>
                 SHIPPING PRICE ID: <span>{data.pk_shipping_charges_id}</span>
                </li>
                <li>
                  SHIPPING PRICE: <span>{data.shipping_price}</span>
                </li>
                {
                  <div>
                    <button
                      onClick={() => handleDelete(data.pk_shipping_charges_id, index)}
                    >
                      delete
                    </button>
                    <button onClick={() => handleUpdate(data, index)}>
                      Update
                    </button>
                    <br />
                  </div>
                }
              </ul>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Article;
