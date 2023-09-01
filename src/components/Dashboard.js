import React from 'react'
import SideBar from './../common/components/SideBar';

export default function Dashboard() {
  return (
    <div className='conrtainer-fluid'>
    <div className="row">
       <div className="col-md-2 bg-black" style={{ height: '800px'}}>
       <SideBar/>
       </div>
       <div className="col-md-10 mt-2">
        <div className="container">
        <div className="statics">
          <div className="row">
            <div className="col-md-3">
              <div className='text-center bg-primary p-1'>
                <h5>Number Categories</h5>
                <h1 >5</h1>
              </div>
            </div>
            <div className="col-md-3">
              <div className='text-center bg-warning p-1'>
                <h5>Number Products</h5>
                <h1>21</h1>
              </div>
            </div>
            <div className="col-md-3">
              <div className='text-center bg-danger p-1'>
                <h5>Number Orders</h5>
                <h1>150</h1>
              </div>
            </div>
            <div className="col-md-3">
              <div className='text-center bg-secondary p-1'>
                <h5>Number Reviews</h5>
                <h1>80</h1>
              </div>
            </div>
          </div>
         </div>
        </div>

       </div>
    </div>
   </div>
  )
}
