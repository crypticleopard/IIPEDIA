import React,{useState,useEffect} from "react"
import axios from 'axios'
import Bookcard from './Bookcard'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
      primary: {
          main:'#ffffff'
      },
      secondary:{
        main:'#00308F'
    }
    },
  });

const useStyles = makeStyles((theme) => ({
    gridContainer: {
      padding:'80px',
    },
  }));

export default function Books(props){
    const classes = useStyles();
    const [details,setDetails]=useState([])

    const getBookDetails=()=>{
        if (!localStorage.getItem('token')){
            props.history.push('/login')
        }
        else{
            let token = localStorage.getItem('token')
            axios.get("http://127.0.0.1:8000/api/bookview",{ 'headers': { Authorization: `Token ${token}` } })
            .then(res=>res.data)
            .then(data=>
                data.map((detail)=>
                <Grid item xs={12} md={4}>
                    <Bookcard
                    id={detail.id}
                    history={props.history}
                    title={detail.name}
                    author={detail.author}
                    content={detail.description}
                    src={detail.image}
                    availability={detail.availability}
                    year={detail.year}
                    />
                </Grid>)).then(data=>setDetails(data))}
        
        }

    useEffect(getBookDetails,[])
    
    return (
        <MuiThemeProvider theme={theme}>
        <Grid container spacing={0} className={classes.gridContainer}>
        <Grid item xs={12}> 
            <Typography variant='h1' color="primary">Books</Typography>
        </Grid>
        {details}
        </Grid>
        </MuiThemeProvider>
    )
}