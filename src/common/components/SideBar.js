import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom';
export default function SideBar() {
  return (
    <div>
         <ul className="nav flex-column ">
            <li className="nav-item dropdown sidebar-list">
              <Link className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" to="/categoryBo">Categories</Link>
             <ul className="dropdown-menu w-100">
              <li><Link className="dropdown-item" to="/category-bo">List Catgeories</Link></li>
              <li><Link className="dropdown-item" to="#">Add New</Link></li>
             </ul>
            </li>
            <li className="nav-item dropdown sidebar-list">
              <Link className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" to="/product-bo">Products</Link>
             <ul className="dropdown-menu w-100">
              <li><Link className="dropdown-item" to="/product-bo">List Products</Link></li>
              <li><Link className="dropdown-item" to="#">Add New</Link></li>
             </ul>
            </li>
            <li class="nav-item sidebar-list">
              <Link class="nav-link text-white" aria-current="page" to="/orders-bo">Orders</Link>
            </li>

         </ul> 
    </div>
  )
}
