import React, { useEffect, useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { useContext } from "react";
import { ContextStore } from "../../../context/store/ContextStore";
import { cmsAction } from "../../../context/actions/CmsAction";
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

const Article = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { userState, userDispatch } = context;

  // USE STATE
  const [dataUser, setDataUser] = useState([
    {
      fullname: "",
      picture: "",
      email: "",
      password: "",
      birth_date: "",
      fk_contact_id:'',
      fk_gender_id: ''
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);
  const [reviewImage, setReviewImage] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);

  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    console.log(`dataUser: `, dataUser);
  }, []);

  const url = "http://localhost:5000/input/";
  const endPoint = "user";

  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + endPoint + "_get_all_datas")
      .then((res) => {
        if (res.status === 200) {
          console.log(`GET RES DATA DATA: `, res.data.data);
          setDataUser(res.data.data);
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
    data.append("fullname", form.fullname);
    data.append("password", form.password);
    data.append("birth_date", form.birth_date);
    data.append("email", form.email);
    data.append("fk_contact_id", form.fk_contact_id);
    data.append("fk_gender_id", form.fk_gender_id);
    data.append("picture", form.picture);
    data.append("picture_upload", imageUpload);

    axios
      .post(url + endPoint + `_input`, data, {
        headers: {
          "birth_date-type": "multipart/form-data",
        },
      })
      .then((res) => {
        getAllDatasAPI();
        console.log(`User successfuly created!`);
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
        console.log(`User successfuly updated!`);
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
        fk_contact_id: userState.fk_contact_id,
        fk_gender_id: userState.fk_gender_id,
      },
    ]);

    clearFormData();

    console.log(`ARTICLE STATE SUBMIT: `, userState);
  };

  // HANDLE DELETE
  const handleDelete = (id, index) => {
    deleteAPI(id, index);
  };

  // HANDLE UPDATE
  const handleUpdate = (data, index) => {
    setIsUpdate(true);
    setIndexUpdate(index);
    userDispatch(cmsAction(`fullname`, data.fullname));
    userDispatch(cmsAction(`password`, data.password));
    userDispatch(cmsAction(`birth_date`, data.birth_date));
    userDispatch(cmsAction(`email`, data.email));
    userDispatch(cmsAction(`picture`, data.picture));
    userDispatch(cmsAction(`fk_contact_id`, data.fk_contact_id));
    userDispatch(cmsAction(`fk_gender_id`, data.fk_gender_id));
    userDispatch(cmsAction(`pk_user_id`, data.pk_user_id));
    console.log(`update from userState: `, userState);
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
    userDispatch(cmsAction(`picture`, ''));
    userDispatch(cmsAction(`fk_contact_id`, ''));
    userDispatch(cmsAction(`fk_gender_id`, ''));
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    userDispatch(cmsAction(name, value));
  };

  const formImage = (e) => {
    const img = e.target.files[0];
    const imgName = e.target.files[0].name;
    console.log(`IMEJ: `, img);
    userDispatch(cmsAction("picture", imgName));
    setReviewImage(URL.createObjectURL(img));
    setImageUpload(img);
  };

  return (
    <Container>
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
          label="birth_date"
          variant="outlined"
        />
        <TextField
          value={userState.fk_contact_id}
          onChange={(e) => formChange("fk_contact_id", e.target.value)}
          name="fk_contact_id"
          id="outlined-basic"
          label="Contact_ID"
          variant="outlined"
        />
        <TextField
          value={userState.fk_gender_id}
          onChange={(e) => formChange("fk_gender_id", e.target.value)}
          name="fk_gender_id"
          id="outlined-basic"
          label="Gender_ID"
          variant="outlined"
        />

        {/* ----- IMAGE ----- */}
        {/* <span>Pick image:</span>
        <input
          name="picture_upload"
          type="file"
          onChange={(e) => formImage(e)}
        />
        <img src={reviewImage} alt="" /> */}

        <ImageBox>
        <SpanImage > 
          <h6>Upload Image</h6>
          <img src={reviewImage} alt=""/>
        </SpanImage>
        
        <input
        accept="image/*"
        name="Profile Picture Upload"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={(e) => formImage(e)}
        style={{display:"none"}}
        />
        <label htmlFor="contained-button-file">
          <Button 
          variant="contained" 
          color="primary" 
          component="span" 
          startIcon={<FaCamera />}
          style={{backgroundColor:`${colors.green}`}}
          >
            Upload
          </Button>
        </label>
        </ImageBox>
        {/* ----- IMAGE ----- */}
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
          <li>CONTACT ID</li>
          <li>GENDER ID</li>
          <li>ACTION</li>
        </List>
        {dataUser.map((data, index) => (
          <ListData key={index}> 
            <li>{data.pk_user_id}</li>
            <li>{data.fullname}</li>
            <li>{data.email}</li>
            <li>{data.password}</li>
            <li>{data.birth_date}</li>
            <li>{data.fk_contact_id}</li>
            <li>{data.fk_gender_id}</li>
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
                  onClick={() => handleDelete(data.pk_user_id, index)}
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="delete"
                  style={{backgroundColor:`${colors.green}`}}
                  >
                  
                  delete
                </Button>
                <br />
              </ButtonList>
            }

          </ListData>
          // <ul key={index}>
          //   <li>
          //     NO: <span>{index + 1}</span>
          //   </li>
          //   <li>
          //     USER ID: <span>{data.pk_user_id}</span>
          //   </li>
          //   <li>
          //     PICTURE: <span>{data.picture}</span>
          //   </li>
          //   <li>
          //     FULLNAME: <span>{data.fullname}</span>
          //   </li>
          //   <li>
          //     EMAIL: <span>{data.email}</span>
          //   </li>
          //   <li>
          //     PASSWORD: <span>{data.password}</span>
          //   </li>
          //   <li>
          //     BIRTH DATE: <span>{data.birth_date}</span>
          //   </li>
          //   <li>
          //     CONTACT_ID: <span>{data.fk_contact_id}</span>
          //   </li>
          //   <li>
          //     GENDER_ID: <span>{data.fk_gender_id}</span>
          //   </li>
          //   {
          //     <div>
          //       <button onClick={() => handleDelete(data.pk_user_id, index)}>
          //         delete
          //       </button>
          //       <button onClick={() => handleUpdate(data, index)}>
          //         Update
          //       </button>
          //       <br />
          //     </div>
          //   }
          // </ul>
        ))}
      </BoxTable>
    </Container>
  );
};

export default Article;
