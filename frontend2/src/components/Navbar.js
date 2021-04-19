import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {menuData} from '../Data/MenuData.js'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

export default function Navbar(props){
    const [query,setQuery]=useState('')
    const [click, setclick] = useState(false)
    const handleclick=()=>{setclick(!click)}

    const handleLogoutClick=()=>{
        localStorage.removeItem("token");
        window.location.replace('http://localhost:3000/login')
    }

    const searchBtnClick=()=>{window.location.replace('http://localhost:3000/search/'+query)}

    return <div className='Nav-container'>
        <Link to='/' className='Nav-Logo'>
            IIPEDIA
        </Link>
        <div className='menu-icon' onClick={handleclick}>
        {click?<CloseIcon/>:<MenuIcon/>}
        </div>
        <div className={click?'Menu active':'Menu'}>
        {menuData.map(item=>
            <Link to={item.link} className='menu-content' onClick={()=>setclick(false)}>
                <Typography variant={click?'h5':'body2'}>
                {item.title}
                </Typography>
            </Link>)}
        </div>
        <div className='functionalities'>
        <div className='Search'>
            <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search...'/>
            <button className='Search-btn' onClick={searchBtnClick} type="submit"><i class="fa fa-search"></i> Search</button>
        </div>
        <button className={click?'logout-btn active':'logout-btn'} onClick={handleLogoutClick}>Logout</button>
        </div>
        </div>
}