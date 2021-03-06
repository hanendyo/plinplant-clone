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

const Category = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { cityState, cityDispatch, cmsSidebarState } = context;

  // USE STATE
  const [dataCity, setDataCity] = useState([
    {
      city_name: "",
      city_code: "",
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);

  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    // console.log(`dataCity: `, dataCity);
  }, []);

  const url = "http://localhost:8081/input/";
  const endPoint = "city";

  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + endPoint + "_get_all_datas")
      .then((res) => {
        // console.log(`GET RES DATA DATA: `, res.data.data);
        setDataCity(res.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  // POST
  const postAPI = async (form) => {
    const data = new FormData();
    // console.log(`formdata:`, form);
    data.append("city_name", form.city_name);
    data.append("city_code", form.city_code);

    axios
      .post(url + endPoint + `_input`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        getAllDatasAPI();
        // console.log(`City successfuly created!`);
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
      .put(url + endPoint + `_update`, data)
      .then((res) => {
        getAllDatasAPI();
        // console.log(`City successfuly updated!`);
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
      updateAPI(cityState);
      setIsUpdate(false);
    } else {
      postAPI(cityState);
    }

    setDataCity([
      {
        ...dataCity,
        city_name: cityState.city_name,
        city_code: cityState.city_code,
      },
    ]);

    clearFormData();

    // console.log(`CATEGORY STATE SUBMIT: `, cityState);
  };

  // HANDLE DELETE
  const handleDelete = (id, index) => {
    deleteAPI(id, index);
  };

  // HANDLE UPDATE
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const handleUpdate = (data, index) => {
    setIsUpdate(true);
    setIndexUpdate(index);
    cityDispatch(cmsAction(`city_name`, data.city_name));
    cityDispatch(cmsAction(`city_code`, data.city_code));
    // console.log(`update from cityState: `, cityState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    cityDispatch(cmsAction(`city_name`, ""));
    cityDispatch(cmsAction(`city_code`, ""));
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    cityDispatch(cmsAction(name, value));
  };

  return (
    <Container sidebar={cmsSidebarState}>
      <h4>CITY INPUT</h4>
      <BoxForm>
        <form
          encType="multipart/form-data"
          className={classes.root}
          onSubmit={(e) => handleSubmit(e)}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={cityState.city_name}
            name="city_name"
            onChange={(e) => formChange(`city_name`, e.target.value)}
            id="outlined-basic"
            label="City name"
            variant="outlined"
          />
          <TextField
            value={cityState.city_code}
            name="city_code"
            onChange={(e) => formChange(`city_code`, e.target.value)}
            id="outlined-basic"
            label="City code"
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
      <h4>CITY DATA</h4>
      <BoxTable>
        <List>
          <li>CITY ID</li>
          <li>CITY NAME</li>
          <li>CITY CODE</li>
          <li>ACTION</li>
        </List>
        {dataCity.map((data, index) => (
          <ListData key={index}>
            <li>{data.pk_city_id}</li>
            <li>{data.city_name}</li>
            <li>{data.city_code}</li>
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
                  onClick={() => handleDelete(data.pk_city_id, index)}
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
