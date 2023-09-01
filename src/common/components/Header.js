import React from 'react'

export default function Header() {
  return (
    <div>
    <nav 
      class="navbar navbar-expand-sm bg-black container-fluid"
      style={{display: 'flex', justifyContent: 'space-between'}}    
    >
     <ul class="navbar-nav" >
       <li class="nav-item">
        <a class="navbar-brand text-white" href="#">
         <img src="logo1.png" alt="Avatar Logo" style={{width:'40px'}} class="rounded-pill"/> 
         {' '} Admin
        </a>
       </li>
     </ul>
     <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#">Acount</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Register</a></li>
          <li><a class="dropdown-item" href="#">Login</a></li>
        </ul>
      </li>
     </ul>  
    </nav>
    </div>
  )
}
