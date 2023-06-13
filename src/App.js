import './App.css';
import React, {useState, useEffect} from 'react'
import Login from './pages/Login';
import Product from "./pages/Product"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';

function App() {
  

  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     {!localStorage.getItem("token")&&  <Route path='/' Component={Login} />}
      <Route path='/products' Component={Product} />
      <Route path='/productDetail/:id' Component={ProductDetail} />
      <Route path="*" Component={() => {
        alert("page not found")
      }}/>
     </Routes>
     </BrowserRouter>
       
    </div>
  );
}

export default App;
