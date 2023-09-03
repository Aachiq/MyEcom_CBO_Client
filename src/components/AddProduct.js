import React, { useEffect, useState } from 'react'
import SideBar from './../common/components/SideBar';
import { isAuthenticated } from '../common/helpers/authHelper';
import { useNavigate } from 'react-router-dom';
import { createProductService } from './../common/apiServices/productService';
import { getCategoriesService } from '../common/apiServices/categoryService';

export default function AddProduct() {
  const [product,setProduct] = useState({
    name:'',
    desciption:'',
    price : 0,
    quantity: 0,
    image : '',
    idCategory: 0
  });
  const [productCategories, setProductCategories] = useState([]);

  // get auth user info
  const {token, user} = isAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    getCategoriesService().then((cats) => setProductCategories(cats))
  },[])

  const handleChangeCreateProduct = (event) => {
    setProduct({...product,name : event.target.value});
  } 
  
  const handleSubmitCreateProduct = (event) => {
   event.preventDefault();
   createProductService(user.id, token, product)
   .then(() => navigate('/product-bo'))
  }

  return (
    <div className='conrtainer-fluid'>
      <div className="row">
        <div className="col-md-2 bg-black" style={{ height: '800px'}}>
            <SideBar/>
        </div>
        <div className="col-md-10">
            <div className="container">
               <h4 className='text text-center text-primary mt-3'>Create Product</h4>
               <form onSubmit={handleSubmitCreateProduct}>
                <div className="form-group">
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="name"
                           className="form-control"
                           style={{ width: '500px'}}
                           onChange={handleChangeCreateProduct}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description :</label>
                    <textarea cols="30" rows="5"
                              id="description"
                              className="form-control"
                              style={{ width: '500px'}}
                              onChange={handleChangeCreateProduct}
                    >
                    </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price :</label>
                    <input type="text" id="price"
                           className="form-control"
                           style={{ width: '500px'}}
                           onChange={handleChangeCreateProduct}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="qunatity">Qunatity :</label>
                    <input type="number" id="qunatity"
                           className="form-control"
                           style={{ width: '500px'}}
                           onChange={handleChangeCreateProduct}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select name="categoryId" id="category" className='form-control'>
                        {productCategories && productCategories.map((item) => {
                            return (
                                <>
                                 <option value={item.id}>{item.name}</option>
                                </>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image :</label>
                    <input type="file" id="image"
                           className="form-control"
                           style={{ width: '500px'}}
                           onChange={handleChangeCreateProduct}
                    />
                </div>
                <button type="submit" className='btn btn-primary mt-2'>Create</button>
               </form>
            </div>
        </div>
      </div>
   </div>
  )
}
