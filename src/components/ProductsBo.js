import React, { useEffect, useState } from 'react'
import SideBar from './../common/components/SideBar';
import { isAuthenticated } from '../common/helpers/authHelper';
import { deleteProductService, getProductsByCategory, getProductsService, paginationProductService, searchProductService, getProductsByPrice } from './../common/apiServices/productService';
import { Link } from 'react-router-dom';
import { getCategoriesService } from './../common/apiServices/categoryService';

export default function ProductsBo() {
  const [products,setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);

  const numberPages = 5;
  const pagiNumbers = Array.from({ length: numberPages });

  const prices = [
    {
      label : "0$ to 50$",
      value : [0,50]
    },
    {
      label : "50$ to 100$",
      value : [50,100]
    },
    {
      label : "over 100$",
      value : [100,999999]
    }
  ]

  // get userBo infos
  const { token, user } = isAuthenticated();

  useEffect(() => {
    // getProductsService()
    // .then((prods) => setProducts(prods))
    // .catch((err) => console.log(err))
    paginationProductService(1)
     .then((prods) => setProducts(prods))
     .catch((err) => console.log(err))
     // get categories
     getCategoriesService().then((cats) => setProductCategories(cats))
     
  },[])

  const deleteProduct = (productId) => {
    console.log(user , token)
    deleteProductService(user.id,token,productId)
    .then(() => {
      setProducts(products.filter((item) => item.id !== productId));
    })
    .catch((err) => console.log(err))
  }

  const handleSearchProduct = (event) => {
    searchProductService(event.target.value)
    .then((prods) => setProducts(prods))
  }
  
  const handlePaginationProduct = (index) => {
    paginationProductService(index)
    .then((prods) => setProducts(prods))
    .catch((err) => console.log(err))
  }

  const handleChangeProductFilterCategory = (event) => {
    getProductsByCategory(event.target.value)
    .then((prods) => setProducts(prods) )
  }

  const handleChangeProductFilterPrice = (event) => {
    // console.log(event.target.value) // 0,50
    // console.log(event.target.value.split(',')) [0,50]
    const priceRange = event.target.value.split(','); // get array from string
    // BODY if takes array ,it shoul be inside object ,so everything inside object.
    const bodyObj = { priceRange }; 
    getProductsByPrice(bodyObj).then((prods) => setProducts(prods))
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
         <div>
          <h6>Filters :</h6>
          <form action="" className='p-2'>
             <div className="form-group d-flex" >
                  <label htmlFor="category">Category :</label>
                  <select name="categoryId" id="id_category" 
                          className='form-control'
                          required 
                          style={{ width: '300px'}}
                          onChange={handleChangeProductFilterCategory} 
                  >
                      <option selected disabled>Choose category</option>
                      {productCategories && productCategories.map((item) => {
                          return (
                              <>
                                <option value={item.id}>{item.name}</option>
                              </>
                          )
                      })}
                  </select>
             </div>
             <div className='d-flex'>
             <label htmlFor="">Price :</label>
             {
              prices.map((item) => {
                return (
                  <>
                    <div className="form-group p-1" >
                      <label htmlFor={item.label}>{item.label}</label>
                       <input type="radio" 
                              name="price1" 
                              id={item.label}
                              value={item.value} 
                              required 
                              onChange={handleChangeProductFilterPrice}
                              style={{ marginLeft:'5px' }}    
                       />                  
                    </div>
                  </>
                )
              })
             }
             </div>
          </form>
         </div>
        </div>
        <div className='mt-2'>
         <table className="table table-hover">
          <thead className="table-secondary">
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
                <Link to={`/update-product/${item.id}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </Link>
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
                  onClick={() => handlePaginationProduct(index+1)}
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
