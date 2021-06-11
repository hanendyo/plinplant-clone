import React, { useEffect, useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { useContext } from "react";
import { ContextStore } from "../../../context/store/ContextStore";
import { cmsAction } from "../../../context/actions/CmsAction";
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

const Weight = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { weightState, weightDispatch, cmsSidebarState } = context;

  // USE STATE
  const [dataWeight, setDataWeight] = useState([
    {
      seed_weight: '',
      tuber_weight: '',
      young_weight: '',
      mature_weight: '', 
      fk_plant_breeding_id: '', 
      fk_price_list_id: ''
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);

  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    console.log(`dataWeight: `, dataWeight);
  }, []);

  const url = "http://localhost:5000/input/";
  const endPoint = "weight";
  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + `${endPoint}_get_all_datas`)
      .then((res) => {
        if (res.status === 200) {
          console.log(`GET RES DATA DATA: `, res.data.data);
          setDataWeight(res.data.data);
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
    data.append(`seed_weight`, form.seed_weight);
    data.append(`tuber_weight`, form.tuber_weight);
    data.append(`young_weight`, form.young_weight);
    data.append(`mature_weight`, form.mature_weight);
    data.append(`fk_plant_breeding_id`, form.fk_plant_breeding_id);
    data.append(`fk_price_list_id`, form.fk_price_list_id);
    axios
      .post(url + `${endPoint}_input`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        getAllDatasAPI();
        console.log(`Weight successfuly created!`);
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
      .delete(url + `${endPoint}_delete/` + id)
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
        console.log(`Weight successfuly created!`);
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
      updateAPI(weightState);
      setIsUpdate(false);
    } else {
      postAPI(weightState);
    }

    setDataWeight([
      {
        ...dataWeight,
        seed_weight: weightState.seed_weight,
        tuber_weight: weightState.tuber_weight,
        young_weight: weightState.young_weight,
        mature_weight: weightState.mature_weight,
        fk_plant_breeding_id: weightState.fk_plant_breeding_id,
        fk_price_list_id: weightState.fk_price_list_id,
      },
    ]);

    clearFormData();

    console.log(`WEIGHT STATE SUBMIT: `, weightState);
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
    weightDispatch(cmsAction(`seed_weight`, data.seed_weight));
    weightDispatch(cmsAction(`tuber_weight`, data.tuber_weight));
    weightDispatch(cmsAction(`young_weight`, data.young_weight));
    weightDispatch(cmsAction(`mature_weight`, data.mature_weight));
    weightDispatch(cmsAction(`fk_plant_breeding_id`, data.fk_plant_breeding_id));
    weightDispatch(cmsAction(`fk_price_list_id`, data.fk_price_list_id));
    weightDispatch(cmsAction(`pk_weight_id`, data.pk_weight_id));

    console.log(`update from weightState: `, weightState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    weightDispatch(cmsAction(`seed_weight`, ''));
    weightDispatch(cmsAction(`tuber_weight`, ''));
    weightDispatch(cmsAction(`young_weight`, ''));
    weightDispatch(cmsAction(`mature_weight`, ''));
    weightDispatch(cmsAction(`fk_plant_breeding_id`, ''));
    weightDispatch(cmsAction(`fk_price_list_id`, ''));
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    weightDispatch(cmsAction(name, value));
  };

  return (
    <Container sidebar={cmsSidebarState}>
      <h4>WEIGHT INPUT</h4>
      <BoxForm>
        <form
          encweight="multipart/form-data"
          className={classes.root}
          onSubmit={(e) => handleSubmit(e)}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={weightState.seed_weight}
            name="seed_weight"
            onChange={(e) => formChange(`seed_weight`, e.target.value)}
            id="outlined-basic"
            label="seed_Weight"
            variant="outlined"
          />
          <TextField
            value={weightState.tuber_weight}
            name="tuber_weight"
            onChange={(e) => formChange(`tuber_weight`, e.target.value)}
            id="outlined-basic"
            label="tuber_Weight"
            variant="outlined"
          />
          <TextField
            value={weightState.young_weight}
            name="young_weight"
            onChange={(e) => formChange(`young_weight`, e.target.value)}
            id="outlined-basic"
            label="young_Weight"
            variant="outlined"
          />
          <TextField
            value={weightState.mature_weight}
            name="mature_weight"
            onChange={(e) => formChange(`mature_weight`, e.target.value)}
            id="outlined-basic"
            label="mature_Weight"
            variant="outlined"
          />
          <TextField
            value={weightState.fk_plant_breeding_id}
            name="fk_plant_breeding_id"
            onChange={(e) => formChange(`fk_plant_breeding_id`, e.target.value)}
            id="outlined-basic"
            label="fk_plant_breeding_id"
            variant="outlined"
          />
          <TextField
            value={weightState.fk_price_list_id}
            name="fk_price_list_id"
            onChange={(e) => formChange(`fk_price_list_id`, e.target.value)}
            id="outlined-basic"
            label="fk_price_list_id"
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
      <h4>WEIGHT DATA</h4>
      <BoxTable>
        <List>
          <li>WEIGHT ID</li>
          <li>SEED WEIGHT</li>
          <li>TUBER WEIGHT</li>
          <li>YOUNG WEIGHT</li>
          <li>MATURE WEIGHT</li>
          <li>PLANT BREEDING ID</li>
          <li>PRICE LIST ID</li>
          <li>ACTION</li>
        </List>
        {dataWeight.map((data, index) => (
          <ListData key={index}>
            <li>{data.pk_weight_id}</li>
            <li>{data.seed_weight}</li>
            <li>{data.tuber_weight}</li>
            <li>{data.young_weight}</li>
            <li>{data.mature_weight}</li>
            <li>{data.fk_plant_breeding_id}</li>
            <li>{data.fk_price_list_id}</li>
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
                onClick={() => handleDelete(data.pk_weight_id, index)}
                className={classes.button}
                variant="contained"
                color="primary"
                type="delete"
                style={{ backgroundColor: `${colors.green}` }}
              >
                delete
              </Button>
            </ButtonList>
          </ListData>
          // <ul className='map' key={index}>
          //   <li>WEIGHT ID: <span>{data.pk_weight_id}</span></li>
          //   <li>WEIGHT: <span>{data.weight}</span></li>
          //   {
          //     <div>
          //       <button
          //         onClick={() => handleDelete(data.pk_weight_id, index)}
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
        ))}
      </BoxTable>
    </Container>
  );
};

export default Weight;
