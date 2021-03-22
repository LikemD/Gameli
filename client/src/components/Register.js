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
      password: ''
  })
  const { register } = useContext(GlobalContext)
  
  const handleChange = e => {
    const value = e.target.value
      setState({
        ...state,
        [e.target.name]: value
      })
  }
  
  const handleRegister = async() => {
    register({username: state.username , password: state.password})
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
            <IconButton edge="start" className={{marginRight:"theme.spacing(2)"}} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={{flexGrow:"1"}}>
                Enter User Details
            </Typography>
            </Toolbar>
        </AppBar>
        <Grid container justify="center" className={{marginTop:"theme.spacing(2)"}}>
          <Box>
            <TextField
            id='standard-basic' 
            hintText = 'Enter Your Username'
            label = 'Username'
            name='username'
            onChange={handleChange}
            value = {state.username}
            />
            <br/>
            <TextField
            id='standard-basic' 
            hintText = 'Password'
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

