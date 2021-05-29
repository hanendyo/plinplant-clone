import React, { useEffect, useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { useContext } from "react";
import { ContextStore } from "../../../context/store/ContextStore";
import { postAPI, cmsAction } from "../../../context/actions/CmsAction";
import axios from "axios";
import {TableListPhone,ContentBox, ButtonList, Container, BoxForm, BoxTable,BoxTablePhone, SpanImage, ButtonContainer, ImageBox, List, ListData} from "../style/Form"
import { colors } from "../../../master/constant/style";
import {FaCamera} from "react-icons/fa"

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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
    plantBreedingDispatch(cmsAction(`pk_plant_breeding_id`, data.pk_plant_breeding_id));
    
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
    <Container>
      <h4>PLANT BREEDING INPUT</h4>
      <BoxForm>
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
          label="Mature"
          variant="outlined"
        />
        {/* ----- IMAGE SEED----- */}
        <ImageBox>
          <SpanImage > 
            <h6>Upload Image</h6>
            <img src={fileImage[0]} alt=""/>
          </SpanImage>
        
          <input
            accept="image/*"
            name="seed_image"
            className={classes.input}
            id="seed-file"
            multiple
            type="file"
            onChange={(e) => formImage(e)}
            style={{display:"none"}}
          />
          <label htmlFor="seed-file">
            <Button 
            variant="contained" 
            color="primary" 
            component="span" 
            startIcon={<FaCamera />}
            style={{backgroundColor:`${colors.green}`}}
            >
              UPLOAD SEED
            </Button>
          </label>
        </ImageBox>
        {/* ----- IMAGE SEED----- */}
        {/* ----- IMAGE TUBER----- */}
        <ImageBox>
          <SpanImage > 
            <h6>Upload Image</h6>
            <img src={fileImage[1]} alt=""/>
          </SpanImage>
        
          <input
            accept="image/*"
            name="tuber_image"
            className={classes.input}
            id="tuber-file"
            multiple
            type="file"
            onChange={(e) => formImage(e)}
            style={{display:"none"}}
          />
          <label htmlFor="tuber-file">
            <Button 
            variant="contained" 
            color="primary" 
            component="span" 
            startIcon={<FaCamera />}
            style={{backgroundColor:`${colors.green}`}}
            >
              UPLOAD TUBER
            </Button>
          </label>
        </ImageBox>
        {/* ----- IMAGE TUBER----- */}
        {/* ----- IMAGE JUVENIL----- */}
        <ImageBox>
          <SpanImage > 
            <h6>Upload Image</h6>
            <img src={fileImage[2]} alt=""/>
          </SpanImage>
        
          <input
            accept="image/*"
            name="young"
            className={classes.input}
            id="juvenil-file"
            multiple
            type="file"
            onChange={(e) => formImage(e)}
            style={{display:"none"}}
          />
          <label htmlFor="juvenil-file">
            <Button 
            variant="contained" 
            color="primary" 
            component="span" 
            startIcon={<FaCamera />}
            style={{backgroundColor:`${colors.green}`}}
            >
              UPLOAD YOUNG
            </Button>
          </label>
        </ImageBox>
        {/* ----- IMAGE JUVENIL----- */}
        {/* ----- IMAGE MATURE----- */}
        <ImageBox>
          <SpanImage > 
            <h6>Upload Image</h6>
            <img src={fileImage[3]} alt=""/>
          </SpanImage>
        
          <input
            accept="image/*"
            name="mature_image"
            className={classes.input}
            id="mature-file"
            multiple
            type="file"
            onChange={(e) => formImage(e)}
            style={{display:"none"}}
          />
          <label htmlFor="mature-file">
            <Button 
            variant="contained" 
            color="primary" 
            component="span" 
            startIcon={<FaCamera />}
            style={{backgroundColor:`${colors.green}`}}
            >
              UPLOAD MATURE
            </Button>
          </label>
        </ImageBox>
        {/* ----- IMAGE ----- */}
        <TextField
          value={plantBreedingState.fk_plant_id}
          name="fk_plant_id"
          onChange={(e) => formChange(`fk_plant_id`, e.target.value)}
          id="outlined-basic"
          label="Plant_id"
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
        <h4>PLANT BREEDING DATA</h4>
      <BoxTable>
        <List>
          <li>PLANT BREEDING ID</li>
          <li>SEED</li>
          <li>TUBER</li>
          <li>YOUNG</li>
          <li>MATURE</li>
          <li>SEED IMAGE</li>
          <li>TUBER IMAGE</li>
          <li>YOUNG IMAGE</li>
          <li>MATURE IMAGE</li>
          <li>PLANT ID</li>
          <li>ACTION</li>
        </List>

        {dataPlantBreeding.map(
          (data, index) => (
            <ListData key={index}>
              <li>{data.pk_plant_breeding_id}</li>
              <li>{data.seed}</li>
              <li>{data.tuber}</li>
              <li>{data.young}</li>
              <li>{data.mature}</li>
              <li>{data.seed_image}</li>
              <li>{data.tuber_image}</li>
              <li>{data.young_image}</li>
              <li>{data.mature_image}</li>
              <li>{data.fk_plant_id}</li>
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
                  onClick={() => handleDelete(data.pk_plant_breeding_id, index)}
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
          )
        )}
      </BoxTable>
    </Container>
  );
};

export default PlantBreeding;
