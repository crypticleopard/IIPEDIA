import React,{useState,useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import Createpost from '../components/Createpost'
import Reviewcard from '../components/Reviewcard'

const useStyles = makeStyles((theme) => ({
    gridContainer: {
      paddingTop:'80px',
      paddingLeft:'20%',
      paddingRight:'20%',
    },
  }));

export default function Community(){
    const classes = useStyles();

    const [details,setDetails]=useState([])

    const getPosts=()=>{
      if (!localStorage.getItem('token')){
        window.location.replace('http://localhost:3000/login')
      }
      else{
  
          let token = localStorage.getItem('token')
  
          axios.get('http://127.0.0.1:8000/api/getcommunity',{ 'headers': { Authorization: `Token ${token}` }})
          .then(res=>res.data)
          .then(data=>
              data.map((detail)=>
              <Reviewcard
                first_name={detail.first_name}
                last_name={detail.last_name}
                username={detail.username}
                date={detail.date}
                main={detail.main}
              />))
          .then(data=>setDetails(data))
          .catch(err=>{
            console.log(err.response)
          })
      }
    }
  
    useEffect(getPosts,[])
    return <Grid container spacing={0} className={classes.gridContainer}>
        <Typography variant='h2' gutterBottom='true'>Community</Typography>
        <Createpost/>
        {details}
    </Grid>
}