import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),

  },
  title: {
    flexGrow: 1,
  },
  tool: {
      color: "white"
  }
}));
export default function Appbar() {
    const classes = useStyles();
  
return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
            <MenuIcon />
            <img src="./logo.png"></img>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          <Button color="black">Log in</Button>
          <Button color="black">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
