import React from 'react'
import CreateReview from './CreateReview'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    gridContainer: {
      paddingTop:'20px',
      paddingLeft:'20%',
      paddingRight:'20%',
    },
  }));

export default function Reviews(){
    const classes = useStyles();
    return <Grid container spacing={0} className={classes.gridContainer}>
        <Typography variant='h3' gutterBottom='true'>Reviews</Typography>
        <CreateReview/>
    </Grid>
}