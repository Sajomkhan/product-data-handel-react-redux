import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { updateProduct } from './ProductsSlice';

const EditProduct = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState(location.state.id)
  const [item, setItem] = useState(location.state.item)
  const [desc, setDesc] = useState(location.state.desc)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);

    dispatch(updateProduct({id, item, desc} ));
    navigate("/products", {replace: true})
  }

  return (
    <div className='add-product'>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='item'>Item: </label>
          <input type="text" name='item' value={item}
            onChange={(e) => setItem(e.target.value)}
            required
          />
        </div>
         <div>
          <label htmlFor='desc'>Description: </label>
          <input type="text" name='desc' value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <button className='update'
          type="submit" 
          style={{width: '10rem', marginTop: '2rem', padding:'8px'}}
        >
          Update Product
        </button>
        <Link to='/products'>
          <button className='back'
            style={{width: '10rem', marginTop: '2rem', padding:'8px'}}>
            Back
          </button>
        </Link>
      </form>
    </div>
  )
}

export default EditProduct