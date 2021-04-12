import React , { useContext, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {ArrowBack} from '@material-ui/icons'

import {GlobalContext} from '../context/GlobalState';

export const Login = (props) => {
    const [state , setState] = useState({
        username: '',
        password: ''
    })

    const { login , userId } = useContext(GlobalContext)
    
    const handleChange = e => {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }

    const handleLogin = async() => {
        login({username: state.username , password: state.password})
        if(userId) props.hasAuthenticatedStep()
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
                <Typography variant="h6">
                    Enter User Details
                </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center">
                <Box mx="auto">
                    <TextField
                    id='standard-basic-username' 
                    hinttext = 'Enter Your Username'
                    label = 'Username'
                    name = 'username'
                    onChange={handleChange}
                    value = {state.username}
                    />
                    <br />
                    <TextField
                    id='standard-basic-password' 
                    hinttext = 'Enter Your Password'
                    label = 'Password'
                    name = 'password'
                    onChange={handleChange}
                    value = {state.password}
                    />
                    <br/>
                    <Button variant='contained' color='primary' 
                    label = 'Continue'
                    onClick = {()=>handleLogin()}
                    style = {styles.button}
                    >
                        Login
                    </Button>
                    <br />
                    <br />
                    <ArrowBack onClick={()=>handleBack()}>Back</ArrowBack>
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
export default Login;

