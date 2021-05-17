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
  const { genderState, genderDispatch } = context;

  // USE STATE
  const [dataArticle, setDataArticle] = useState([
    {
        type: ''
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
  const endPoint = 'gender'
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
      updateAPI(genderState);
      setIsUpdate(false);
    } else {
      postAPI(genderState);
    }
  
    setDataArticle([
      {
        ...dataArticle,
        type: genderState.type
      },
    ]);

    clearFormData();

    console.log(`GENDER STATE SUBMIT: `, genderState);
    // console.log(`ARTICLE STATE AUTHOR: `, genderState.author);
    // console.log(`DATA ARTICLE SUBMIT: `, dataArticle);
    // console.log(`DATA ARTICLE AUTHOR: `, dataArticle.author);
    // console.log(`UPDATED ARTICLE STATE: `, genderState);
    // console.log(`UPDATED ARTICLE STATE AUTHOR: `, genderState.author);
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
    genderDispatch(cmsAction(`type`, data.type));
    
    // console.log(`update from dataArticle: `, dataArticle[index]);
    // console.log(`update from dataArticle: `, dataArticle[index]);
    console.log(`update from genderState: `, genderState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    genderDispatch(cmsAction(`type`, ''));
  
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    genderDispatch(cmsAction(name, value));
  };

  return (
    <div className="cmsForm">
      <h3>Gender input</h3>
      <form
        enctype="multipart/form-data"
        className={classes.root}
        onSubmit={(e) => handleSubmit(e)}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={genderState.type}
          name="type"
          onChange={(e) => formChange(`type`, e.target.value)}
          id="outlined-basic"
          label="Gender Type"
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
                <li>CONTACT ID: <span>{data.pk_gender_id}</span></li>
                <li>GENDER TYPE: <span>{data.type}</span></li>
                {
                  <div>
                    <button
                      onClick={() => handleDelete(data.pk_gender_id, index)}
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
