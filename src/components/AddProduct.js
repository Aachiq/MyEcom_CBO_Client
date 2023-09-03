import React, { useEffect, useState } from 'react'
import SideBar from './../common/components/SideBar';
import { isAuthenticated } from '../common/helpers/authHelper';
import { useNavigate } from 'react-router-dom';
import { createProductService } from './../common/apiServices/productService';
import { getCategoriesService } from '../common/apiServices/categoryService';

export default function AddProduct() {
  const [product,setProduct] = useState({
    name:'',
    description:'',
    price : 0,
    quantity: 0,
    image : '',
    id_category: 0
  });
  const [productCategories, setProductCategories] = useState([]);
  const [formData, setFormData] = useState(new FormData());
  
  // get auth user info
  const {token, user} = isAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    getCategoriesService().then((cats) => setProductCategories(cats))
  },[])

  const handleChangeCreateProduct = (event) => {
    const value = event.target.id === "image" ? event.target.files[0] : event.target.value;
    
    formData.set(event.target.id, value);

    setProduct({...product,[event.target.id] : value});
  } 
  
  const handleSubmitCreateProduct = (event) => {
   event.preventDefault();
   createProductService(user.id, token, formData)
   .then((msg) => {
        console.log(msg);
        navigate('/product-bo');
    })
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
                           required
                           style={{ width: '500px'}}
                           onChange={handleChangeCreateProduct}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description :</label>
                    <textarea cols="30" rows="5"
                              id="description"
                              className="form-control"
                              required
                              style={{ width: '500px'}}
                              onChange={handleChangeCreateProduct}
                    >
                    </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price :</label>
                    <input type="text" id="price"
                           className="form-control"
                           required
                           style={{ width: '500px'}}
                           onChange={handleChangeCreateProduct}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="qunatity">Qunatity :</label>
                    <input type="number" id="quantity"
                           className="form-control"
                           required
                           style={{ width: '500px'}}
                           onChange={handleChangeCreateProduct}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select name="categoryId" id="id_category" 
                            className='form-control'
                            required onChange={handleChangeCreateProduct} 
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
                <div className="form-group">
                    <label htmlFor="image">Image :</label>
                    <input type="file" id="image"
                           className="form-control"
                           required
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
