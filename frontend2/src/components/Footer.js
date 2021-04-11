import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
      primary: {
          main:'#ffffff'
      },
      secondary:{
        main:'#00308F'
    },
    },
  });

  const useStyles = makeStyles((theme) => ({
    gridContainer: {
      padding:'80px',
      background:'#232323',
    },
    copyright:{
        paddingTop:'20px'
    },
    address:{
        paddingTop:'50px',
        paddingBottom:'50px',
    },
  }));

export default function Footer(){

    const classes = useStyles();

    return <MuiThemeProvider theme={theme}>
        <Grid container className={classes.gridContainer} justify='center'>
            <Grid item xs={12} md={8}>
            <Typography variant='h2' color='primary'>You will be transformed by what you read </Typography>
            </Grid>
            <Grid item xs={6} md={2} container spacing={0}>
            <Grid item xs={12}><Typography variant='subtitle1' color='primary'>Quick Links</Typography></Grid>
            <Grid item xs={12}><Link><Typography variant='subtitle2' color='primary'>Home</Typography></Link></Grid>
            <Grid item xs={12}><Link><Typography variant='subtitle2' color='primary'>About</Typography></Link></Grid>
            <Grid item xs={12}><Link><Typography variant='subtitle2' color='primary'>Community</Typography></Link></Grid>
            </Grid>
            <Grid item xs={6} md={2} container spacing={0}>
            <Grid item xs={12}><Typography variant='subtitle1' color='primary'>Contact Us</Typography></Grid>
            <Grid item xs={12}><Link><Typography variant='subtitle2' color='primary'>IIPE</Typography></Link></Grid>
            <Grid item xs={12}><Link><Typography variant='subtitle2' color='primary'>Contact</Typography></Link></Grid>
            <Grid item xs={12}><Link><Typography variant='subtitle2' color='primary'>Instagram</Typography></Link></Grid>
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={4}>
            <Typography variant='h6' color='primary'className={classes.address}>2nd Floor, AU Engg College Main Block, Andhra University, Visakhapatnam, Andhra Pradesh 530003</Typography>
            </Grid>
            <Grid item xs={1} className={classes.copyright}>
                <Typography variant='overline' color='primary'>©2021 IIPEDIA</Typography>
            </Grid>
        </Grid>
    </MuiThemeProvider>
    
}