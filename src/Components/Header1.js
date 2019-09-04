import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor:"#ff6d00",

  },
  grow: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  MuiAppBarColorPrimary:{
    color:'#ffff',
    backgroundColor: '#00a9e0',
}
};

function ButtonAppBar(props) {
  const { classes, head , secondary} = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.MuiAppBarColorPrimary}>
        <Toolbar>
         
          <Typography variant="h6" className={classes.grow}>
          Home
          </Typography>
          <Typography variant="h6" className={classes.grow}>
          Our Clients
          </Typography>
          <Typography variant="h6" className={classes.grow}>
          Our Developers
          </Typography>
          <Typography variant="h6" className={classes.grow}>
          Contact us
          </Typography>
          <Link to ='/Login'>
          <button type="button" styles={{width:'100px', height:'30px'}}>Login</button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
