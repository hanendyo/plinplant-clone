import {
  Box,
  Button,
  Link,
  makeStyles,
  TextField,
  Typography,
<<<<<<< HEAD
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import bgImage from "../image/signup_bg.png";
import { FaGoogle } from "react-icons/fa";
import "./SignUp.css";
import { ContextStore } from "../../context/store/ContextStore";
import { signUpAction, signUpAPI } from "../../context/actions/ActionsList";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        PlinPlant
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
=======
} from '@material-ui/core';
import React, { useState } from 'react';
import bgImage from '../image/signup_bg.png';
import { FaGoogle } from 'react-icons/fa';
import './SignUp.css';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href=''>
        PlinPlant
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
>>>>>>> 77d28ea2cdcd0bc48b8a3107f12af0495f78c773
    </Typography>
  );
}

const useStyles = makeStyles({
  input: {
<<<<<<< HEAD
    width: "80%",
    margin: "5px 0",
    backgroundColor: "rgba(187, 203, 194, 0.2)",
  },
  button: {
    width: "80%",
    margin: "5px 0",
    backgroundColor: "rgb(187, 203, 194)",
    color: "primary",
=======
    width: '80%',
    margin: '5px 0',
    backgroundColor: 'rgba(187, 203, 194, 0.2)',
  },
  button: {
    width: '80%',
    margin: '5px 0',
    backgroundColor: 'rgb(187, 203, 194)',
    color: 'primary',
>>>>>>> 77d28ea2cdcd0bc48b8a3107f12af0495f78c773
  },
  copyright: {},
});

const SignUp = () => {
  const classes = useStyles();
<<<<<<< HEAD

  const context = useContext(ContextStore);
  const { signUpState, signUpDispatch } = context;

  // console.log(`CONTEXT: `, context);

  const handleSubmit = (e) => {
    e.preventDefault();
    // POST TO API
    console.log(`sign up data: `, signUpState);
    signUpAPI(signUpState);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="txtFields">
          <h1>PlinPlant </h1>
=======
  const [inputForm, setInputForm] = useState({
    firstname: '',
    email: '',
    password: '',
    term: false,
    gender: 0,
  });

  return (
    <div className='container'>
      <div className='content'>
        <div className='txtFields'>
          <h1>PlinPlant</h1>
>>>>>>> 77d28ea2cdcd0bc48b8a3107f12af0495f78c773
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
            officia.
          </p>
<<<<<<< HEAD
          <form onSubmit={(e) => handleSubmit(e)}>
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
            Already have an account? <a href="">Log In</a>{" "}
          </p>
        </div>
        <div className="bgImageContainer">
          <img className="bgImage" src={bgImage} alt="" />
=======
          <Button
            className={classes.button}
            variant='contained'
            color='primary'
          >
            <FaGoogle className='faGoogle' />
            Sign Up With Google
          </Button>
          <p>OR</p>
          <TextField
            className={classes.input}
            required
            placeholder='Input Your Full Name'
            id='outlined-basic'
            label='Full Name'
            value={inputForm.firstname}
            onChange={(e) =>
              setInputForm({
                ...inputForm,
                firstname: e.target.value,
              })
            }
            variant='outlined'
          />

          <TextField
            className={classes.input}
            required
            placeholder='Input Your Email'
            id='outlined-basic'
            label='Email'
            value={inputForm.email}
            onChange={(e) =>
              setInputForm({
                ...inputForm,
                email: e.target.value,
              })
            }
            variant='outlined'
          />

          <TextField
            className={classes.input}
            required
            placeholder='Input Your Email'
            id='outlined-basic'
            label='Email'
            value={inputForm.password}
            onChange={(e) =>
              setInputForm({
                ...inputForm,
                password: e.target.value,
              })
            }
            variant='outlined'
          />

          <Button
            className={classes.button}
            variant='contained'
            color='primary'
          >
            Sign Up
          </Button>
          <p>
            Already have an account? <a href=''>Log In</a>{' '}
          </p>
        </div>
        <div className='bgImageContainer'>
          <img className='bgImage' src={bgImage} alt='' />
>>>>>>> 77d28ea2cdcd0bc48b8a3107f12af0495f78c773
        </div>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
};

<<<<<<< HEAD
// export default RootContextConsumer (SignUp)
=======
>>>>>>> 77d28ea2cdcd0bc48b8a3107f12af0495f78c773
export default SignUp;
