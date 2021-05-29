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
  const { genderState, genderDispatch } = context;

  // USE STATE
  const [dataGender, setDataGender] = useState([
    {
        pk_gender_id: '',
        type: '',
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);

  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    console.log(`dataGender: `, dataGender);
  }, []);

  const url = "http://localhost:5000/input/";
  const endPoint = 'gender'

  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + endPoint + "_get_all_datas")
      .then((res) => {
        console.log(`GET RES DATA DATA: `, res.data.data);
        setDataGender(res.data.data);
        // if (res.status === 200) {
        // } else {
        //   console.log("Error");
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // POST
  const postAPI = async (form) => {
    const data = new FormData();
    console.log(`formdata:`, form);
    data.append("pk_gender_id", form.pk_gender_id);
    data.append("type", form.type);

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
    // await axios.post(url + endPoint + '_input', form)
    // .then((res)=>{
    //   getAllDatasAPI();
    //   console.log(res);
    // })
    // .catch(err=> {
    //   console.log(err);
    // })
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
        console.log(`Category successfuly updated!`);
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
      updateAPI(genderState);
      setIsUpdate(false);
    } else {
      postAPI(genderState);
    }
  
    setDataGender([
      {
        ...dataGender,
        pk_gender_id: genderState.pk_gender_id,
        type: genderState.type
      },
    ]);

    clearFormData();

    console.log(`CATEGORY STATE SUBMIT: `, genderState);
  };

  // HANDLE DELETE
  const handleDelete = (id, index) => {
    deleteAPI(id, index);
  };

  // HANDLE UPDATE
  const handleUpdate = (data, index) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsUpdate(true);
    setIndexUpdate(index);
    genderDispatch(cmsAction(`type`, data.type));
    genderDispatch(cmsAction(`pk_gender_id`, data.pk_gender_id));
    console.log(`update from genderState: `, genderState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    genderDispatch(cmsAction(`type`, ""));
    genderDispatch(cmsAction(`pk_gender_id`, ""));
  
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    genderDispatch(cmsAction(name, value));
  };

  return (
    <Container>
      <h4>GENDER INPUT</h4>
      <BoxForm>
      <form
        encType="multipart/form-data"
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
          label="Gender name"
          variant="outlined"
        />
        
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          style = {{backgroundColor:`${colors.green}`}}
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
      </form>
      </BoxForm>
      <br />
        <h4>GENDER DATA</h4>
      <BoxTable>
      <List>
          <li>GENDER ID</li>
          <li>GENDER NAME</li>
          <li>ACTION</li>
        </List>
        {dataGender.map(
          (data, index) => (
            <ListData key={index}>
              <li>{data.pk_gender_id}</li>
              <li>{data.type}</li>
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
                  onClick={() => handleDelete(data.pk_gender_id, index)}
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="delete"
                  style={{backgroundColor:`${colors.green}`}}
                  >
                  
                  delete
                </Button>
                
              </ButtonList>
            </ListData>
          )
        )}
      </BoxTable>
    </Container>
  );
};

export default Category;
