import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Bookcomp from '../components/Bookcomp'
import Reviews from '../components/Reviews'

export default function Book(props){
    const [detail,setDetail]=useState({})

    const getBookDetail=()=>{
        if (!localStorage.getItem('token')){
            props.history.push('/login')
        }
        else{

            let token = localStorage.getItem('token')

            axios.get('http://127.0.0.1:8000/api/bookdetailview?id='+props.match.params.id,{ 'headers': { Authorization: `Token ${token}` }})
            .then(response=>setDetail(response.data))
        }
    }

    useEffect(getBookDetail,[])

    return (<div>
        <Bookcomp 
            id={detail.id}
            name={detail.name}
            availability={detail.availability}
            description={detail.description}
            year={detail.year}
            src={detail.image}
            author={detail.author}
        />
        <Reviews id={props.match.params.id}/>
    </div>)
}