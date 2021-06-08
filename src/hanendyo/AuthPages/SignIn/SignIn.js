import {
  Box,
  Button,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import bgImage from "../../image/signin_bg.png";
import { FaGoogle } from "react-icons/fa";
import "./SignIn.css";
import { ContextStore } from "../../../context/store/ContextStore";
import { signInAction } from "../../../context/actions/SignInAction";
import axios from "axios";
import { useHistory } from "react-router-dom";

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

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginName, setLoginName] = useState("");
  const [local, setLocal] = useState([]);

  const context = useContext(ContextStore);
  const { signInState, signInDispatch } = context;

  //! axios crendentials
  axios.defaults.withCredentials = true;

  // useEffect(() => {
  //   getDataSignInAPI();
  // }, []);

  // const getDataSignInAPI = async () => {
  //   try {
  //     await axios.get(`http://localhost:5000/auth/login`).then((response) => {
  //       signInDispatch(signInAction("loginStatus", response.data));
  //       setLocal(...local, signInState.loginStatus.user);
  //       console.log(`SET LOCAL: `, local);
  //       console.log(`RESPONSE GET DATA LOGIN API: `, response);
  //       localStorage.setItem(
  //         "user-data",
  //         JSON.stringify(signInState.loginStatus)
  //       );

  //       return response;
  //     });
  //   } catch (err) {
  //     console.log(`login error`, err);
  //     return err;
  //   }
  // };

  const signInAPI = async (form) => {
    const data = new FormData();
    data.append("email", form.email);
    data.append("password", form.password);

    try {
      let res = await axios.post("http://localhost:5000/auth/login", data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      // getDataSignInAPI();
      console.log(`SIGNIN API RES: `, res);
      return res;
    } catch (err) {
      console.log(`ERROR!`);
      console.log(err);
      return err;
    }
  };

  const logOutAPI = async () => {
    try {
      let res = await axios.get(`http://localhost:5000/auth/logout`);
      console.log(`logout success`);
      return res;
    } catch (err) {
      console.log(`logout error`, err);
      return err;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // POST TO API
    console.log(`sign in data: `, signInState);
    signInAPI(signInState).then((res) => {
      // getDataSignInAPI();
      console.log(`SUBMIT RES: `, res);
      localStorage.setItem(
        "user-data",
        JSON.stringify(res)
      );
      if (res.status === 200) {
        setLoginStatus(true);
        signInDispatch(signInAction("loginStatus", res));
        history.push("/");
        if (loginStatus === true) {
          setLoginName(res.data.result[0].fullname);
        }
        // signInDispatch(signInAction("loginStatus", res.data));
      }
      console.log(`res submit: `, res);
    });
  };

  return (
    <div className="container">
      <div className="content">
        <div className="txtFields">
          <h1>PlinPlant</h1>
          <form
            encType="multipart/form-data"
            className={classes.root}
            onSubmit={(e) => handleSubmit(e)}
            noValidate
            autoComplete="off"
          >
            {/* Email input */}
            <TextField
              className={classes.input}
              required
              placeholder="Input Your Email"
              id="outlined-basic"
              label="Email"
              value={signInState.email}
              onChange={(e) =>
                signInDispatch(signInAction("email", e.target.value))
              }
              variant="outlined"
            />

            {/* Password input */}
            <TextField
              className={classes.input}
              required
              placeholder="Input Your Password"
              id="outlined-basic"
              label="Password"
              value={signInState.password}
              onChange={(e) =>
                signInDispatch(signInAction("password", e.target.value))
              }
              variant="outlined"
            />

            {/* Sign In button */}
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
            >
              Sign In
            </Button>
          </form>
          <p>OR</p>

          {/* Sign In with Google */}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            <FaGoogle className="faGoogle" />
            Sign In With Google
          </Button>

          {/* forgot password */}
          <p>
            <a href="">Forgot password?</a>
          </p>

          {/* dont have account */}
          <p>
            Don't have an account yet? <a href="/register">Sign Up</a>
          </p>
        </div>
        <div className="bgImageContainer">
          <img className="bgImage" src={bgImage} alt="" />
        </div>
      </div>
      <br />
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
};

export default SignIn;
