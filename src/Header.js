import React from 'react'
import './Header.css'
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from "@mui/icons-material/Search"
import  HelpOutline  from '@mui/icons-material/HelpOutline';
import { useStateValue } from './StateProvider';

const Header = () => {

  const [{user}] = useStateValue();

  return (
  <div className='header'>
   <div className="header__left">
    

    <Avatar
     className="header__avatar"
      alt={ user?.displayName }
       src={user?.photoURL}

       />
     <AccessTimeIcon />
   </div>

   <div className="header__search">
     <SearchIcon />
     <input placeholder='Search Here' />
    
   </div>

   <div className="header__right">
       <HelpOutline />
   </div>
   
    </div>
  )
}

export default Header
