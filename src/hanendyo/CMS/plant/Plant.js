import React, { useEffect, useState } from "react";
import {
  Button,
  makeStyles,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
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
import { FaCamera } from "react-icons/fa";

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

const Article = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { plantState, plantDispatch, cmsSidebarState } = context;

  // USE STATE
  const [dataPlant, setDataPlant] = useState([
    {
      plant_name: "",
      plant_image: "",
      plant_origin: "",
      plant_qualities: "",
      plant_use: "",
      days_to_sprout: "",
      matures_in: "",
      growth_type: "",
      fk_category_id: "",
      fk_review_id: "",
    },
  ]);
  // USE STATE FOR DROPDOWN CATEGORY
  const [dataCategory, setDataCategory] = useState([
    {
      pk_category_id: "",
      category_name: "",
    },
  ]);

  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);
  const [reviewImage, setReviewImage] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);

  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    getCategoryData();
    console.log(`dataPlant: `, dataPlant);
  }, []);

  const url = "http://localhost:5000/input/";
  const endPoint = "plant";
  // CATEGORY DROPDOWN
  const categoryDropdown = "category";

  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + endPoint + "_get_all_datas")
      .then((res) => {
        if (res.status === 200) {
          console.log(`GET RES DATA DATA: `, res.data.data);
          setDataPlant(res.data.data);
        } else {
          console.log("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // CATEGORY FOR DROPDOWN
  const getCategoryData = async () => {
    await axios
      .get(url + categoryDropdown + "_get_all_datas")
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
  const postAPI = async (form) => {
    const data = new FormData();
    console.log(`formdata:`, form);
    data.append("plant_name", form.plant_name);
    data.append("plant_image", form.plant_image);
    data.append("plant_origin", form.plant_origin);
    data.append("plant_qualities", form.plant_qualities);
    data.append("plant_use", form.plant_use);
    data.append("days_to_sprout", form.days_to_sprout);
    data.append("matures_in", form.matures_in);
    data.append("growth_type", form.growth_type);
    data.append("fk_category_id", form.fk_category_id);
    data.append("fk_review_id", form.fk_review_id);
    data.append("plant_image_upload", imageUpload);

    axios
      .post(url + endPoint + `_input`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        getAllDatasAPI();
        console.log(`Article successfuly created!`);
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
      .put(url + endPoint + `_update`, data)
      .then((res) => {
        getAllDatasAPI();
        console.log(`Article successfuly updated!`);
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
      updateAPI(plantState);
      setIsUpdate(false);
    } else {
      postAPI(plantState);
    }

    setDataPlant([
      {
        ...dataPlant,
        plant_name: plantState.plant_name,
        plant_image: plantState.plant_image,
        plant_origin: plantState.plant_origin,
        plant_qualities: plantState.plant_qualities,
        plant_use: plantState.plant_use,
        days_to_sprout: plantState.days_to_sprout,
        matures_in: plantState.matures_in,
        growth_type: plantState.growth_type,
        fk_category_id: plantState.fk_category_id,
        fk_review_id: plantState.fk_review_id,
      },
    ]);

    clearFormData();

    console.log(`ARTICLE STATE SUBMIT: `, plantState);
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
    plantDispatch(cmsAction(`pk_plant_id`, data.pk_plant_id));
    plantDispatch(cmsAction(`plant_name`, data.plant_name));
    plantDispatch(cmsAction(`plant_image`, data.plant_image));
    plantDispatch(cmsAction(`plant_origin`, data.plant_origin));
    plantDispatch(cmsAction(`plant_qualities`, data.plant_qualities));
    plantDispatch(cmsAction(`plant_use`, data.plant_use));
    plantDispatch(cmsAction(`days_to_sprout`, data.days_to_sprout));
    plantDispatch(cmsAction(`matures_in`, data.matures_in));
    plantDispatch(cmsAction(`growth_type`, data.growth_type));
    plantDispatch(cmsAction(`fk_category_id`, data.fk_category_id));
    plantDispatch(cmsAction(`fk_review_id`, data.fk_review_id));
    console.log(`update from plantState: `, plantState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    plantDispatch(cmsAction(`plant_name`, ""));
    plantDispatch(cmsAction(`plant_image`, ""));
    plantDispatch(cmsAction(`plant_origin`, ""));
    plantDispatch(cmsAction(`plant_qualities`, ""));
    plantDispatch(cmsAction(`plant_use`, ""));
    plantDispatch(cmsAction(`days_to_sprout`, ""));
    plantDispatch(cmsAction(`matures_in`, ""));
    plantDispatch(cmsAction(`growth_type`, ""));
    plantDispatch(cmsAction(`fk_category_id`, ""));
    plantDispatch(cmsAction(`fk_review_id`, ""));
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    plantDispatch(cmsAction(name, value));
  };

  const formImage = (e) => {
    const img = e.target.files[0];
    const imgName = e.target.files[0].name;
    console.log(`IMEJ: `, img);
    plantDispatch(cmsAction("plant_image", imgName));
    setReviewImage(URL.createObjectURL(img));
    setImageUpload(img);
  };

  return (
    <Container sidebar={cmsSidebarState}>
      <h4>PLANT INPUT</h4>
      <BoxForm>
        <form
          encType="multipart/form-data"
          className={classes.root}
          onSubmit={(e) => handleSubmit(e)}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={plantState.plant_name}
            name="plant_name"
            onChange={(e) => formChange(`plant_name`, e.target.value)}
            id="outlined-basic"
            label="Plant name"
            variant="outlined"
          />
          <TextField
            value={plantState.plant_origin}
            onChange={(e) => formChange("plant_origin", e.target.value)}
            name="plant_origin"
            id="outlined-basic"
            label="Plant origin"
            variant="outlined"
          />

          <TextField
            value={plantState.plant_qualities}
            onChange={(e) => formChange("plant_qualities", e.target.value)}
            name="plant_qualities"
            id="outlined-basic"
            label="Plant Qualities"
            variant="outlined"
          />

          <TextField
            value={plantState.plant_use}
            onChange={(e) => formChange("plant_use", e.target.value)}
            name="plant_use"
            id="outlined-static"
            label="Plant use"
            variant="outlined"
          />
          <TextField
            value={plantState.days_to_sprout}
            onChange={(e) => formChange("days_to_sprout", e.target.value)}
            name="days_to_sprout"
            id="outlined-static"
            label="Days to sprout"
            variant="outlined"
          />

          <TextField
            value={plantState.growth_type}
            onChange={(e) => formChange("growth_type", e.target.value)}
            name="growth_type"
            id="outlined-static"
            label="Growth type"
            variant="outlined"
          />
          <TextField
            value={plantState.matures_in}
            onChange={(e) => formChange("matures_in", e.target.value)}
            name="matures_in"
            id="outlined-static"
            label="Matures in"
            variant="outlined"
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="Category_ID"> Category</InputLabel>
            <Select
              value={plantState.fk_category_id}
              onChange={(e) => formChange("fk_category_id", e.target.value)}
              name="fk_category_id"
              labelId="Category_ID"
              id="outlined-basic"
              variant="outlined"
            >
              {dataCategory.map((data, index) => (
                <MenuItem value={data.pk_category_id} key={index}>
                  {data.category_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* <TextField
            value={plantState.fk_category_id}
            onChange={(e) => formChange("fk_category_id", e.target.value)}
            name="fk_category_id"
            id="outlined-static"
            label="Category_ID"
            variant="outlined"
          /> */}

          <TextField
            value={plantState.fk_review_id}
            onChange={(e) => formChange("fk_review_id", e.target.value)}
            name="fk_review_id"
            id="outlined-static"
            label="Review_ID"
            variant="outlined"
          />
          {/* ----- IMAGE ----- */}
          {/* <span>Pick image:</span>
        <input
          name="plant_image_upload"
          type="file"
          onChange={(e) => formImage(e)}
        />
        <img src={reviewImage} alt="" /> */}
          <ImageBox>
            <SpanImage>
              <h6>Upload Image</h6>
              <img src={reviewImage} alt="" />
            </SpanImage>

            <input
              accept="image/*"
              name="article_image_upload"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) => formImage(e)}
              style={{ display: "none" }}
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                startIcon={<FaCamera />}
                style={{ backgroundColor: `${colors.green}` }}
              >
                Upload
              </Button>
            </label>
          </ImageBox>
          {/* ----- IMAGE ----- */}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "20px", backgroundColor: `${colors.green}` }}
          >
            {isUpdate ? "Update" : "Submit"}
          </Button>
          {isUpdate && (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => handleCancel()}
              style={{ marginTop: "20px", backgroundColor: `${colors.green}` }}
            >
              Cancel
            </Button>
          )}
        </form>
      </BoxForm>
      <br />
      <h4>PLANT DATA</h4>
      <BoxTable>
        <List>
          <li>PLANT ID</li>
          <li>NAME</li>
          <li>IMAGE</li>
          <li>ORIGIN</li>
          <li>QUALITIES ID</li>
          <li>PLANT TO USE</li>
          <li>DAYS TO SPROUT</li>
          <li>MATURES IN</li>
          <li>GROWTH TYPE</li>
          <li>CATEGORY ID</li>
          <li>REVIEW ID</li>
          <li>ACTION ID</li>
        </List>
        {dataPlant.map((data, index) => (
          <ListData key={index}>
            <li>{data.pk_plant_id}</li>
            <li>{data.name}</li>
            <li>{data.plant_image}</li>
            <li>{data.plant_origin}</li>
            <li>{data.plant_qualities}</li>
            <li>{data.plant_use}</li>
            <li>{data.days_to_sprout}</li>
            <li>{data.matures_in}</li>
            <li>{data.growth_type}</li>
            <li>{data.fk_category_id}</li>
            <li>{data.fk_review_id}</li>
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
                onClick={() => handleDelete(data.pk_plant_id, index)}
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
        ))}
      </BoxTable>
    </Container>
  );
};

export default Article;
