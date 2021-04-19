import React,{useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

export default function Createpost(props){

    const handlePostClick=()=>{
        if (!localStorage.getItem('token')){
            window.location.replace('http://localhost:3000/login')
        }
        else{
            let token = localStorage.getItem('token')
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/createcommunity?key='+token,
                data: {
                    'main':main
                },
                headers: { Authorization: `Token ${token}`}
              })
              .then(response=> {
                  if(response.status>=200||response.status<300){
                      console.log(response.status)
                      window.location.reload()
                  }
                  })
              .catch((err) => {
              console.log(err.response);
              });
        }
    }

    const[main,setMain]=useState('')
        
    return <Grid item xs={12} container alignItems='center' style={{marginBottom:'30px'}}>
    <Grid item xs={11}>
    <TextField
        fullWidth
        multiline
        id="standard-multiline-flexible"
        label="Community Post"
        placeholder="Write your community post here"
        value={main}
        onChange={(e)=>{setMain(e.target.value)}} 
        rowsMax={4}
    />
    </Grid>
    <Grid item xs={1}>
        <Button variant='outlined' color='primary' onClick={handlePostClick}>POST</Button>
    </Grid>
    </Grid>
}
