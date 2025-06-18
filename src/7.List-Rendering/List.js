import React, { useState } from 'react'

function List() {
  var [products, setProducts] = useState([
    {pName:  'apple', pPrice: 200},
    {pName:  'babana', pPrice: 100},
    {pName:  'papaya', pPrice: 50},
    {pName:  'grape', pPrice: 150},
    {pName:  'mango', pPrice: 50},
    {pName:  'kiwi', pPrice: 300},
    {pName:  'kiwi', pPrice: 300},
    {pName:  'kiwi', pPrice: 300},
    {pName:  'kiwi', pPrice: 300},
    {pName:  'kiwi', pPrice: 300},
    {pName:  'kiwi', pPrice: 300},
    {pName:  'kiwi', pPrice: 300},
    {pName:  'kiwi', pPrice: 300},
    {pName:  'kiwi', pPrice: 300},
    {pName:  'kiwi', pPrice: 300},
    {pName:  'kiwi', pPrice: 300},
    {pName:  'kiwi', pPrice: 300},
  ])
  return (
    <div>
      {/* <h3>Name: {products[0].pName}, Price:  {products[0].pPrice }</h3>
      <h3>Name: {products[1].pName}, Price:  {products[1].pPrice }</h3>
      <h3>Name: {products[2].pName}, Price:  {products[2].pPrice }</h3>
      <h3>Name: {products[3].pName}, Price:  {products[3].pPrice }</h3>
      <h3>Name: {products[4].pName}, Price:  {products[4].pPrice }</h3>
      <h3>Name: {products[5].pName}, Price:  {products[5].pPrice }</h3> */}
      {
        products.map((product) => {
          return <h3>Name: {product.pName}, Price: {product.pPrice}</h3>
          
        })
      }
    </div>
  )
}

export default List