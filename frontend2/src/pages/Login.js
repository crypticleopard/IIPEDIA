import React,{useState} from 'react'
import { Grid,Paper, TextField, Button, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import Image from '../images/loginbackground.jpg'
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    loginContainer: {
      height:'100vh',
      paddingTop:'80px',
    },
  }));

  const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
  const btnstyle={margin:'30px 0',backgroundColor:'#03DAC6'}
  const Logostyle={
      fontFamily: 'Kaushan Script',
      fontSize: '40px',
      textDecoration:'none',
      color:'#000000',
}
const backgroundstyle={
    zIndex:'-1',
    objectFit:'cover',
    position:'fixed',
    height:'100vh',
    width: '100vw',
}
  
const Login = (props) => {
    const classes = useStyles();
    const [roll,setRoll]= useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')

    const loginButtonClicked=()=>{
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/userlogin',
            data: {
                'username':roll,
                'password':password,
            }
          })
          .then(response=> {
              if(response.status>=200||response.status<300){
                  console.log(response.status)
                  localStorage.setItem('token', response.data.token);
                  props.history.push('/')
              }
          })
          .catch((err) => {
            setError(err.response.statusText)
            console.log(err.response);
          });
      }

    return (
        <div>
        <img src={Image} className='background-img' style={backgroundstyle} alt='background'/>
        <Grid container spacing={0} className={classes.loginContainer}>
        <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <div style={Logostyle}>IIPEDIA</div>
                    <h2>Sign In</h2>
                </Grid>
                <TextField
                    error={error}
                    autoFocus
                    label='Username' 
                    placeholder='Enter username' 
                    helperText={error}
                    value={roll}
                    onChange={(e)=>{setRoll(e.target.value)}} 
                    fullWidth/>
                <TextField
                    error={error} 
                    label='Password' 
                    placeholder='Enter password' 
                    type='password'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    helperText={error}
                    fullWidth/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={loginButtonClicked} fullWidth>Sign in</Button>
                <Typography > You don't have an account ?
                     <Link to='/register'>
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </div>
    )
}

export default Login
