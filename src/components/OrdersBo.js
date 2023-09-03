import React, { useEffect, useState } from 'react'
import SideBar from './../common/components/SideBar';
import { isAuthenticated } from '../common/helpers/authHelper';
import { deleteOrderService, getOrdersService, paginationOrderService, searchOrderService } from './../common/apiServices/ordersService';

export default function OrdersBo() {
  const [orders,setOrders] = useState([]);
  const [numberPages,setNumberPages] = useState(0);

  const pagiNumbers = Array.from({ length: numberPages });

  // get userBo infos
  const {token,user} = isAuthenticated();
  useEffect(() => {
    getOrdersService()
    .then((ords) => {
      setNumberPages(Math.ceil(ords.length / 5))
    })
    .catch((err) => console.log(err))
    paginationOrderService(1)
     .then((ords) => setOrders(ords))
     .catch((err) => console.log(err))
  },[])

  const deleteOrder = (orderId) => {
    console.log(user , token)
    deleteOrderService(user.id,token,orderId)
    .then(() => {
      setOrders(orders.filter((item) => item.id !== orderId));
    })
    .catch((err) => console.log(err))
  }

  const handleSearchProduct = (event) => {
    searchOrderService(event.target.value)
    .then((ords) => setOrders(ords))
  }

  const handlePaginationOrder = (index) => {
    paginationOrderService(index)
    .then((ords) => setOrders(ords))
    .catch((err) => console.log(err))
  }

  return (
    <div className='conrtainer-fluid'>
    <div className="row">
       <div className="col-md-2 bg-black" style={{ height: '800px'}}>
       <SideBar/>
       </div>
       <div className="col-md-10">
        <div className="container">
          <div className='pt-2'>
            <form style={{display: "flex", justifyContent:'end'}}>
              <input type="text" id="search" style={{ width: '300px'}} 
                    className="form-control" 
                    onChange={handleSearchProduct}
              />
              <button type='submit' className="btn btn-success">Search</button>
            </form>
          </div>
        <div className='mt-2'>
         <table className="table table-hover">
          <thead className="table-secondary">
           <tr>
            <th>ID</th>
            <th>PHONE</th>
            <th>ADDRESS</th>
            <th>PRODUCT_ID</th>
            <th>ID_USER</th>
            <th>DATE_ORDER</th>
            <th>PAYMENT_TYPE</th>
            <th>AMOUNT</th>
            <th>ACTION</th>
           </tr>
          </thead>
          <tbody>
         { orders && orders.map((item) => {
          return (
            <>
            <tr>
              <td>{item.id}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.id_product}</td>
              <td>{item.id_user}</td>
              <td>{item.date_order}</td>
              <td>{item.payment_type}</td>
              <td>{item.amount}</td>
              <td>
                <span className='p-2 text-danger' style={{cursor:'pointer'}}
                      onClick={() => deleteOrder(item.id)}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                </svg>
                </span>
                <span className='p-2 text-primary' style={{cursor:'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
                </span>
              </td>
            </tr>
            </>
          )
           })}
          </tbody>
         </table>

         <div className="pagination">
          { pagiNumbers.map((_, index) => (
             <div key={index}
                  className='bg-secondary text-white'
                  style={{ border: 'solid 1px',padding:'8px',marginRight: '5px', 
                           cursor:'pointer'
                  }}  
                  onClick={() => handlePaginationOrder(index+1)}
             > 
             { index + 1 } 
             </div>
          ))}
         </div>

        </div>
        </div>
       </div>
    </div>
   </div>
  )
}
