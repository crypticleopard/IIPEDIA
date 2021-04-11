import React,{useState,useEffect} from 'react'
import './Newscomp.css'
import {SliderData} from '../Data/SliderData'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Image from '../images/background1.jpg'

export default function Newscomp(){

    const [current,setCurrent]=useState(0);
    const length=SliderData.length;
    let id = null
    
    const nextSlide=()=>{
        if(id){clearTimeout(id)}
        setCurrent(current===length-1?0:current+1)
    }
    const prevSlide=()=>{
        if(id){clearTimeout(id)}
        setCurrent(current===0?length-1:current-1)
    }

    /*useEffect(()=>{
        const nextSlide=()=>setCurrent(current===length-1?0:current+1)
        id=setTimeout(nextSlide,5000)
        return ()=>{if(id){clearTimeout(id)}}
    },[current])*/
   
   return (<div className='News-container'>
        <img src={Image} className='background-img' alt='background'/>
        <div className='News-wrapper'>
        {SliderData.map((slide,index)=>
        <div className={index===current?'Slider active':'Slider'} key={index}>
            {index===current&&
                <div className='Slide'>
                <img src={slide.image} className='slide-img' alt={slide.alt}/>
                <div className='wrc'/>
                <div className={slide.class}>
                    {slide.description}
                </div>
                </div>
            }
        </div>
        )}
        <div className='Arrow back' onClick={prevSlide}><ArrowBackIosIcon fontSize='large'/></div>
        <div className='Arrow forward' onClick={nextSlide}><ArrowForwardIosIcon fontSize='large'/></div>
        </div>
    </div>)
}