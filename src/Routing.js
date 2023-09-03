import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import ProductsBo from './components/ProductsBo';
import CategoryBo from './components/CategoryBo';
import OrdersBo from './components/OrdersBo';
import Dashboard from './components/Dashboard';
import AddCategory from './components/AddCategory';

export default function Routing() {
  return (
     <div>
        <Routes>
            <Route path="/" exact element={<Login/>}/>
            <Route path="/dashboard" exact element={<Dashboard/>}/>
            <Route path="/product-bo" exact element={<ProductsBo/>}/>
            <Route path="/category-bo" exact element={<CategoryBo/>}/>
            <Route path="/create-category" exact element={<AddCategory/>}/>
            <Route path="/orders-bo" exact element={<OrdersBo/>}/>
       </Routes>
     </div>
  )      
}
