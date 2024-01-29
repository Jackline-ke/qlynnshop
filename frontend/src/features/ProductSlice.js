import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    items: [],
    status: null,
}

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
})

export default ProductSlice.reducer;