import React, { useState} from 'react'
import './Css/Style.css'
import { 
    TextField,
    makeStyles,
    Button,
    InputAdornment,
    IconButton,
    FormControlLabel,
    Checkbox,
    FormControl,
    Select,
    MenuItem,
    InputLabel
 } from '@material-ui/core'
import {
    Visibility,
    VisibilityOff
} from '@material-ui/icons'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
const useStyles = makeStyles({
    input: {
        width: '40vw',
        margin: '20px 0px'
    }
})

const FormMaterial = () => {
    const classes = useStyles();
    const [validationPassword, setValidationPassword] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [listGender, setListGender] = useState([
        {
            Pk_id_gender: 1,
            gender: 'Male'
        },
        {
            Pk_id_gender: 2,
            gender: 'Female'
        }
    ])
    const [input, setDataInput] = useState({
        firstname : '',
        password : '',
        term : false,
        gender : 0,
        dob : new Date()
    })
    const handleSubmit = () => {
        console.log(input)
        const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (input.password.match(passw)) {
            setValidationPassword(true)
        }else{
            setValidationPassword(false)
        }
    }
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleDateChange = (date) => {
        setDataInput({
            ...input, dob: date
        });
    };
    return (
        <div className="divForm">
            <h1>This is Form Material UI</h1>
            {/* <p>{input.firstname}</p> */}
            <div className="txtField">
            {/* <TextField id="standard-basic" label="First Name" />
            <TextField id="filled-basic" label="First Name" variant="filled" /> */}
                <TextField
                className={classes.input} 
                required
                placeholder="Fill Your First Name"
                helperText="Fill Your First Name"
                id="outlined-basic" 
                label="First Name"
                value={input.firstname}
                onChange={(e)=>setDataInput({
                    ...input, firstname:e.target.value
                })} 
                variant="outlined" />

                <TextField
                error = {validationPassword?false:true}
                className={classes.input} 
                required
                type={showPassword?"Text":"Password"}
                helperText={validationPassword?"Fill Uppercase, Lowercase and Number":"Wrong Password"}
                id="outlined-basic" 
                label="Password"
                value={input.password}
                onChange={(e)=>setDataInput({
                    ...input, password:e.target.value
                })} 
                InputProps={{
                    endAdornment:
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                }}

                variant="outlined" />

                <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                        className={classes.input}
                        style={{textAlign:'left'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={input.gender}
                        onChange={(e)=> setDataInput({
                            ...input, gender:e.target.value
                        })}
                        >
                        <MenuItem value={0}>Choose Gender</MenuItem>
                        {/* <MenuItem value={1}>Male</MenuItem>
                        <MenuItem value={2}>Female</MenuItem> */}
                        {
                            listGender.map((item)=>
                            <MenuItem value={item.Pk_id_gender}>{item.gender}</MenuItem>
                        )}
                        </Select>
                </FormControl>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    className={classes.input}
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="dd-MM-yyyy"
                    value={input.dob}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </MuiPickersUtilsProvider>

                <FormControlLabel
                        className={classes.input}
                        control={
                        <Checkbox
                            checked={input.term}
                            onChange={(e)=>setDataInput({
                                ...input, term:e.target.checked
                            })}
                            name="checkedB"
                            color='primary'
                        />
                        }
                        label="Term & Conditions"
                    />

                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    )
}

export default FormMaterial
