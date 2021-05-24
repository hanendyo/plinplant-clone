import React, { useEffect, useState } from "react";
import {
  Button,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { useContext } from "react";
import { ContextStore } from "../../../context/store/ContextStore";
import { cmsAction } from "../../../context/actions/CmsAction";
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

const Plant = () => {
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
      fk_login_id: "",
      fk_contact_id: "",
      fk_gender_id: "",
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);
  const [fileImage, setFileImage] = useState(null);

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
      .get(url + `${endPoint}_get_all_datas`)
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
    data.append("picture", form.tuber);
    data.append("email", form.email);
    data.append("birth_date", form.birth_date);
    data.append("fk_login_id", form.fk_login_id);
    data.append("fk_gender_id", form.fk_gender_id);


    axios
      .post(url + `${endPoint}_input`, data, {
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
      .delete(url + `${endPoint}_delete/` + id)
      .then((deleted) => {
        console.log(`DELETED: `, deleted);
        getAllDatasAPI();
      })
      .catch((err) => err);
  };

  // UPDATE
  const updateAPI = async (form) => {
    const data = new FormData();
    console.log(`formdata:`, form);
    data.append("fullname", form.fullname);
    data.append("picture", form.tuber);
    data.append("email", form.email);
    data.append("birth_date", form.birth_date);
    data.append("fk_login_id", form.fk_login_id);
    data.append("fk_gender_id", form.fk_gender_id);

    axios
      .put(url + `${endPoint}_update`, data, {
        headers: {
          "content-type": "multipart/form-data",
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
        fk_login_id: userState.fk_login_id,
        fk_contact_id: userState.fk_contact_id,
        fk_gender_id: userState.fk_gender_id,
      },
    ]);

    clearFormData();

    console.log(`USER STATE SUBMIT: `, userState);
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
    userDispatch(cmsAction(`picture`, data.picture));
    userDispatch(cmsAction(`email`, data.email));
    userDispatch(cmsAction(`password`, data.password));
    userDispatch(cmsAction(`birth_date`, data.birth_date));
    userDispatch(cmsAction(`fk_login_id`, data.fk_login_id));
    userDispatch(cmsAction(`fk_contact_id`, data.fk_contact_id));
    userDispatch(cmsAction(`fk_gender_id`, data.fk_gender_id));

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
    userDispatch(cmsAction(`picture`, ""));
    userDispatch(cmsAction(`email`, ""));
    userDispatch(cmsAction(`password`, ""));
    userDispatch(cmsAction(`birth_date`, ""));
    userDispatch(cmsAction(`fk_login_id`, ""));
    userDispatch(cmsAction(`fk_contact_id`, ""));
    userDispatch(cmsAction(`fk_gender_id`, ""));
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    userDispatch(cmsAction(name, value));
  };

  const formImage = (e) => {
    const img = e.target.files[0];
    userDispatch(cmsAction("image", img));
    setFileImage(URL.createObjectURL(img));
  };

  return (
    <div className="cmsForm">
      <h3>User input</h3>
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
          label="Fullname"
          variant="outlined"
        />

        <TextField
          value={userState.email}
          name="email"
          onChange={(e) => formChange(`email`, e.target.value)}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          value={userState.password}
          name="password"
          onChange={(e) => formChange(`password`, e.target.value)}
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <TextField
          value={userState.birth_date}
          name="birth_date"
          onChange={(e) => formChange(`birth_date`, e.target.value)}
          id="outlined-basic"
          label="Birth date"
          variant="outlined"
        />

        {/* ----- IMAGE ----- */}
        <span>Pick User image:</span>
        <input name="picture" type="file" onChange={(e) => formImage(e)} />
        <img src={fileImage} alt="" />
        {/* ----- IMAGE ----- */}

        <TextField
          value={userState.fk_login_id}
          name="fk_login_id"
          onChange={(e) => formChange(`fk_login_id`, e.target.value)}
          id="outlined-basic"
          label="Login_ID"
          variant="outlined"
        />
        <TextField
          value={userState.fk_contact_id}
          name="fk_contact_id"
          onChange={(e) => formChange(`fk_contact_id`, e.target.value)}
          id="outlined-basic"
          label="Contact_id"
          variant="outlined"
        />
        <TextField
          value={userState.fk_gender_id}
          name="fk_gender_id"
          onChange={(e) => formChange(`fk_gender_id`, e.target.value)}
          id="outlined-basic"
          label="Gneder_id"
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
        {dataUser.map(
          (data, index) => (
            console.log(`data article map: `, dataUser),
            (
              <ul className="map" key={index}>
                <li>
                  PLANT ID: <span>{data.pk_plant_id}</span>
                </li>
                <li>
                  PLANT NAME: <span>{data.fullname}</span>
                </li>
                <li>
                  PLANT ORIGIN: <span>{data.email}</span>
                </li>
                <li>
                  PLANT IMAGE: <span>{data.picture}</span>
                </li>
                <li>
                  PLANT QUALITIES: <span>{data.password}</span>
                </li>
                <li>
                  PLANT USE: <span>{data.birth_date}</span>
                </li>
                <li>
                  DAYS TO SPROUT: <span>{data.fk_login_id}</span>
                </li>
                <li>
                  MATURES IN: <span>{data.fk_contact_id}</span>
                </li>
                <li>
                  GROWTH IN: <span>{data.fk_gender_id}</span>
                </li>
                <li>
                  {/* CATEGORY_ID: <span>{data.fk_category_id}</span> */}
                </li>
                <li>
                  {/* REVIEW_ID: <span>{data.fk_review_id}</span> */}
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

export default Plant;
