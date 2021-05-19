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
import { categoryPost, cmsAction } from "../../../context/actions/CmsAction";
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

const Category = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { categoryState, categoryDispatch } = context;

  // USE STATE
  const [dataArticle, setDataArticle] = useState([
    {
        pk_category_id: 0,
        category_name: '',
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);

  // USE EFFECT
  useEffect(() => {
    categoryGetAllDatas();
    console.log(`dataArticle: `, dataArticle);
  }, []);

  const url = "http://localhost:5000/input/";

  // GET
  const categoryGetAllDatas = async () => {
    await axios
      .get(url + "category_get_all_datas")
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
  const categoryPost = async (data) => {
    await axios
      .post(url + "category_input", data)
      .then((res) => {
        console.log(res);
        categoryGetAllDatas();
        console.log(`get`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // DELETE
  const categoryDelete = async (id, index) => {
    await axios
      .delete(url + "category_delete/" + id)
      .then((deleted) => {
        console.log(`DELETED: `, deleted);
        categoryGetAllDatas();
      })
      .catch((err) => err);
  };

  // UPDATE
  const categoryUpdate = async (data) => {
    // console.log(`ID ID ID: `, index);
    console.log(`DATA UPDATE: `, data);
    await axios
      .put(url + `category_update`, data)
      .then((res) => {
        console.log(res);
        setIsUpdate(false);
        categoryGetAllDatas();
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
      categoryUpdate(categoryState);
      setIsUpdate(false);
    } else {
      categoryPost(categoryState);
    }
  
    setDataArticle([
      {
        ...dataArticle,
        pk_category_id: categoryState.pk_category_id,
        category_name: categoryState.category_name
      },
    ]);

    clearFormData();

    console.log(`CATEGORY STATE SUBMIT: `, categoryState);
    // console.log(`ARTICLE STATE AUTHOR: `, categoryState.author);
    // console.log(`DATA ARTICLE SUBMIT: `, dataArticle);
    // console.log(`DATA ARTICLE AUTHOR: `, dataArticle.author);
    // console.log(`UPDATED ARTICLE STATE: `, categoryState);
    // console.log(`UPDATED ARTICLE STATE AUTHOR: `, categoryState.author);
  };

  // HANDLE DELETE
  const handleDelete = (id, index) => {
    categoryDelete(id, index);
  };

  // HANDLE UPDATE
  const handleUpdate = (data, index) => {
    // console.log(`index update: `, index);
    // console.log(`data id update: `, data.pk_article_id);
    setIsUpdate(true);
    setIndexUpdate(index);
    categoryDispatch(cmsAction(`category_name`, data.category_name));
    categoryDispatch(cmsAction(`pk_category_id`, data.pk_category_id));
    
    // console.log(`update from dataArticle: `, dataArticle[index]);
    // console.log(`update from dataArticle: `, dataArticle[index]);
    console.log(`update from categoryState: `, categoryState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    categoryDispatch(cmsAction(`category_name`, ""));
    categoryDispatch(cmsAction(`pk_category_id`, ""));
  
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    categoryDispatch(cmsAction(name, value));
  };

  return (
    <div className="cmsForm">
      <h3>Category input</h3>
      <form
        enctype="multipart/form-data"
        className={classes.root}
        onSubmit={(e) => handleSubmit(e)}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={categoryState.category_name}
          name="category_name"
          onChange={(e) => formChange(`category_name`, e.target.value)}
          id="outlined-basic"
          label="Category name"
          variant="outlined"
        />
        <TextField
          value={categoryState.pk_category_id}
          name="pk_category_id"
          onChange={(e) => formChange(`pk_category_id`, e.target.value)}
          id="outlined-basic"
          label="ID (input 1-4)"
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
                <li>CATEGORY NAME: <span>{data.category_name}</span></li>
                <li>ID: <span>{data.pk_category_id}</span></li>
                {
                  <div>
                    <button
                      onClick={() => handleDelete(data.pk_category_id, index)}
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

export default Category;
