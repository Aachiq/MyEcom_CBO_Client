import React, { useEffect, useState } from 'react'
import SideBar from './../common/components/SideBar';
import { isAuthenticated } from '../common/helpers/authHelper';
import { deleteProductService, getProductsService } from './../common/apiServices/productService';

export default function ProductsBo() {
  const [products,setProducts] = useState([]);
  // get userBo infos
  const {token,user} = isAuthenticated();
  useEffect(() => {
    getProductsService()
    .then((prods) => setProducts(prods))
    .catch((err) => console.log(err))
  },[])

  const deleteProduct = (productId) => {
    console.log(user , token)
    deleteProductService(user.id,token,productId)
    .then(() => {
      setProducts(products.filter((item) => item.id !== productId));
    })
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
          
        <div>
         <h3>Filters & serach</h3>
         <form action="">
          <input type="text" className="form-control" />
          <button className="btn btn-success">Search</button>
         </form>
        </div>
        <div>
         <h6 className='text text-primary'>List Products</h6>
         <table className="table table-hover">
          <thead className="table-dark">
           <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
            <th>QUNATITY</th>
            <th>IMAGE</th>
            <th>CATEGORY</th>
            <th>ACTION</th>
           </tr>
          </thead>
          <tbody>
         { products && products.map((item) => {
          return (
            <>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>
                {/* <img src={`${API_URL}/product/show-image/${user.id}?id=${item.id}`} alt="img-product" /> */}
                <img src={`http://localhost:5000/images/${item.image}`}
                     width={60}
                     height={60}
                     alt="img-product" 
                />
                {/* {item.image} */}
                </td>
              <td>{item.id_category}</td>
              <td>
                <span className='p-2 text-danger' style={{cursor:'pointer'}}
                      onClick={() => deleteProduct(item.id)}
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
         <h2>Pagination</h2>
        </div>
        </div>
       </div>
    </div>
   </div>
  )
}
