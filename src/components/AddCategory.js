import React, { useState } from 'react'
import SideBar from './../common/components/SideBar';
import { createCategoryService } from './../common/apiServices/categoryService';
import { isAuthenticated } from '../common/helpers/authHelper';
import { useNavigate } from 'react-router-dom';

export default function AddCategory() {
  const [category,setCategory] = useState({
    name:''
  });
  // get auth user info
  const {token, user} = isAuthenticated();
  const navigate = useNavigate();

  const handleChangeCreateCategory = (event) => {
    setCategory({...category,name : event.target.value});
  } 
  
  const handleSubmitCreateCategory = (event) => {
   event.preventDefault();
   createCategoryService(user.id, token, category)
   .then(() => navigate('/category-bo'))
  }

  return (
    <div className='conrtainer-fluid'>
      <div className="row">
        <div className="col-md-2 bg-black" style={{ height: '800px'}}>
            <SideBar/>
        </div>
        <div className="col-md-10">
            <div className="container">
               <h4 className='text text-center text-primary mt-3'>Create Category</h4>
               <form onSubmit={handleSubmitCreateCategory}>
                <div className="form-group">
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="name"
                           className="form-control"
                           style={{ width: '500px'}}
                           onChange={handleChangeCreateCategory}
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
