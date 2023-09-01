import React from 'react'
import './SideBar.css'
export default function SideBar() {
  return (
    <div>
         <ul class="nav flex-column ">
            <li class="nav-item dropdown sidebar-list">
              <a class="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#">Categories</a>
             <ul class="dropdown-menu w-100">
              <li><a class="dropdown-item" href="#">List Products</a></li>
              <li><a class="dropdown-item" href="#">Add New</a></li>
             </ul>
            </li>
            <li class="nav-item dropdown sidebar-list">
              <a class="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#">Products</a>
             <ul class="dropdown-menu w-100">
              <li><a class="dropdown-item" href="#">List Categories</a></li>
              <li><a class="dropdown-item" href="#">Add New</a></li>
             </ul>
            </li>
            <li class="nav-item dropdown sidebar-list">
              <a class="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#">Orders</a>
             <ul class="dropdown-menu w-100">
              <li><a class="dropdown-item" href="#">List Orders</a></li>
              <li><a class="dropdown-item" href="#">Add New</a></li>
             </ul>
            </li>

         </ul> 
    </div>
  )
}
