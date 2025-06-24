import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

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
              return <Link to={`/products/${product.id}`}>{product.name}</Link>
            })
          }
        
        </div>
      <Outlet />
      </div>
    </React.Fragment>
  );
}

export default Products;
