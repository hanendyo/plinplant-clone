import React, { useEffect, useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
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
  const [dataPlantBreeding, setDataPlantBreeding] = useState([
    {
      seed: "",
      tuber: "",
      young: "",
      mature: "",
      seed_image: "",
      tuber_image: "",
      young_image: "",
      mature_image: "",
      fk_plant_id: "",
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);
  const [fileImage, setFileImage] = useState([]);
  const [imageUpload, setImageUpload] = useState([])

  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    console.log(`dataPlantBreeding: `, dataPlantBreeding);
  }, []);

  const url = "http://localhost:5000/input/";
  const endPoint = "plant_breeding";
  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + `${endPoint}_get_all_datas`)
      .then((res) => {
        if (res.status === 200) {
          console.log(`GET RES DATA DATA: `, res.data.data);
          setDataPlantBreeding(res.data.data);
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
    console.log(`DATA POST: `, form);
    const data = new FormData();
    console.log(`formdata:`, form);
    data.append("seed", form.seed);
    data.append("tuber", form.tuber);
    data.append("young", form.young);
    data.append("mature", form.mature);
    data.append("seed_image", form.seed_image);
    data.append("seed_image_upload", imageUpload[0]);
    data.append("tuber_image", form.tuber_image);
    data.append("tuber_image_upload", imageUpload[1]);
    data.append("young_image", form.young_image);
    data.append("young_image_upload", imageUpload[2]);
    data.append("mature_image", form.mature_image);
    data.append("mature_image_upload", imageUpload[3]);

    axios
      .post(url + `${endPoint}_input`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        getAllDatasAPI();
        console.log(`Plant breeding successfuly created!`);
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
        console.log(`Plant breeding successfuly updated!`);
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
      updateAPI(plantBreedingState);
      setIsUpdate(false);
    } else {
      postAPI(plantBreedingState);
    }

    setDataPlantBreeding([
      {
        ...dataPlantBreeding,
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

    console.log(`PLANT BREEDING STATE SUBMIT: `, plantBreedingState);
  };

  // HANDLE DELETE
  const handleDelete = (id, index) => {
    deleteAPI(id, index);
  };

  // HANDLE UPDATE
  const handleUpdate = (data, index) => {
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

  const formImage = async (e) => {
    const img = e.target.files[0];
    const imgName = e.target.files[0].name
    const name = e.target.name;
    await setFileImage((fileImage) => [...fileImage, URL.createObjectURL(img)]);
    await setImageUpload((imageUpload) => [...imageUpload,(img)]);
    plantBreedingDispatch(cmsAction(name, imgName));
    console.log(`IMG UPLOAD: `, imageUpload);
  };

  return (
    <div className="cmsForm">
      <h3>Plant breeding input</h3>
      <form
        encType="multipart/form-data"
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
        {/* ----- IMAGE ----- */}
        <span>Pick seed image:</span>
        <input name="seed_image" type="file" onChange={(e) => formImage(e)} />
        <img src={fileImage[0]} alt="" />
        {/* ----- IMAGE ----- */}
        {/* ----- IMAGE ----- */}
        <span>Pick tuber image:</span>
        <input name="tuber_image" type="file" onChange={(e) => formImage(e)} />
        <img src={fileImage[1]} alt="" />
        {/* ----- IMAGE ----- */}
        {/* ----- IMAGE ----- */}
        <span>Pick young image:</span>
        <input name="young_image" type="file" onChange={(e) => formImage(e)} />
        <img src={fileImage[2]} alt="" />
        {/* ----- IMAGE ----- */}
        {/* ----- IMAGE ----- */}
        <span>Pick mature image:</span>
        <input name="mature_image" type="file" onChange={(e) => formImage(e)} />
        <img src={fileImage[3]} alt="" />
        {/* ----- IMAGE ----- */}
        <TextField
          value={plantBreedingState.fk_plant_id}
          name="fk_plant_id"
          onChange={(e) => formChange(`fk_plant_id`, e.target.value)}
          id="outlined-basic"
          label="Category_id"
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
        {dataPlantBreeding.map(
          (data, index) => (
            console.log(`data article map: `, dataPlantBreeding),
            (
              <ul className="map" key={index}>
                <li>
                  PLANT ID: <span>{data.pk_plant_breeding_id}</span>
                </li>
                <li>
                  SEED: <span>{data.seed}</span>
                </li>
                <li>
                  TUBER: <span>{data.tuber}</span>
                </li>
                <li>
                  YOUNG: <span>{data.young}</span>
                </li>
                <li>
                  MATURE: <span>{data.mature}</span>
                </li>
                <li></li>
                {
                  <div>
                    <button
                      onClick={() =>
                        handleDelete(data.pk_plant_breeding_id, index)
                      }
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
