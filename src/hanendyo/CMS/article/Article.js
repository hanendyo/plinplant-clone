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
import { articlePost, cmsAction } from "../../../context/actions/CmsAction";
import axios from "axios";
import "../CMS.css";
import { Container, BoxInput, InputContainer } from "./Article_component";

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
      image: "",
      created_at: "",
      title: "",
      content: "",
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [indexUpdate, setIndexUpdate] = useState(0);

  // USE EFFECT
  useEffect(() => {
    articleGetAllData();
    console.log(`dataArticle: `, dataArticle);
  }, []);

  const url = "http://localhost:5000/input/";

  // GET
  const articleGetAllData = async () => {
    await axios
      .get(url + "article_get_all_datas")
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
  const articlePost = async (data) => {
    await axios
      .post(url + "article_input", data)
      .then((res) => {
        console.log(res);
        articleGetAllData();
        console.log(`get`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // DELETE
  const articleDelete = async (id, index) => {
    await axios
      .delete(url + "article_delete/" + id)
      .then((deleted) => {
        console.log(`DELETED: `, deleted);
        articleGetAllData();
      })
      .catch((err) => err);
  };

  // UPDATE
  const articleUpdate = async (data) => {
    // console.log(`ID ID ID: `, index);
    console.log(`DATA UPDATE: `, data);
    await axios
      .put(url + `article_update`, data)
      .then((res) => {
        console.log(res);
        setIsUpdate(false);
        articleGetAllData();
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
      articleUpdate(articleState);
      setIsUpdate(false);
    } else {
      articlePost(articleState);
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
    // console.log(`ARTICLE STATE AUTHOR: `, articleState.author);
    // console.log(`DATA ARTICLE SUBMIT: `, dataArticle);
    // console.log(`DATA ARTICLE AUTHOR: `, dataArticle.author);
    // console.log(`UPDATED ARTICLE STATE: `, articleState);
    // console.log(`UPDATED ARTICLE STATE AUTHOR: `, articleState.author);
  };

  // HANDLE DELETE
  const handleDelete = (id, index) => {
    articleDelete(id, index);
  };

  // HANDLE UPDATE
  const handleUpdate = (data, index) => {
    // console.log(`index update: `, index);
    // console.log(`data id update: `, data.pk_article_id);
    setIsUpdate(true);
    setIndexUpdate(index);
    articleDispatch(cmsAction(`author`, data.author));
    articleDispatch(cmsAction(`title`, data.title));
    articleDispatch(cmsAction(`content`, data.content));
    articleDispatch(cmsAction(`created_at`, data.created_at));
    articleDispatch(cmsAction(`image`, data.image));
    articleDispatch(cmsAction(`pk_article_id`, data.pk_article_id));
    // console.log(`update from dataArticle: `, dataArticle[index]);
    // console.log(`update from dataArticle: `, dataArticle[index]);
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
    articleDispatch(cmsAction(`image`, ""));
  };

  // FORM CHANGE
  const formChange = (name, value) => {
    articleDispatch(cmsAction(name, value));
  };

  return (
    <div>
      <Container>
        <h4>Article input</h4>
        <BoxInput>
          <form
            enctype="multipart/form-data"
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
              size="small"
            />
            <TextField
              value={articleState.title}
              onChange={(e) => formChange("title", e.target.value)}
              name="title"
              id="outlined-basic"
              label="Title"
              variant="outlined"
              size="small"
            />
            <TextField
              value={articleState.content}
              onChange={(e) => formChange("content", e.target.value)}
              name="content"
              id="outlined-multiline-static"
              label="Content"
              multiline
              // rows={10}
              variant="outlined"
              size="small"
            />

            {/* ----- IMAGE ----- */}
            {/* <TextField
          value={articleState.image}
          onChange={(e) => formChange("image", e.target.value)}
          name="image"
          // onChange={updateField}
          id="outlined-basic"
          label="input image"
          variant="outlined"
        /> */}
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
            {/* <input
              // id="image-upload"
              // name="image-upload"
              // type="file"
              // value={articleState.image}
              // onChange={(e) => console.log(`image: `, e.target.files[0].name)}
              // onChange={(e) => formChange(`image`, e.target.value)}
              // onChange={(e) => console.log(`FILE: `, e.target.files[0].name)}
            /> */}
            {/* <label htmlFor="raised-button-file">
          <Button
            value={articleState.image}
            className={classes.button}
            variant="raised"
            color="primary"
            component="span"
            className={classes.button}
            onChange={(e) => console.log(`FILE: `, e.target.files)}
          >
            Upload Image
          </Button>
        </label> */}
            {/* ----- IMAGE ----- */}

            <TextField
              value={articleState.created_at}
              onChange={(e) => formChange("created_at", e.target.value)}
              name="created_at"
              id="outlined-basic"
              label="Created at"
              variant="outlined"
              size="small"
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
        </BoxInput>

        <div>
          <br />
          <h3>Result: </h3>
          {dataArticle.map(
            (data, index) => (
              console.log(`data article map: `, dataArticle),
              (
                <ul className="map" key={index}>
                  <li>
                    NO: <span>{index + 1}</span>
                  </li>
                  <li>
                    ARTICLE ID: <span>{data.pk_article_id}</span>
                  </li>
                  <li>
                    IMAGE: <span>{data.image}</span>'
                  </li>
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
      </Container>
    </div>
  );
};

export default Article;
