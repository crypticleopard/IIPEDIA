import React,{useState,useEffect} from 'react'
import CreateReview from './CreateReview'
import Reviewcard from './Reviewcard'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    gridContainer: {
      paddingTop:'20px',
      paddingLeft:'20%',
      paddingRight:'20%',
    },
  }));

export default function Reviews(props){

  const [details,setDetails]=useState([])

  const getReviews=()=>{
    if (!localStorage.getItem('token')){
      window.location.replace('http://localhost:3000/login')
    }
    else{

        let token = localStorage.getItem('token')

        axios.get('http://127.0.0.1:8000/api/getreviews?id='+props.id,{ 'headers': { Authorization: `Token ${token}` }})
        .then(res=>res.data)
        .then(data=>
            data.map((detail)=>
            <Reviewcard
              id={detail.id}
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

useEffect(getReviews,[])

    const classes = useStyles();
    return <Grid container spacing={0} className={classes.gridContainer}>
        <Typography variant='h3' gutterBottom='true'>Reviews</Typography>
        <CreateReview id={props.id}/>
        {details}
    </Grid>
}