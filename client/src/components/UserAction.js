import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import { Grid , Button} from '@material-ui/core';


export const UserAction = (props) => {
  const [open,setOpen] = useState(false)

  const handleSignIn = () => {
    props.loginStep()
  }

  const handleSignUp = () => {
    props.registerStep()
  }

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
      <React.Fragment>
        <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpen}>
                  <MenuIcon open={open}/>
              </IconButton>
              <Typography variant="h6">
                  Sign Up
              </Typography>
            </Toolbar>
        </AppBar>
        <Grid container justify='center' alignContent='center'>
          <Button variant='contained' color='primary' 
          label = 'Continue'
          onClick = {()=>handleSignIn()}
          style = {styles.button}
          >
              Login
          </Button>

          <Button variant='contained' color='primary' 
          label = 'Continue'
          onClick = {()=>handleSignUp()}
          style = {styles.button}
          >
              Register
          </Button>
        </Grid>
      </React.Fragment>
  )
}
const styles = {
  button: {
    margin: 15
  }
}

export default UserAction;