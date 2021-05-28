import { Box, Button, Link, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import bgImage from '../../image/signin_bg.png'
import {FaGoogle} from 'react-icons/fa'
import './SignIn.css'

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="">
          PlinPlant
        </Link>
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles({
    input: {
        width: '80%',
        margin: '5px 0',
        backgroundColor: 'rgba(187, 203, 194, 0.2)',
        
    },
    button: {
        width: '80%',
        margin: '5px 0',
        backgroundColor: 'rgb(187, 203, 194)',
        color: 'primary'
    },
    copyright: {}
})

const SignIn = () => {
    const classes = useStyles()
    const [inputForm, setInputForm] = useState({
        firstname : '',
        email: '',
        password : '',
        term : false,
        gender : 0,
    })

    return (    
        <div className='container'>
            <div className="content">
                <div className="txtFields">
                    <h1>PlinPlant</h1>
                    
                    {/* Email input */}
                    <TextField 
                        className={classes.input} 
                        required
                        placeholder="Input Your Email"
                        id="outlined-basic" 
                        label="Email"
                        value={inputForm.email}
                        onChange={(e)=>setInputForm({
                            ...inputForm, email:e.target.value
                        })} 
                        variant="outlined" />
                    
                    {/* Password input */}
                    <TextField 
                        className={classes.input} 
                        required
                        placeholder="Input Your Password"
                        id="outlined-basic" 
                        label="Password"
                        value={inputForm.password}
                        onChange={(e)=>setInputForm({
                            ...inputForm, password:e.target.value
                        })} 
                        variant="outlined" />

                    {/* Sign In button */}
                    <Button className={classes.button} variant="contained" color="primary">Sign In</Button>
                    
                    <p>OR</p>
                    
                    {/* Sign In with Google */}
                    <Button className={classes.button}  variant="contained" color="primary"><FaGoogle className='faGoogle'/>Sign In With Google</Button>
                    
                    {/* forgot password */}
                    <p><a href="">Forgot password?</a></p>
                    
                    {/* dont have account */}
                    <p>Don't have an account yet? <a href="">Sign Up</a></p>
                </div>
                <div className="bgImageContainer">
                            <img className='bgImage' src={bgImage} alt=""/>
                </div>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </div>
        
    )
}

export default SignIn
