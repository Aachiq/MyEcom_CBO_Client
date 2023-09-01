import React from 'react'
import './SideBar.css'
export default function SideBar() {
  return (
    <div>
         <ul class="nav flex-column ">
            <li class="nav-item sidebar-list">
              <a class="nav-link active text text-white" href="#">Categories</a>
            </li>
            <li class="nav-item sidebar-list">
              <a class="nav-link text text-white" href="#">Products</a>
            </li>
            <li class="nav-item sidebar-list">
              <a class="nav-link text text-white" href="#">Orders</a>
            </li>
         </ul> 
    </div>
  )
}
