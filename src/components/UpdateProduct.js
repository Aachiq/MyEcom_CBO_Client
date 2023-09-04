import React, { useEffect, useState } from 'react'
import SideBar from './../common/components/SideBar';
import { isAuthenticated } from '../common/helpers/authHelper';
import { useNavigate, useParams } from 'react-router-dom';
import { createProductService, getOneProductService, updateProductService } from './../common/apiServices/productService';
import { getCategoriesService } from '../common/apiServices/categoryService';

export default function UpdateProduct() {
  const [updatedProduct,setUpdatedProduct] = useState({
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
  const {id} = useParams()
  useEffect(() => {
    getCategoriesService().then((cats) => setProductCategories(cats));
    getOneProductService(id).then((prod) => setUpdatedProduct(prod))

  },[])

  const handleChangeUpdateProduct = (event) => {
    const value = event.target.id === "image" ? event.target.files[0] : event.target.value;
    
    formData.set(event.target.id, value);

    setUpdatedProduct({...updatedProduct,[event.target.id] : value});
  } 
  
  const handleSubmitUpdateProduct = (event) => {
   event.preventDefault();
   console.log(updatedProduct);
   console.log(formData);
   updateProductService(user.id, token, formData, id)
   .then((msg) => {
        console.log(msg);
        // navigate('/product-bo');
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
               <h4 className='text text-center text-primary mt-3'>Update Product</h4>
               <form onSubmit={handleSubmitUpdateProduct}>
                <div className="form-group">
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="name"
                           className="form-control"
                           required
                           value={updatedProduct.name}
                           style={{ width: '500px'}}
                           onChange={handleChangeUpdateProduct}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description :</label>
                    <textarea cols="30" rows="5"
                              id="description"
                              className="form-control"
                              required
                              value={updatedProduct.description}
                              style={{ width: '500px'}}
                              onChange={handleChangeUpdateProduct}
                    >
                    </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price :</label>
                    <input type="text" id="price"
                           className="form-control"
                           required
                           value={updatedProduct.price}
                           style={{ width: '500px'}}
                           onChange={handleChangeUpdateProduct}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="qunatity">Qunatity :</label>
                    <input type="number" id="quantity"
                           className="form-control"
                           required
                           value={updatedProduct.quantity}
                           style={{ width: '500px'}}
                           onChange={handleChangeUpdateProduct}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select name="categoryId" id="id_category" 
                            className='form-control'
                            required 
                            onChange={handleChangeUpdateProduct} 
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
                           onChange={handleChangeUpdateProduct}
                    />
                </div>
                <button type="submit" className='btn btn-primary mt-2'>Edit</button>
               </form>
            </div>
        </div>
      </div>
   </div>
  )
}
