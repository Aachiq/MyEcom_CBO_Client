import React from 'react'
import './SideBar.css'
export default function SideBar() {
  return (
    <div>
         <ul className="nav flex-column ">
            <li className="nav-item dropdown sidebar-list">
              <a className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#">Categories</a>
             <ul className="dropdown-menu w-100">
              <li><a className="dropdown-item" href="#">List Products</a></li>
              <li><a className="dropdown-item" href="#">Add New</a></li>
             </ul>
            </li>
            <li className="nav-item dropdown sidebar-list">
              <a className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#">Products</a>
             <ul className="dropdown-menu w-100">
              <li><a className="dropdown-item" href="#">List Categories</a></li>
              <li><a className="dropdown-item" href="#">Add New</a></li>
             </ul>
            </li>
            <li className="nav-item dropdown sidebar-list">
              <a className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#">Orders</a>
             <ul className="dropdown-menu w-100">
              <li><a className="dropdown-item" href="#">List Orders</a></li>
              <li><a className="dropdown-item" href="#">Add New</a></li>
             </ul>
            </li>

         </ul> 
    </div>
  )
}
