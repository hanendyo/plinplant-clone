import React, { useEffect, useState } from "react";
import {
  Button,
  makeStyles,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
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

const Category = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { categoryState, categoryDispatch, cmsSidebarState } = context;

  // USE STATE
  const [dataCategory, setDataCategory] = useState([
    {
      category_name: "",
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);

  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    // console.log(`dataCategory: `, dataCategory);
  }, []);

  const url = "http://localhost:8081/input/";
  const endPoint = "category";

  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + endPoint + "_get_all_datas")
      .then((res) => {
        // console.log(`GET RES DATA DATA: `, res.data.data);
        setDataCategory(res.data.data);
        // if (res.status === 200) {
        // } else {
        // console.log("Error");
        // }
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  // POST
  const postAPI = async (form) => {
    const data = new FormData();
    // console.log(`formdata:`, form);
    // data.append("pk_category_id", form.pk_category_id);
    data.append("category_name", form.category_name);

    axios
      .post(url + `${endPoint}_input`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        getAllDatasAPI();
        // console.log(`Category successfuly created!`);
        // console.log(res);
        return res;
      })
      .catch((err) => {
        // console.log(`ERROR!`);
        // console.log(err);
        return err;
      });
  };

  // DELETE
  const deleteAPI = async (id, index) => {
    await axios
      .delete(url + endPoint + "_delete/" + id)
      .then((deleted) => {
        // console.log(`DELETED: `, deleted);
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
        // console.log(`Category successfuly updated!`);
        // console.log(res);
        return res;
      })
      .catch((err) => {
        // console.log(`ERROR!`);
        // console.log(err);
        return err;
      });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      updateAPI(categoryState);
      setIsUpdate(false);
    } else {
      postAPI(categoryState);
    }

    setDataCategory([
      {
        ...dataCategory,
        pk_category_id: categoryState.pk_category_id,
        category_name: categoryState.category_name,
      },
    ]);

    clearFormData();

    // console.log(`CATEGORY STATE SUBMIT: `, categoryState);
  };

  // HANDLE DELETE
  const handleDelete = (id, index) => {
    deleteAPI(id, index);
  };

  // HANDLE UPDATE
  const handleUpdate = (data, index) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsUpdate(true);
    setIndexUpdate(index);
    categoryDispatch(cmsAction(`category_name`, data.category_name));
    categoryDispatch(cmsAction(`pk_category_id`, data.pk_category_id));
    // console.log(`update from categoryState: `, categoryState);
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
    <Container sidebar={cmsSidebarState}>
      <h4>CATEGORY INPUT</h4>
      <BoxForm>
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
      <h4>CATEGORY DATA</h4>
      <BoxTable>
        <List>
          <li>CATEGORY ID</li>
          <li>NAME</li>
          <li>ACTION</li>
        </List>
        {dataCategory.map((data, index) => (
          <ListData key={index}>
            <li>{data.pk_category_id}</li>
            <li>{data.category_name}</li>
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
                  onClick={() => handleDelete(data.pk_category_id, index)}
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="delete"
                  style={{ backgroundColor: `${colors.green}` }}
                >
                  delete
                </Button>
              </ButtonList>
            }
          </ListData>
        ))}
      </BoxTable>
    </Container>
  );
};

export default Category;
