import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor:"#ff6d00",
      padding:"40",
      borderRadius:10,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    grdmrg:{
        padding:'15px'
    },

    card: {
        maxWidth: 345,
      },
      media: {
        height: 240,
        width: 240,
      },

      bigAvatar: {
        margin: 10,
        width: 240,
        height: 240,
      },
      button:{
          fontSize: '0.675rem',
          float:'right',
          backgroundColor:'#00a9e0',
          color:'#ffff'
      }
     
  });
const categories = [
    {
        Image: "http://www.logo-designer.co/wp-content/uploads/2014/10/Lippincott-brand-identity-logo-tagline-JDA-Software.jpg",
        title: "Jda Demand ",
        Description: "Enterprize application ",
    },
    
    {
        Image: "https://static.brusheezy.com/system/resources/previews/000/051/505/original/3d-8-point-golden-star-psd-photoshop-psds.jpg",
        title: "Star 8 ",
        Description: "Finance application",
    },
    {
        Image: "data:image/png;base64,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",
        title: "Certintell",
        Description: "Health Care Application",
    },{
        Image: "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/72/27/fd/7227fd8e-2870-f516-0619-0e04aea7099e/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-10.png/320x0w.jpg",
        title: "YouKnow",
        Description: "Education Application",
    },{
      Image: "data:image/jpeg;base64,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",
      title: "GrabbnGo",
      Description: "Food Application",
  }
  ];
  
  function MediaCard(props) {
    const { classes } = props;
  
    return (
   // <Carousel centerMode showThumbs={false}>
      
      <div>
      <Grid container >         

{categories.map((data, index) => (


<Grid item md={3} className = {classes.grdmrg}>
{/* <Paper className={classes.paper}> */}

<Card className={classes.card}>
<CardActionArea>

<CardContent>
<Avatar alt="Remy Sharp" src = {data.Image} style = {{margin : 'auto'}} />

<Typography gutterBottom variant="h5" component="h2">
{data.title}

<Button variant="contained"  className={classes.button}>
        Watch
      </Button>
      </Typography> 
<Typography gutterBottom variant="h6" component="h6">
{data.Description}
</Typography>

</CardContent>
</CardActionArea>

</Card>
{/* </Paper> */}
</Grid>
 
))}
 </Grid>
      </div>
  //  </Carousel>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
