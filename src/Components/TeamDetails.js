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
import ButtonBase from '@material-ui/core/ButtonBase';
import img from './nireesh.JPG';
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
      bigImg: {
        width: 'auto',
        height: 202,
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
        Image: "http://lorempixel.com/output/cats-q-c-640-480-1.jpg",
        title: "Murali",
        Description: "Team Lead ",
    },
    
    {
        Image: "http://lorempixel.com/output/cats-q-c-640-480-10.jpg",
        title: "Anshuman",
        Description: "React developer",
    },
    {
        Image: "http://lorempixel.com/output/cats-q-c-640-480-2.jpg",
        title: "Zohaib",
        Description: "Angular Develper",
    },{
        Image: "http://lorempixel.com/output/cats-q-c-640-480-8.jpg",
        title: "Bikki",
        Description: "React Develper",
    },{
      Image: "http://lorempixel.com/output/cats-q-c-640-480-4.jpg",
      title: "Sushanth",
      Description: "React Develper",
  },{
    Image: "http://lorempixel.com/output/cats-q-c-640-480-5.jpg",
    title: "Shalu",
    Description: "React Develper",
},{
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSnNX-xFJPqnQxjXmPVWUyi3XN8_MkFQsPopHHghO4d-1hHZaLUw",
    title: "Neha",
    Description: "React Develper",
},{
    Image: "data:image/jpeg;base64,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",
    title: "Nireesh",
    Description: "iOS and Xamarin Developer",
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

<Grid container spacing={16} justify="center" >
          <Grid item >
            <ButtonBase className={classes.image} >
              <img className={classes.img} alt="complex" src={data.Image} className={classes.bigImg}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs justify="center">
                <Typography gutterBottom variant="subtitle1">
                  {data.title}
                </Typography>
                <Typography gutterBottom>{data.Description} </Typography>
              </Grid>
              
            </Grid>
           
          </Grid>
        </Grid>
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
