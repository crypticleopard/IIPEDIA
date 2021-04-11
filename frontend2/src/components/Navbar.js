import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {menuData} from '../Data/MenuData.js'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

export default function Navbar(){
    const [click, setclick] = useState(false)
    const handleclick=()=>{setclick(!click)}

    return <div className='Nav-container'>
        <Link className='Nav-Logo'>
            IIPEDIA
        </Link>
        <div className='menu-icon' onClick={handleclick}>
        {click?<CloseIcon/>:<MenuIcon/>}
        </div>
        <div className='Menu'>
        {menuData.map(item=>
            <Link to={item.link} className='menu-content'>
                <Typography variant='body2'>
                {item.title}
                </Typography>
            </Link>)}
        </div>
        <form className='Search'>
            <input type='text' placeholder='Search...'/>
            <button className='Search-btn' type="submit"><i class="fa fa-search"></i> Search</button>
        </form>
        </div>
}