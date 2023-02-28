import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteProduct } from './ProductsSlice';

const Products = () => {
  const products = useSelector((state) => state.productsReducer.products);
  const dispatch = useDispatch();

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id))
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>List of Products</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Items</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((product) => {
            const { id, item, desc } = product;
            return <tr>
              <td>{id}</td>
              <td>{item}</td>
              <td>{desc}</td>
              <td>
                <Link to="/edit-product" state={{id, item, desc}}>
                  <button className='edit'>Edit</button>
                </Link>
                <button className='delete'
                  onClick={()=>handleDeleteProduct(id)}
                >Delete
                </button>
              </td>
            </tr>

          })}
        </tbody>
      </table>
    </div>
  )
}

export default Products