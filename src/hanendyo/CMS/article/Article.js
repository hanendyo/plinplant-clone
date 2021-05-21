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

const Article = () => {
  // USE STYLES
  const classes = useStyles();

  // USE CONTEXT
  const context = useContext(ContextStore);
  const { articleState, articleDispatch } = context;

  // USE STATE
  const [dataArticle, setDataArticle] = useState([
    {
      author: "",
      article_image: "",
      created_at: "",
      title: "",
      content: "",
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);
  const [fileImage, setFileImage] = useState(null);
  const [imageUpload, setImageUpload] = useState(null)

  // USE EFFECT
  useEffect(() => {
    getAllDatasAPI();
    console.log(`dataArticle: `, dataArticle);
  }, []);

  const url = "http://localhost:5000/input/";
  const endPoint = "article";

  // GET
  const getAllDatasAPI = async () => {
    await axios
      .get(url + endPoint + "_get_all_datas")
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
  const postAPI = async (form) => {
    // const fileImg = fileImage
    const data = new FormData();
    console.log(`formdata:`, form);
    data.append("author", form.author);
    data.append("title", form.title);
    data.append("content", form.content);
    data.append("created_at", form.created_at);
    data.append("article_image", form.article_image);
    data.append("article_image_upload", imageUpload);

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
  const updateAPI = async (form) => {
    console.log(`DATA UPDATE: `, data);
    const data = new FormData();
    console.log(`formdata:`, form);
    data.append("author", form.author);
    data.append("title", form.title);
    data.append("content", form.content);
    data.append("created_at", form.created_at);
    // data.append('image-upload' form.)
    data.append("article_image", form.article_image);

    axios
      .put(url + endPoint + `_update`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
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
      updateAPI(articleState);
      setIsUpdate(false);
    } else {
      postAPI(articleState);
    }

    setDataArticle([
      {
        ...dataArticle,
        author: articleState.author,
        image: articleState.image,
        created_at: articleState.created_at,
        title: articleState.title,
        content: articleState.content,
      },
    ]);

    clearFormData();

    console.log(`ARTICLE STATE SUBMIT: `, articleState);
  };

  // HANDLE DELETE
  const handleDelete = (id, index) => {
    deleteAPI(id, index);
  };

  // HANDLE UPDATE
  const handleUpdate = (data, index) => {
    setIsUpdate(true);
    setIndexUpdate(index);
    articleDispatch(cmsAction(`author`, data.author));
    articleDispatch(cmsAction(`title`, data.title));
    articleDispatch(cmsAction(`content`, data.content));
    articleDispatch(cmsAction(`created_at`, data.created_at));
    articleDispatch(cmsAction(`article_image`, data.article_image));
    articleDispatch(cmsAction(`pk_article_id`, data.pk_article_id));
    console.log(`update from articleState: `, articleState);
  };

  // HANDLE CANCEL
  const handleCancel = () => {
    clearFormData();
    setIsUpdate(false);
  };

  // CLEAR FORM
  const clearFormData = () => {
    articleDispatch(cmsAction(`author`, ""));
    articleDispatch(cmsAction(`title`, ""));
    articleDispatch(cmsAction(`content`, ""));
    articleDispatch(cmsAction(`created_at`, ""));
    articleDispatch(cmsAction(`article_image`, null));
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    articleDispatch(cmsAction(name, value));
  };

  const formImage = (e) => {
    const img = e.target.files[0];
    const imgName = e.target.files[0].name
    console.log(`IMEJ: `, img);
    articleDispatch(cmsAction("article_image", imgName));
    setFileImage(URL.createObjectURL(img));
    setImageUpload(img)
  };

  return (
    <div className="article cmsForm">
      <h3>Article input</h3>
      <form
        encType="multipart/form-data"
        className={classes.root}
        onSubmit={(e) => handleSubmit(e)}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={articleState.author}
          name="author"
          onChange={(e) => formChange(`author`, e.target.value)}
          id="outlined-basic"
          label="Author"
          variant="outlined"
        />
        <TextField
          value={articleState.title}
          onChange={(e) => formChange("title", e.target.value)}
          name="title"
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <TextField
          value={articleState.content}
          onChange={(e) => formChange("content", e.target.value)}
          name="content"
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={10}
          variant="outlined"
        />

        {/* ----- IMAGE ----- */}
        <span>Pick image:</span>
        <input name="article_image_upload" type="file" onChange={(e) => formImage(e)} />
        <img src={fileImage} alt="" />
        {/* ----- IMAGE ----- */}

        <TextField
          value={articleState.created_at}
          onChange={(e) => formChange("created_at", e.target.value)}
          name="created_at"
          id="outlined-basic"
          label="Created at"
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
            // console.log(`data article map: `, dataArticle),
            (
              <ul className="map" key={index}>
                <li>
                  NO: <span>{index + 1}</span>
                </li>
                <li>
                  ARTICLE ID: <span>{data.pk_article_id}</span>
                </li>
                {/* <li>
                  IMAGE: <span>{data.image}</span>'
                </li> */}
                <li>
                  AUTHOR: <span>{data.author}</span>
                </li>
                <li>
                  CREATED AT: <span>{data.created_at}</span>
                </li>
                <li>
                  TITLE: <span>{data.title}</span>
                </li>
                <li>
                  CONTENT: <span>{data.content}</span>
                </li>
                {
                  <div>
                    <button
                      onClick={() => handleDelete(data.pk_article_id, index)}
                    >
                      delete
                    </button>
                    <button onClick={() => handleUpdate(data, index)}>
                      Update
                    </button>
                    <br />
                  </div>
                }
              </ul>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Article;
