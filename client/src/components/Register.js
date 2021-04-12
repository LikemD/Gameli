import React , { useContext, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import {ArrowBack} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'

import {GlobalContext} from '../context/GlobalState';

//import {encrypt} from '../utils/encrypt';


export const Register = (props) => {
  const [state , setState] = useState({
      username: '',
      password: '',
      firstName: '',
      lastName: ''
  })
  const { register  } = useContext(GlobalContext)
  
  const handleChange = e => {
    const value = e.target.value
      setState({
        ...state,
        [e.target.name]: value
      })
  }
  
  const handleRegister = async() => {
    register({username: state.username , password: state.password , firstName: state.firstName , lastName: state.lastName})
    const agree = window.confirm('Registration complete. Press OK to go to login')
    if (agree) handleBack()
  }

  const handleBack = () => {
    props.actionStep()
  }

  return (
    <React.Fragment>
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" >
                Enter User Details
            </Typography>
            </Toolbar>
        </AppBar>
        <Grid container justify="center">
          <Box>
          <TextField
            id='standard-basic-firstName'
            label = 'First Name'
            name='firstName'
            onChange={handleChange}
            value = {state.firstName}
            />
            <br/>
            <TextField
            id='standard-basic-lastName' 
            hinttext = 'Enter Your Last Name'
            label = 'Last Name'
            name='lastName'
            onChange={handleChange}
            value = {state.lastName}
            />
            <br/>
            <TextField
            id='standard-basic-username' 
            hinttext = 'Enter Your Username'
            label = 'Username'
            name='username'
            onChange={handleChange}
            value = {state.username}
            />
            <br/>
            <TextField
            id='standard-basic-password' 
            hinttext = 'Password'
            label = 'Password'
            name='password'
            onChange={handleChange}
            value = {state.password}
            />
            <br/>
            <Button variant='contained' color='primary' 
            label = 'Continue'
            onClick = {()=>handleRegister()}
            style = {styles.button}
            >
                Register
            </Button>
            <br />
            <br />
            <ArrowBack onClick={()=>handleBack()}></ArrowBack>
          </Box>
        </Grid>
    </React.Fragment>
  )
        
    
}

const styles = {
    button: {
        margin : 15
    }
}
export default Register;

