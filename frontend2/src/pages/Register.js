import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from '../images/registerbackground.jpg';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  registerContainer: {
      height:'100vh',
      paddingTop:'80px',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register(props) {
  const classes = useStyles();
  const [roll,setRoll]= useState('')
  const [email,setEmail]= useState('')
  const [firstName,setFirstName]= useState('')
  const [lastName,setLastName]= useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState({})

  const registerButtonClicked=()=>{axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/createuser',
    data: {
        'username':roll,
        'password':password,
        'email':email,
        'first_name':firstName,
        'last_name':lastName,
    }
  })
  .then(response=> {
      if(response.status>=200||response.status<300){
          console.log(response.status)
          props.history.push('/login')
      }
  })
  .catch((err) => {
    setError(err.response.data)
    console.log(err.response);
  });}

  const Logostyle={
    fontFamily: 'Kaushan Script',
    fontSize: '40px',
    marginTop:'30px',
    textDecoration:'none',
    color:'#000000',
}

const backgroundstyle={
    zIndex:'-1',
    objectFit:'cover',
    position:'fixed',
    top:'0',
    height:'100vh',
    width: '100vw',
}

  return (
    <div className={classes.registerContainer}>
    <img src={Image} className='background-img' style={backgroundstyle} alt='background'/>
    <Container style={{background:'#ffffff'}} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid align='center'>
            <div style={Logostyle}>IIPEDIA</div>
        </Grid>
        <Typography component="h1" variant="h5" style={{marginBottom:'30px'}}>
          Sign up
        </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                error={error.first_name}
                value={firstName}
                onChange={(e)=>{setFirstName(e.target.value)}}
                helperText={error.first_name}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                error={error.last_name}
                value={lastName}
                onChange={(e)=>{setLastName(e.target.value)}}
                helperText={error.last_name}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Roll"
                label="Roll no."
                name="Roll"
                error={error.username}
                value={roll}
                onChange={(e)=>{setRoll(e.target.value)}}
                helperText={error.username}
                autoComplete="Roll no."
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                error={error.email}
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                helperText={error.email}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                error={error.password}
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                helperText={error.password}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={registerButtonClicked}
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item style={{marginBottom:'30px'}}>
            <Typography>Already have an account?<Link to='/login' variant="span"> Sign in</Link></Typography>
            </Grid>
          </Grid>
      </div>
    </Container>
    </div>
  );
}