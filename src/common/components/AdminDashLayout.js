import React from 'react'
import SideBar from './SideBar'

export default function AdminDashLayout() {
  return (
    <div className='conrtainer-fluid'>
     <div className="row">
        <div className="col-md-2 bg-black" style={{ height: '800px'}}>
        <SideBar/>
        </div>
        <div className="col-md-10">
          
        </div>
     </div>
    </div>
  )
}
