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

const PlantBreeding = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { plantBreedingState, plantBreedingDispatch } = context;

  // USE STATE
  const [dataArticle, setDataArticle] = useState([
    {
      seed: "",
      tuber: "",
      young: "",
      mature: "",
      seed_image: "",
      tuber_image: "",
      young_image: "",
      mature_image: "",
      fk_plant_id: 0,
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
  const endPoint = "plant";
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
      updateAPI(plantBreedingState);
      setIsUpdate(false);
    } else {
      postAPI(plantBreedingState);
    }

    setDataArticle([
      {
        ...dataArticle,
        seed: plantBreedingState.seed,
        tuber: plantBreedingState.tuber,
        young: plantBreedingState.young,
        mature: plantBreedingState.mature,
        seed_image: plantBreedingState.seed_image,
        tuber_image: plantBreedingState.tuber_image,
        young_image: plantBreedingState.young_image,
        mature_image: plantBreedingState.mature_image,
        fk_plant_id: plantBreedingState.fk_plant_id,
      },
    ]);

    clearFormData();

    console.log(`PLANT STATE SUBMIT: `, plantBreedingState);
    // console.log(`ARTICLE STATE AUTHOR: `, plantBreedingState.author);
    // console.log(`DATA ARTICLE SUBMIT: `, dataArticle);
    // console.log(`DATA ARTICLE AUTHOR: `, dataArticle.author);
    // console.log(`UPDATED ARTICLE STATE: `, plantBreedingState);
    // console.log(`UPDATED ARTICLE STATE AUTHOR: `, plantBreedingState.author);
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
    plantBreedingDispatch(cmsAction(`seed`, data.seed));
    plantBreedingDispatch(cmsAction(`tuber`, data.tuber));
    plantBreedingDispatch(cmsAction(`young`, data.young));
    plantBreedingDispatch(cmsAction(`mature`, data.mature));
    plantBreedingDispatch(cmsAction(`seed_image`, data.seed_image));
    plantBreedingDispatch(cmsAction(`tuber_image`, data.tuber_image));
    plantBreedingDispatch(cmsAction(`young_image`, data.young_image));
    plantBreedingDispatch(cmsAction(`mature_image`, data.mature_image));
    plantBreedingDispatch(cmsAction(`fk_plant_id`, data.fk_plant_id));

    // console.log(`update from dataArticle: `, dataArticle[index]);
    // console.log(`update from dataArticle: `, dataArticle[index]);
    console.log(`update from plantBreedingState: `, plantBreedingState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    plantBreedingDispatch(cmsAction(`seed`, ""));
    plantBreedingDispatch(cmsAction(`tuber`, ""));
    plantBreedingDispatch(cmsAction(`young`, ""));
    plantBreedingDispatch(cmsAction(`mature`, ""));
    plantBreedingDispatch(cmsAction(`seed_image`, ""));
    plantBreedingDispatch(cmsAction(`tuber_image`, ""));
    plantBreedingDispatch(cmsAction(`young_image`, ""));
    plantBreedingDispatch(cmsAction(`mature_image`, ""));
    plantBreedingDispatch(cmsAction(`fk_plant_id`, ""));
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    plantBreedingDispatch(cmsAction(name, value));
  };

  return (
    <div className="cmsForm">
      <h3>Plant breeding input</h3>
      <form
        enctype="multipart/form-data"
        className={classes.root}
        onSubmit={(e) => handleSubmit(e)}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={plantBreedingState.seed}
          name="seed"
          onChange={(e) => formChange(`seed`, e.target.value)}
          id="outlined-basic"
          label="Seed"
          variant="outlined"
        />
        <TextField
          value={plantBreedingState.tuber}
          name="tuber"
          onChange={(e) => formChange(`tuber`, e.target.value)}
          id="outlined-basic"
          label="Tuber"
          variant="outlined"
        />
        <TextField
          value={plantBreedingState.young}
          name="young"
          onChange={(e) => formChange(`young`, e.target.value)}
          id="outlined-basic"
          label="Young"
          variant="outlined"
        />
        <TextField
          value={plantBreedingState.mature}
          name="mature"
          onChange={(e) => formChange(`mature`, e.target.value)}
          id="outlined-basic"
          label="Plant qualities"
          variant="outlined"
        />
          <p>Seed Image</p>
        <input
          label="Plant image"
          id="image-upload"
          name="image-upload"
          type="file"
          // value={articleState.image}
          onChange={(e) => console.log(`image: `, e.target.files[0])}
          // onChange={(e) => formChange(`image`, e.target.value)}
          // onChan
        />
        <TextField
          value={plantBreedingState.fk_plant_id}
          name="fk_plant_id"
          onChange={(e) => formChange(`fk_plant_id`, e.target.value)}
          id="outlined-basic"
          label="Category_id"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Review_id"
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
              <ul className="map" key={index}>
                <li>
                  PLANT ID: <span>{data.pk_plant_id}</span>
                </li>
                <li>
                  PLANT NAME: <span>{data.seed}</span>
                </li>
                <li>
                  PLANT ORIGIN: <span>{data.young}</span>
                </li>
                <li>
                  PLANT IMAGE: <span>{data.tuber}</span>
                </li>
                <li>
                  PLANT QUALITIES: <span>{data.mature}</span>
                </li>
                <li>
                  PLANT USE: <span>{data.seed_image}</span>
                </li>
                <li>
                  DAYS TO SPROUT: <span>{data.tuber_image}</span>
                </li>
                <li>
                  MATURES IN: <span>{data.young_image}</span>
                </li>
                <li>
                  GROWTH IN: <span>{data.mature_image}</span>
                </li>
                <li>
                  CATEGORY_ID: <span>{data.fk_plant_id}</span>
                </li>
                <li>
                </li>
                {
                  <div>
                    <button
                      onClick={() => handleDelete(data.pk_plant_id, index)}
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
    </div>
  );
};

export default PlantBreeding;
