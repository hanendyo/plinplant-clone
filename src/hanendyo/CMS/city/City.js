import React, { useEffect, useState } from "react";
import {
  Button,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { useContext } from "react";
import { ContextStore } from "../../../context/store/ContextStore";
import { postAPI, cmsAction } from "../../../context/actions/CmsAction";
import axios from "axios";
import {TableListPhone,ContentBox, ButtonList, Container, BoxForm, BoxTable,BoxTablePhone, SpanImage, ButtonContainer, ImageBox, List, ListData} from "../style/Form"
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
  const { cityState, cityDispatch } = context;

  // USE STATE
  const [dataCity, setDataCity] = useState([
    {
        city_name: '',
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);

  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    console.log(`dataCity: `, dataCity);
  }, []);

  const url = "http://localhost:5000/input/";
  const endPoint = 'city'

  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + endPoint + "_get_all_datas")
      .then((res) => {
        console.log(`GET RES DATA DATA: `, res.data.data);
        setDataCity(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // POST
  const postAPI = async (form) => {
    const data = new FormData();
    console.log(`formdata:`, form);
    // data.append("pk_city_id", form.pk_city_id);
    data.append("city_name", form.city_name);

    axios
      .post(url + `${endPoint}_input`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        getAllDatasAPI();
        console.log(`City successfuly created!`);
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
  const deleteAPI = async (id, index) => {
    await axios
      .delete(url + endPoint + "_delete/" + id)
      .then((deleted) => {
        console.log(`DELETED: `, deleted);
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
        console.log(`City successfuly updated!`);
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
      updateAPI(cityState);
      setIsUpdate(false);
    } else {
      postAPI(cityState);
    }
  
    setDataCity([
      {
        ...dataCity,
        // pk_city_id: cityState.pk_city_id,
        city_name: cityState.city_name
      },
    ]);

    clearFormData();

    console.log(`CATEGORY STATE SUBMIT: `, cityState);
  };

  // HANDLE DELETE
  const handleDelete = (id, index) => {
    deleteAPI(id, index);
  };

  // HANDLE UPDATE
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  const handleUpdate = (data, index) => {
    setIsUpdate(true);
    setIndexUpdate(index);
    cityDispatch(cmsAction(`city_name`, data.city_name));
    cityDispatch(cmsAction(`pk_city_id`, data.pk_city_id));
    console.log(`update from cityState: `, cityState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    cityDispatch(cmsAction(`city_name`, ""));
    cityDispatch(cmsAction(`pk_city_id`, ""));
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    cityDispatch(cmsAction(name, value));
  };

  return (
    <Container>
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
      <ButtonContainer>
      <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          style={{backgroundColor:`${colors.green}`}}
        >
          {isUpdate ? "Update" : "Submit"}
        </Button>
        {isUpdate && (
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => handleCancel()}
            style = {{marginTop:'20px',backgroundColor:`${colors.green}`}}
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
          <li>NAME</li>
          <li>ACTION</li>
        </List>
        {dataCity.map(
          (data, index) => (
            
            <ListData key={index}>
              <li>{data.pk_city_id}</li>
              <li>{data.city_name}</li>
              {
              <ButtonList>
                <Button 
                  onClick={() => handleUpdate(data, index)}
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="update"
                  style={{marginBottom:"10px", backgroundColor:`${colors.green}`}}
                  >
                  Update
                </Button>
                <Button 
                  onClick={() => handleDelete(data.pk_city_id, index)}
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="delete"
                  style={{backgroundColor:`${colors.green}`}}
                  >
                  
                  delete
                </Button>
                
              </ButtonList>
              }
            </ListData>
            
              // <ul className='map' key={index}>
              //   <li>CATEGORY NAME: <span>{data.city_name}</span></li>
              //   <li>CATEGORY ID: <span>{data.pk_city_id}</span></li>
              //   {
              //     <div>
              //       <button
              //         onClick={() => handleDelete(data.pk_city_id, index)}
              //       >
              //         delete
              //       </button>
              //       <button onClick={() => handleUpdate(data, index)}>
              //         Update
              //       </button>
              //       <br />
              //     </div>
              //   }
              //   <br/>
              // </ul>
            
          )
        )}
      </BoxTable>
    </Container>
  );
};

export default Category;
