import {
  Box,
  Button,
  TextField,
  Typography,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useContext } from 'react';
import bgImage from '../../image/signin_bg.png';
import { ContextStore } from '../../../context/store/ContextStore';
import { signInAction } from '../../../context/actions/SignInAction';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { userLogin } from '../../../context/actions/userLoginAction';
import { colors } from '../../../master/constant/style';
import { Container, FormLogin } from './SignIn.elemen';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      PlinPlant {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const SignIn = () => {
  const history = useHistory();

  const context = useContext(ContextStore);
  const { signInState, signInDispatch, userLoginDispatch } = context;

  // ::: MATERIAL UI TEMPLATE SETUP :::
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // ::: END OF MATERIAL UI TEMPLATE SETUP :::

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
    data.append('email', form.email);
    data.append('password', form.password);

    try {
      let res = await axios.post('http://localhost:5000/auth/login', data, {
        headers: {
          'content-type': 'multipart/form-data',
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
<<<<<<< HEAD
      getDataSignInAPI();
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
=======
      // getDataSignInAPI();
      console.log(`SUBMIT RES: `, res);

      userLoginDispatch(userLogin(res.data));

      localStorage.setItem('userInfo', JSON.stringify(res.data));
      if (res.status === 200) {
        //   setLoginStatus(true);
        //   signInDispatch(signInAction('loginStatus', res));
        history.push('/');
        //   if (loginStatus === true) {
        //     setLoginName(res.data.result[0].fullname);
        //   }
        //   // signInDispatch(signInAction("loginStatus", res.data));
>>>>>>> 30c83d079c135ec682733b7fdadf1e029a65029d
      }
      console.log(`res submit: `, res);
    });
  };

  return (
    <main style={{ backgroundColor: colors.white }}>
      <Container>
        <div>
          <FormLogin>
            <h1>PlinPlant</h1>

            <p>Masukkan email dan password.</p>

            <form
              encType='multipart/form-data'
              onSubmit={(e) => handleSubmit(e)}
              noValidate
              autoComplete='off'
            >
              {/* Email input */}
              <TextField
                className='form-field'
                required
                placeholder='Masukkan Email'
                id='outlined-basic'
                label='Email'
                value={signInState.email}
                onChange={(e) =>
                  signInDispatch(signInAction('email', e.target.value))
                }
                variant='outlined'
              />

              {/* Password input */}
              {/* <TextField
                className='form-field'
                required
                placeholder='Masukkan Password'
                id='outlined-basic'
                label='Password'
                value={signInState.password}
                onChange={(e) =>
                  signInDispatch(signInAction('password', e.target.value))
                }
                variant='outlined'
              /> */}
              <FormControl className='form-field' variant='outlined'>
                <InputLabel htmlFor='outlined-adornment-password'>
                  Password
                </InputLabel>
                <OutlinedInput
                  label='Password'
                  placeholder='Masukkan Password'
                  required
                  id='outlined-adornment-password'
                  type={values.showPassword ? 'text' : 'password'}
                  value={signInState.password}
                  onChange={(e) =>
                    signInDispatch(signInAction('password', e.target.value))
                  }
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>

              {/* Sign In button */}
              <Button
                className='btn-login'
                variant='contained'
                color='primary'
                type='submit'
              >
                Sign In
              </Button>
            </form>

            {/* forgot password */}
            {/* <p>
              <a href=''>Forgot password?</a>
            </p> */}

            {/* dont have account */}
            <p>
              Belum punya akun PlinPlant? <Link to='/register'>Sign Up</Link>
            </p>
          </FormLogin>

          <img src={bgImage} alt='' />
        </div>

<<<<<<< HEAD
      {/* TESTING LOGOUT */}
      {<button onClick={handleLogOut}>Logout</button>}
      <br />
      {/* {signInState.loginStatus.auth && (
        <button onClick={checkUserAuth}>check auth</button>
      )} */}

      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
=======
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </main>
>>>>>>> 30c83d079c135ec682733b7fdadf1e029a65029d
  );
};

export default SignIn;
