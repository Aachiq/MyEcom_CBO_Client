import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login1 from './components/Login1';
import ProductsBo from './components/ProductsBo';
import CategoryBo from './components/CategoryBo';
import OrdersBo from './components/OrdersBo';
import Dashboard from './components/Dashboard';

export default function Routing() {
  return (
     <div>
        <Routes>
            <Route path="/" exact element={<Login1/>}/>
            <Route path="/dashboard" exact element={<Dashboard/>}/>
            <Route path="/product-bo" exact element={<ProductsBo/>}/>
            <Route path="/category-bo" exact element={<CategoryBo/>}/>
            <Route path="/orders-bo" exact element={<OrdersBo/>}/>
       </Routes>
     </div>
  )      
}
