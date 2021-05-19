import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import { ContextStore } from "../../../context/store/ContextStore";
import { postAPI, cmsAction } from "../../../context/actions/CmsAction";
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

const Order = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { orderState, orderDispatch } = context;

  // USE STATE
  const [dataArticle, setDataArticle] = useState([
    {
        status: '',
        created_at: '',
        fk_user_id: 0
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);

  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    console.log(`dataArticle: `, dataArticle);
  }, []);

  const url = "http://localhost:5000/input/";
  const endPoint = 'order'
  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + `${endPoint}_get_all_datas`)
      .then((res) => {
        if (res.status === 200) {
          console.log(`GET RES DATA DATA: `, res.data.data);
          setDataArticle(res.data.data);
        } else {
          console.log("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // POST
  const postAPI = async (data) => {
    await axios
      .post(url + `${endPoint}_input`, data)
      .then((res) => {
        console.log(res);
        getAllDatasAPI();
        console.log(`get`);
      })
      .catch((err) => {
        console.log(err);
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
    // console.log(`ID ID ID: `, index);
    console.log(`DATA UPDATE: `, data);
    await axios
      .put(url + `${endPoint}_update`, data)
      .then((res) => {
        console.log(res);
        setIsUpdate(false);
        getAllDatasAPI();
        console.log(`update!`);
      })
      .catch((err) => {
        console.log(err);
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
  
    setDataArticle([
      {
        ...dataArticle,
        status: orderState.status,
        created_at: orderState.created_at,
        fk_user_id: orderState.fk_user_id,
      },
    ]);

    clearFormData();

    console.log(`ORDER STATE SUBMIT: `, orderState);
    // console.log(`ARTICLE STATE AUTHOR: `, orderState.author);
    // console.log(`DATA ARTICLE SUBMIT: `, dataArticle);
    // console.log(`DATA ARTICLE AUTHOR: `, dataArticle.author);
    // console.log(`UPDATED ARTICLE STATE: `, orderState);
    // console.log(`UPDATED ARTICLE STATE AUTHOR: `, orderState.author);
  };

  // HANDLE DELETE
  const handleDelete = (id, index) => {
    deleteAPI(id, index);
  };

  // HANDLE UPDATE
  const handleUpdate = (data, index) => {
    // console.log(`index update: `, index);
    // console.log(`data id update: `, data.pk_article_id);
    setIsUpdate(true);
    setIndexUpdate(index);
    orderDispatch(cmsAction(`status`, data.status));
    orderDispatch(cmsAction(`created_at`, data.created_at));
    orderDispatch(cmsAction(`fk_user_id`, data.fk_user_id));
    
    // console.log(`update from dataArticle: `, dataArticle[index]);
    // console.log(`update from dataArticle: `, dataArticle[index]);
    console.log(`update from orderState: `, orderState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    orderDispatch(cmsAction(`status`, ""));
    orderDispatch(cmsAction(`created_at`, ''));
    orderDispatch(cmsAction(`fk_user_id`,''));
  
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    orderDispatch(cmsAction(name, value));
  };

  return (
    <div className="cmsForm">
      <h3>Order input</h3>
      <form
        enctype="multipart/form-data"
        className={classes.root}
        onSubmit={(e) => handleSubmit(e)}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={orderState.status}
          name="status"
          onChange={(e) => formChange(`status`, e.target.value)}
          id="outlined-basic"
          label="Order status"
          variant="outlined"
        />
        <TextField
          value={orderState.created_at}
          name="created_at"
          onChange={(e) => formChange(`created_at`, e.target.value)}
          id="outlined-basic"
          label="Created at"
          variant="outlined"
        />
        <TextField
          value={orderState.fk_user_id}
          name="fk_user_id"
          onChange={(e) => formChange(`fk_user_id`, e.target.value)}
          id="outlined-basic"
          label="User_id"
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
        {dataArticle.map(
          (data, index) => (
            console.log(`data article map: `, dataArticle),
            (
              <ul className='map' key={index}>
                <li>ORDER ID: <span>{data.pk_order_id}</span></li>
                <li>ORDER STATUS: <span>{data.status}</span></li>
                <li>CREATED AT: <span>{data.created_at}</span></li>
                <li>USER_ID: <span>{data.fk_user_id}</span></li>
                {
                  <div>
                    <button
                      onClick={() => handleDelete(data.pk_order_id, index)}
                    >
                      delete
                    </button>
                    <button onClick={() => handleUpdate(data, index)}>
                      Update
                    </button>
                    <br />
                  </div>
                }
                <br/>
              </ul>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Order;
