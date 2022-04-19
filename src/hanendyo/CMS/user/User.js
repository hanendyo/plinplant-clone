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
  ButtonList,
  Container,
  BoxForm,
  BoxTable,
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
  const { userState, userDispatch, cmsSidebarState } = context;

  // USE STATE
  const [dataUser, setDataUser] = useState([
    {
      fullname: "",
      picture: "",
      email: "",
      password: "",
      birth_date: "",
      phone_number: "",
      fk_contact_id: "",
      fk_gender_id: "",
    },
  ]);

  // USE STATE GENDER DROPDOWN
  const [dataGender, setDataGender] = useState([
    {
      pk_gender_id: "",
      type: "",
    },
  ]);

  const [isUpdate, setIsUpdate] = useState(false);
  // const [indexUpdate, setIndexUpdate] = useState(0);
  const [reviewImage, setReviewImage] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);

  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    getGenderData();
    // console.log(`dataUser: `, dataUser);
  }, []);

  const url = "http://localhost:8081/input/";
  const endPoint = "user";
  // GENDER DROPDOWN
  const genderDropdown = "gender";

  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + endPoint + "_get_all_datas")
      .then((res) => {
        if (res.status === 200) {
          // console.log(`GET RES DATA DATA: `, res.data.data);
          setDataUser(res.data.data);
        } else {
          // console.log('Error');
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  // GENDER FOR DROPDOWN
  const getGenderData = async () => {
    await axios
      .get(url + genderDropdown + "_get_all_datas")
      .then((res) => {
        if (res.status === 200) {
          // console.log(`GET RES DATA DATA: `, res.data.data);
          setDataGender(res.data.data);
        } else {
          // console.log('Error');
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  // POST
  const postAPI = async (form) => {
    const data = new FormData();
    // console.log(`formdata:`, form);
    data.append("fullname", form.fullname);
    data.append("password", form.password);
    data.append("birth_date", form.birth_date);
    data.append("email", form.email);
    data.append("number_phone", form.number_phone);
    data.append("fk_gender_id", form.fk_gender_id);
    data.append("picture", form.picture);
    data.append("picture_upload", imageUpload);

    axios
      .post(url + endPoint + `_input`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        getAllDatasAPI();
        // console.log(`User successfuly created!`);
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
  const updateImageAPI = async (form) => {
    const data = new FormData();
    data.set("picture_upload", imageUpload);
    axios
      .put(url + endPoint + `_update`, data)
      .then((res) => {
        getAllDatasAPI();
        // console.log(`User successfuly updated!`);
        // console.log(res);
        return res;
      })
      .catch((err) => {
        // console.log(`ERROR!`);
        // console.log(err);
        return err;
      });
  };
  const updateAPI = async (form) => {
    axios
      .put(url + endPoint + `_update`, form)
      .then((res) => {
        getAllDatasAPI();
        // console.log(`User successfuly updated!`);
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
      updateImageAPI(userState);
      updateAPI(userState);
      setIsUpdate(false);
    } else {
      postAPI(userState);
    }

    setDataUser([
      {
        ...dataUser,
        fullname: userState.fullname,
        picture: userState.picture,
        email: userState.email,
        password: userState.password,
        birth_date: userState.birth_date,
        phone_number: userState.phone_number,
        fk_gender_id: userState.fk_gender_id,
      },
    ]);

    clearFormData();

    // console.log(`ARTICLE STATE SUBMIT: `, userState);
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
    // setIndexUpdate(index);
    userDispatch(cmsAction(`fullname`, data.fullname));
    userDispatch(cmsAction(`password`, data.password));
    userDispatch(cmsAction(`birth_date`, data.birth_date));
    userDispatch(cmsAction(`email`, data.email));
    userDispatch(cmsAction(`phone_number`, data.phone_number));
    userDispatch(cmsAction(`picture`, data.picture));
    userDispatch(cmsAction(`fk_gender_id`, data.fk_gender_id));
    userDispatch(cmsAction(`pk_user_id`, data.pk_user_id));
    // console.log(`update from userState: `, userState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    userDispatch(cmsAction(`fullname`, ""));
    userDispatch(cmsAction(`password`, ""));
    userDispatch(cmsAction(`birth_date`, ""));
    userDispatch(cmsAction(`email`, ""));
    userDispatch(cmsAction(`phone_number`, ""));
    userDispatch(cmsAction(`picture`, ""));
    userDispatch(cmsAction(`fk_gender_id`, ""));
    setReviewImage("");
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    userDispatch(cmsAction(name, value));
  };

  const formImage = (e) => {
    const img = e.target.files[0];
    const imgName = e.target.files[0].name;
    // console.log(`IMEJ: `, img);
    userDispatch(cmsAction("picture", imgName));
    setReviewImage(URL.createObjectURL(img));
    setImageUpload(img);
  };

  return (
    <Container sidebar={cmsSidebarState}>
      <h4>USER DATA</h4>
      <BoxForm>
        <form
          encType="multipart/form-data"
          className={classes.root}
          onSubmit={(e) => handleSubmit(e)}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={userState.fullname}
            name="fullname"
            onChange={(e) => formChange(`fullname`, e.target.value)}
            id="outlined-basic"
            label="fullname"
            variant="outlined"
          />
          <TextField
            value={userState.email}
            name="email"
            onChange={(e) => formChange(`email`, e.target.value)}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <TextField
            value={userState.password}
            onChange={(e) => formChange("password", e.target.value)}
            name="password"
            id="outlined-basic"
            label="password"
            variant="outlined"
          />
          <TextField
            value={userState.birth_date}
            onChange={(e) => formChange("birth_date", e.target.value)}
            name="birth_date"
            id="outlined-static"
            label="Birth Date"
            variant="outlined"
            type="date"
          />
          <TextField
            value={userState.phone_number}
            onChange={(e) => formChange("phone_number", e.target.value)}
            name="phone_number"
            id="outlined-basic"
            label="Phone number"
            variant="outlined"
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="gender"> Gender ID</InputLabel>
            <Select
              value={userState.fk_gender_id}
              onChange={(e) => formChange("fk_gender_id", e.target.value)}
              name="fk_gender_id"
              labelId="fk_gender_id"
              id="outlined-basic"
              variant="outlined"
            >
              {dataGender.map((data, index) => (
                <MenuItem value={data.pk_gender_id} key={index}>
                  {data.type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* ----- IMAGE ----- */}
          <ImageBox>
            <SpanImage>
              <h6>Upload Image</h6>
              <img src={reviewImage ? reviewImage : null} alt="" />
            </SpanImage>
            <input
              // accept="image/*"
              name="picture_upload"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) => formImage(e)}
              style={{ display: "none" }}
            />
            {/* ----- IMAGE ----- */}
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
          )
        </form>
      </BoxForm>
      <br />
      <h4>USER DATA</h4>
      <BoxTable>
        <List>
          <li>USER ID</li>
          <li>FULLNAME</li>
          <li>EMAIL</li>
          <li>PASSWORD</li>
          <li>BIRTH DATE</li>
          <li>PICTURE</li>
          <li>PHONE NUMBER</li>
          <li>GENDER ID</li>
          <li>ACTION</li>
        </List>
        {dataUser.map((data, index) => (
          // console.log(`DATA USER MAP: `, data),
          <ListData key={index}>
            <li>{data.pk_user_id}</li>
            <li>{data.fullname}</li>
            <li>{data.email}</li>
            <li>{data.password}</li>
            <li>{data.birth_date}</li>
            <li>{data.picture}</li>
            <li>{data.phone_number}</li>
            <li>{data.fk_gender_id}</li>
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
                  onClick={() => handleDelete(data.pk_user_id, index)}
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="delete"
                  style={{ backgroundColor: `${colors.green}` }}
                >
                  delete
                </Button>
                <br />
              </ButtonList>
            }
          </ListData>
        ))}
      </BoxTable>
    </Container>
  );
};

export default Article;
