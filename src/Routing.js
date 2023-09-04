import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import ProductsBo from './components/ProductsBo';
import CategoryBo from './components/CategoryBo';
import OrdersBo from './components/OrdersBo';
import Dashboard from './components/Dashboard';
import AddCategory from './components/AddCategory';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import UpdateCategory from './components/UpdateCategory';

export default function Routing() {
  return (
     <div>
        <Routes>
            <Route path="/" exact element={<Login/>}/>
            <Route path="/dashboard" exact element={<Dashboard/>}/>
            <Route path="/product-bo" exact element={<ProductsBo/>}/>
            <Route path="/create-product" exact element={<AddProduct/>}/>
            <Route path="/update-product/:id" exact element={<UpdateProduct/>}/>
            <Route path="/category-bo" exact element={<CategoryBo/>}/>
            <Route path="/create-category" exact element={<AddCategory/>}/>
            <Route path="/update-category/:id" exact element={<UpdateCategory/>}/>
            <Route path="/orders-bo" exact element={<OrdersBo/>}/>
       </Routes>
     </div>
  )      
}
