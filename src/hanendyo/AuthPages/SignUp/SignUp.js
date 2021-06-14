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
import React, { useContext, useState } from 'react';
import bgImage from '../../image/signup_bg.png';
import { ContextStore } from '../../../context/store/ContextStore';
import { signUpAction } from '../../../context/actions/SignUpAction';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Container, FormRegister } from './SignUp.elemen';
import { colors } from '../../../master/constant/style';
import { Link } from 'react-router-dom';
import AlertSign from '../../../master/components/additional/AlertSign';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      PlinPlant {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const SignUp = () => {
  const history = useHistory();
  const context = useContext(ContextStore);

  const { signUpState, signUpDispatch } = context;

  const [notif, setNotif] = useState(false);
  const [error, setError] = useState('');

  // ::: MATERIAL UI TEMPLATE SETUP :::
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    showPasswordVerify: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPasswordVerify = () => {
    setValues({ ...values, showPasswordVerify: !values.showPasswordVerify });
  };

  const handleMouseDownPasswordVerify = (event) => {
    event.preventDefault();
  };
  // ::: END OF MATERIAL UI TEMPLATE SETUP :::

  const registerAPI = async (form) => {
    try {
      let res = await axios.post(`http://localhost:5000/auth/register`, form);
      // console.log(`register success`);
      return res;
    } catch (err) {
      // console.log(`register error`, err);
      return err;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // POST TO API
    // console.log(`sign up data: `, signUpState);

    if (
      !signUpState.fullname ||
      !signUpState.email ||
      !signUpState.password ||
      !signUpState.password_verify
    ) {
      setError('empty');
      setNotif(true);
    } else {
      if (!signUpState.email.includes('@')) {
        setError('email');
        setNotif(true);
      } else if (signUpState.password.length < 6) {
        setError('password');
        setNotif(true);
      } else if (signUpState.password !== signUpState.password_verify) {
        setError('password_verify');
        setNotif(true);
      } else {
        registerAPI(signUpState).then((res) => {
          if (res.status === 201) {
            history.push('/login');
          } else {
            setError('invalid');
            setNotif(true);
          }
        });
      }
    }

    setTimeout(() => {
      setError('');
      setNotif(false);
    }, 5000);
  };

  return (
    <main style={{ backgroundColor: colors.white }}>
      <Container>
        <div>
          <FormRegister>
            <h1>PlinPlant </h1>

            <p>
              Gabung dan nikmati kemudahan untuk mendapatkan informasi tanaman
              serta bertransaksi di PlinPlant.
            </p>

            <form
              encType='multipart/form-data'
              onSubmit={(e) => handleSubmit(e)}
              noValidate
              autoComplete='off'
            >
              <TextField
                className='form-field'
                required
                placeholder='Masukkan Nama Lengkap'
                id='outlined-basic'
                label='Full Name'
                value={signUpState.fullname}
                onChange={(e) =>
                  signUpDispatch(signUpAction('fullname', e.target.value))
                }
                variant='outlined'
              />

              <TextField
                className='form-field'
                required
                placeholder='Masukkan Email'
                id='outlined'
                label='Email'
                value={signUpState.email}
                onChange={(e) =>
                  signUpDispatch(signUpAction('email', e.target.value))
                }
                variant='outlined'
              />

              {/* <TextField
                className='form-field'
                required
                placeholder='Input Your password'
                id='outlined-basic'
                label='password'
                value={signUpState.password}
                onChange={(e) =>
                  signUpDispatch(signUpAction('password', e.target.value))
                }
                variant='outlined'
              />

              <TextField
                className='form-field'
                required
                placeholder='Verify your password'
                id='outlined-basic'
                label='Verify password'
                value={signUpState.password_verify}
                onChange={(e) =>
                  signUpDispatch(
                    signUpAction('password_verify', e.target.value)
                  )
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
                  id='password'
                  type={values.showPassword ? 'text' : 'password'}
                  value={signUpState.password}
                  onChange={(e) =>
                    signUpDispatch(signUpAction('password', e.target.value))
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

              <FormControl className='form-field' variant='outlined'>
                <InputLabel htmlFor='outlined-adornment-password'>
                  Konfirmasi Password
                </InputLabel>
                <OutlinedInput
                  label='Konfirmasi Password'
                  placeholder='Masukkan Konfirmasi Password'
                  id='password-verif'
                  type={values.showPasswordVerify ? 'text' : 'password'}
                  value={signUpState.password_verify}
                  onChange={(e) =>
                    signUpDispatch(
                      signUpAction('password_verify', e.target.value)
                    )
                  }
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPasswordVerify}
                        onMouseDown={handleMouseDownPasswordVerify}
                        edge='end'
                      >
                        {values.showPasswordVerify ? (
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

              <Button
                className='btn-register'
                variant='contained'
                color='primary'
                type='submit'
              >
                Sign Up
              </Button>
            </form>

            <p>
              Sudah punya akun PlinPlant? <Link to='/login'>Masuk</Link>{' '}
            </p>
          </FormRegister>

          <img src={bgImage} alt='' />
        </div>

        <Box mt={5}>
          <Copyright />
        </Box>

        <AlertSign auth error={error} notif={notif} />
      </Container>
    </main>
  );
};

export default SignUp;
