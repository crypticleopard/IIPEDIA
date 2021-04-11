import React from 'react';
import Newscomp from '../components/Newscomp'
import Books from '../components/Books'

export default function Home(props){
    return <div className='Home'>
    <Newscomp/>
    <Books history={props.history}/>
    </div>
}