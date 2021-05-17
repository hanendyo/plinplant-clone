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

const Contact = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { contactState, contactDispatch } = context;

  // USE STATE
  const [dataArticle, setDataArticle] = useState([
    {
        recipient_name: '',
        address: '',
        phone_number: '',
        fk_city_id: ''
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
  const endPoint = 'contact'
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
      updateAPI(contactState);
      setIsUpdate(false);
    } else {
      postAPI(contactState);
    }
  
    setDataArticle([
      {
        ...dataArticle,
        recipient_name: contactState.recipient_name,
        address: contactState.address,
        phone_number: contactState.phone_number,
        fk_city_id: contactState.fk_city_id
      },
    ]);

    clearFormData();

    console.log(`CONTACT STATE SUBMIT: `, contactState);
    // console.log(`ARTICLE STATE AUTHOR: `, contactState.author);
    // console.log(`DATA ARTICLE SUBMIT: `, dataArticle);
    // console.log(`DATA ARTICLE AUTHOR: `, dataArticle.author);
    // console.log(`UPDATED ARTICLE STATE: `, contactState);
    // console.log(`UPDATED ARTICLE STATE AUTHOR: `, contactState.author);
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
    contactDispatch(cmsAction(`recipient_name`, data.recipient_name));
    contactDispatch(cmsAction(`address`, data.address));
    contactDispatch(cmsAction(`phone_number`, data.phone_number));
    contactDispatch(cmsAction(`fk_city_id`, data.fk_city_id));
    
    // console.log(`update from dataArticle: `, dataArticle[index]);
    // console.log(`update from dataArticle: `, dataArticle[index]);
    console.log(`update from contactState: `, contactState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    contactDispatch(cmsAction(`recipient_name`, ""));
    contactDispatch(cmsAction(`address`, ''));
    contactDispatch(cmsAction(`phone_number`,''));
    contactDispatch(cmsAction(`fk_city_id`, ''));
  
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    contactDispatch(cmsAction(name, value));
  };

  return (
    <div className="cmsForm">
      <h3>Contact input</h3>
      <form
        enctype="multipart/form-data"
        className={classes.root}
        onSubmit={(e) => handleSubmit(e)}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={contactState.recipient_name}
          name="recipient_name"
          onChange={(e) => formChange(`recipient_name`, e.target.value)}
          id="outlined-basic"
          label="Recipient name"
          variant="outlined"
        />
        <TextField
          value={contactState.address}
          name="address"
          onChange={(e) => formChange(`address`, e.target.value)}
          id="outlined-basic"
          label="Address"
          variant="outlined"
        />
        <TextField
          value={contactState.phone_number}
          name="phone_number"
          onChange={(e) => formChange(`phone_number`, e.target.value)}
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
        />
        <TextField
          value={contactState.fk_city_id}
          name="fk_city_id"
          onChange={(e) => formChange(`fk_city_id`, e.target.value)}
          id="outlined-basic"
          label="City ID"
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
                <li>CONTACT ID: <span>{data.pk_contact_id}</span></li>
                <li>RECIPIENT NAME: <span>{data.recipient_name}</span></li>
                <li>ADDRESS: <span>{data.address}</span></li>
                <li>PHONE NUMBER: <span>{data.recipient_name}</span></li>
                <li>CITY ID: <span>{data.fk_city_id}</span></li>
                {
                  <div>
                    <button
                      onClick={() => handleDelete(data.pk_contact_id, index)}
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

export default Contact;
