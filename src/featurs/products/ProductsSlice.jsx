import { createSlice } from "@reduxjs/toolkit"

const initialProducts = {
    products: [
        {
            id: 1,
            item: "Laptop",
            desc: "Lenevo Idea Pad 310"
        },
        {
            id: 2,
            item: "LED TV",
            desc: "LG Smart TV 32"
        }
    ]
}

const ProductsSlice = createSlice(
    {
        name: "products",
        initialState: initialProducts,
        reducers: {
            showProducts: (state) => state,
            addProduct: (state, action) => {
                state.products.push(action.payload)
            },
            updateProduct: (state, action) => {
                const {id, item, desc} = action.payload
                const isProductExist = state.products.filter(product => product.id === id)
                if(isProductExist){
                    isProductExist[0].item = item;
                    isProductExist[0].desc = desc;
                }
            },
            deleteProduct: (state, action) => {
                const id = action.payload;
                state.products = state.products.filter(product => product.id !== id)
            },
        },
    }
);

export const { showProducts, addProduct, deleteProduct, updateProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;