import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './style.css'

function Products() {
  var [products] = useState([
    {
      id: 1,
      name: 'apple',
    },
    {
      id: 2,
      name: 'banana',
    },
   
    {
      id: 3,
      name: 'grape',
    },
    {
      id: 4,
      name: 'papaya',
    },
  ]);
  return (
    <React.Fragment>
      <div className='products-div'>
        <div className='links-div'>
          {
            products.map((product) => {
              return <NavLink state={product} to={`/products/${product.id}`}>{product.name}</NavLink>
            })
          }
        
        </div>
      <Outlet/>
      </div>
    </React.Fragment>
  );
}

export default Products;
