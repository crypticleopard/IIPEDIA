import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    gridContainer: {
      paddingTop:'80px',
      paddingLeft:'20%',
      paddingRight:'20%',
    },
    bookDescription:{
        paddingTop:'10px',
        paddingBottom:'10px',
    },
    bookimg:{
        maxWidth:'80%',
    }
  }));

export default function Bookcomp(props){
    const classes = useStyles();
    const src="http://127.0.0.1:8000"+props.src;

    return <Grid container spacing={0} className={classes.gridContainer}>
    <Grid item xs={12}>
        <Typography variant='h2' gutterBottom='true'>{props.name}</Typography>
    </Grid>
    <Grid item xs={12} md={8}>
        <img src={src} alt="bookimage" className={classes.bookimg}/>
    </Grid>
    <Grid item xs={4} container spacing={0} alignItems='center' >
        <Grid item xs={12}>
        <Typography variant='h6'>Author: {props.author}</Typography>
        <Typography variant='h6'>Number of Books currently in library: {props.availability}</Typography>
        <Typography variant='h6'>Recommend for {props.year}</Typography>
        </Grid>
    </Grid>
    <Grid item xs={12} className={classes.bookDescription}>
        <Typography variant='h3' gutterBottom='true'>About</Typography>
        <Typography>{props.description}</Typography>
    </Grid>
    </Grid>
}