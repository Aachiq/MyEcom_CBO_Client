import React from 'react'
import { isAuthenticated } from '../helpers/authHelper'
import { logout } from './../helpers/authHelper';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }
  return (
    <div>
    <nav 
      className="navbar navbar-expand-sm bg-black container-fluid"
      style={{display: 'flex', justifyContent: 'space-between'}}    
    >
     <ul className="navbar-nav" >
       <li className="nav-item">
        <a className="navbar-brand text-white" href="#">
         <img src="logo1.png" alt="Avatar Logo" style={{width:'40px'}} className="rounded-pill"/> 
         {' '} Admin
        </a>
       </li>
     </ul>
     <ul className="navbar-nav">
      <li className="nav-item dropdown">
       {
        !isAuthenticated() && (<Link className="navbar-brand text-white" to="/">
         Login
        </Link>
        )
       }
       {
        isAuthenticated() && (
        <span className='text text-white' 
              style={{ cursor: 'pointer'}}
              onClick={handleLogout}>
          Logout
        </span>
        )
       }
      </li>
     </ul>  
    </nav>
    </div>
  )
}
