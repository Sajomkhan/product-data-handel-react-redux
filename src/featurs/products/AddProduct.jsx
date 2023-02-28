import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from './ProductsSlice';

const AddProduct = () => {
  const [item, setItem] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const numberofProducts = useSelector((state)=> state.productsReducer.products.length)

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {id:numberofProducts+1, item, desc}
    dispatch(addProduct(product))
    navigate("/products", {replace: true})
  }

  return (
    <div className='add-product'>
      <h1>Add Product</h1>
      <form>
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
        <button className='add' type="submit" 
          onClick={handleSubmit}
          style={{width: '10rem', marginTop: '2rem', padding:'8px'}}
        >
          Add Product
        </button>
      </form>
       

    </div>
  )
}

export default AddProduct