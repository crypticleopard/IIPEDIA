import React,{useState,useEffect} from "react"
import axios from 'axios'
import Bookcard from '../components/Bookcard'
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

export default function Search(props){
    const classes = useStyles();
    const [details,setDetails]=useState([])

    const searchBooks=()=>{
        if (!localStorage.getItem('token')){
            props.history.push('/login')
        }
        else{
            let token = localStorage.getItem('token')
            axios.get("http://127.0.0.1:8000/api/searchbooks?query="+props.match.params.query,{ 'headers': { Authorization: `Token ${token}` } })
            .then(res=>{
                if(res.status===204)
                {
                    return setDetails('No books Found')
                }
                let data=res.data
                let Data=data.map((detail)=>
                <Grid item xs={12} md={4}>
                    <Bookcard
                    id={detail.id}
                    title={detail.name}
                    author={detail.author}
                    content={detail.description}
                    src={detail.image}
                    availability={detail.availability}
                    year={detail.year}
                    />
                </Grid>)
                return setDetails(Data)
            })
            }
        
        }

    useEffect(searchBooks,[])
    
    return (
        <MuiThemeProvider theme={theme}>
        <Grid container spacing={0} className={classes.gridContainer}>
        <Grid item xs={12}><Typography variant='h3'>Search Results</Typography></Grid>
        {details}
        </Grid>
        </MuiThemeProvider>
    )
}
