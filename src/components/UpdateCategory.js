import React, { useEffect, useState } from 'react'
import SideBar from './../common/components/SideBar';
import { createCategoryService, getOneCategoryService, updateCategoryService } from './../common/apiServices/categoryService';
import { isAuthenticated } from '../common/helpers/authHelper';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateCategory() {
  const {id} = useParams();
  const [updatedCategory,setUpdatedCategory] = useState({
    name:''
  });

  // get auth user info
  const {token, user} = isAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    getOneCategoryService(id).then((cat) => setUpdatedCategory(cat))
  },[id])

  const handleChangeUpdateCategory = (event) => {
    setUpdatedCategory({...updatedCategory,name : event.target.value});
  } 
  
  const handleSubmitUpdateCategory = (event) => {
   event.preventDefault();
   updateCategoryService(user.id, token, updatedCategory, id)
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
               <h4 className='text text-center text-primary mt-3'>Update Category</h4>
               <form onSubmit={handleSubmitUpdateCategory}>
                <div className="form-group">
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="name"
                           className="form-control"
                           style={{ width: '500px'}}
                           value={ updatedCategory.name}
                           onChange={handleChangeUpdateCategory}
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
