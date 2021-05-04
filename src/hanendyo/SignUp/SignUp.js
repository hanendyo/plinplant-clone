import { Box, Button, Link, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import bgImage from '../image/signup_bg.png'
import './style.css'

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

const SignUp = () => {
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
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, officia.</p>
                    <Button className={classes.button}  variant="contained" color="primary">Sign Up With Google</Button>
                    <p>OR</p>
                    <TextField 
                        className={classes.input} 
                        required
                        placeholder="Input Your Full Name"
                        id="outlined-basic" 
                        label="Full Name"
                        value={inputForm.firstname}
                        onChange={(e)=>setInputForm({
                            ...inputForm, firstname:e.target.value
                        })} 
                        variant="outlined" />
                    
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
                    
                    <TextField 
                        className={classes.input} 
                        required
                        placeholder="Input Your Email"
                        id="outlined-basic" 
                        label="Email"
                        value={inputForm.password}
                        onChange={(e)=>setInputForm({
                            ...inputForm, password:e.target.value
                        })} 
                        variant="outlined" />
                    
                    <Button className={classes.button} variant="contained" color="primary">Sign Up</Button>
                    <p>Already have an account? <a href="">Log In</a>  </p>
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

export default SignUp
