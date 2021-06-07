import {
  Box,
  Button,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import bgImage from "../../image/signup_bg.png";
import { FaGoogle } from "react-icons/fa";
import "./SignUp.css";
import { ContextStore } from "../../../context/store/ContextStore";
import { signUpAction, signUpAPI } from "../../../context/actions/SignUpAction";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        PlinPlant
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles({
  input: {
    width: "80%",
    margin: "5px 0",
    backgroundColor: "rgba(187, 203, 194, 0.2)",
  },
  button: {
    width: "80%",
    margin: "5px 0",
    backgroundColor: "rgb(187, 203, 194)",
    color: "primary",
  },
  copyright: {},
});

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const context = useContext(ContextStore);

  const { signUpState, signUpDispatch } = context;

  const registerAPI = async (form) => {
    try {
        let res = await axios.post(`http://localhost:5000/auth/register`,form);
        console.log(`register success`);
        return res;
    } catch (err) {
        console.log(`register error`, err);
        return err;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // POST TO API
    console.log(`sign up data: `, signUpState);
    registerAPI(signUpState).then((res) => {
      if (res.status === 201) {
        history.push("/login");
      }
    });
  };

  return (
    <div className="container">
      <div className="content">
        <div className="txtFields">
          <h1>PlinPlant </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
            officia.
          </p>
          <form
            encType="multipart/form-data"
            className={classes.root}
            onSubmit={(e) => handleSubmit(e)}
            noValidate
            autoComplete="off"
          >
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              <FaGoogle className="faGoogle" />
              Sign Up With Google
            </Button>
            <p>OR</p>
            <TextField
              className={classes.input}
              required
              placeholder="Input Your Full Name"
              id="outlined-basic"
              label="Full Name"
              value={signUpState.fullname}
              onChange={(e) =>
                signUpDispatch(signUpAction("fullname", e.target.value))
              }
              variant="outlined"
            />

            <TextField
              className={classes.input}
              required
              placeholder="Input Your Email"
              id="outlined-basic"
              label="Email"
              value={signUpState.email}
              onChange={(e) =>
                signUpDispatch(signUpAction("email", e.target.value))
              }
              variant="outlined"
            />

            <TextField
              className={classes.input}
              required
              placeholder="Input Your password"
              id="outlined-basic"
              label="password"
              value={signUpState.password}
              onChange={(e) =>
                signUpDispatch(signUpAction("password", e.target.value))
              }
              variant="outlined"
            />

            <TextField
              className={classes.input}
              required
              placeholder="Verify your password"
              id="outlined-basic"
              label="Verify password"
              value={signUpState.password_verify}
              onChange={(e) =>
                signUpDispatch(signUpAction("password_verify", e.target.value))
              }
              variant="outlined"
            />

            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
            >
              Sign Up
            </Button>
          </form>

          <p>
            Already have an account? <a href="/login">Log In</a>{" "}
          </p>
        </div>
        <div className="bgImageContainer">
          <img className="bgImage" src={bgImage} alt="" />
        </div>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
};

export default SignUp;