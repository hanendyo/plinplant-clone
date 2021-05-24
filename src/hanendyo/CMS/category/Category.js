import React, { useEffect, useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { useContext } from "react";
import { ContextStore } from "../../../context/store/ContextStore";
import { categoryPost, cmsAction } from "../../../context/actions/CmsAction";
import axios from "axios";
import "../CMS.css";
import { Container, BoxInput } from "./Category-component";
import { DataGrid } from "@material-ui/data-grid";

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
  const [dataCategory, setDataCategory] = useState([
    {
      pk_category_id: "",
      category_name: "",
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);

  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    console.log(`dataCategory: `, dataCategory);
  }, []);

  const url = "http://localhost:5000/input/";
  const endPoint = "city";

  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + "category_get_all_datas")
      .then((res) => {
        if (res.status === 200) {
          console.log(`GET RES DATA DATA: `, res.data.data);
          setDataCategory(res.data.data);
        } else {
          console.log("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // POST
  const categoryPost = async (form) => {
    const data = new FormData();
    console.log(`formdata:`, form);
    data.append("pk_category_id", form.pk_category_id);
    data.append("category_name", form.category_name);

    axios
      .post(url + `${endPoint}_input`, data, {
        headers: {
          "content-type": "multipart/form-data",
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
  const categoryDelete = async (id, index) => {
    await axios
      .delete(url + "category_delete/" + id)
      .then((deleted) => {
        console.log(`DELETED: `, deleted);
        getAllDatasAPI();
      })
      .catch((err) => err);
  };

  // UPDATE
  const categoryUpdate = async (form) => {
    const data = new FormData();
    console.log(`formdata:`, form);
    data.append("pk_category_id", form.pk_category_id);
    data.append("category_name", form.category_name);

    axios
      .put(url + `${endPoint}_input`, data, {
        headers: {
          "content-type": "multipart/form-data",
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

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      categoryUpdate(categoryState);
      setIsUpdate(false);
    } else {
      categoryPost(categoryState);
    }

    setDataCategory([
      {
        ...dataCategory,
        pk_category_id: categoryState.pk_category_id,
        category_name: categoryState.category_name,
      },
    ]);

    clearFormData();

    console.log(`CATEGORY STATE SUBMIT: `, categoryState);
    // console.log(`ARTICLE STATE AUTHOR: `, categoryState.author);
    // console.log(`DATA ARTICLE SUBMIT: `, dataCategory);
    // console.log(`DATA ARTICLE AUTHOR: `, dataCategory.author);
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

    // console.log(`update from dataCategory: `, dataCategory[index]);
    // console.log(`update from dataCategory: `, dataCategory[index]);
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
    <div>
      <Container>
        <h4>Category input</h4>
        <BoxInput>
          <form
            encType="multipart/form-data"
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
        </BoxInput>

        <div>
          <br />
          <h4>Data </h4>
          {dataCategory.map(
            (data, index) => (
              console.log(`data article map: `, dataCategory),
              (
                <ul className="map" key={index}>
                  <li>
                    CATEGORY NAME: <span>{data.category_name}</span>
                  </li>
                  <li>
                    ID: <span>{data.pk_category_id}</span>
                  </li>
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
                  <br />
                </ul>
              )
            )
          )}
        </div>
      </Container>
    </div>
  );
};

export default Category;
