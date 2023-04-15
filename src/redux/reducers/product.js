import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getOneProduct = createAsyncThunk(
    'product/getProduct',
    async (id,{rejectWithValue}) => {
        try {
            const res = await axios(`/products/${id}`)
            if(res.statusText !== 'OK'){
                throw new Error(' server error')
            }
            return res.data
        } catch (e){
            return rejectWithValue(e.message)
        }
    }
)


const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: {},
        error: '',
        status: ''
    },
    reducers: {

    },
    extraReducers: {
        [getOneProduct.pending] : (state, action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getOneProduct.rejected] : (state, action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getOneProduct.fulfilled] : (state, action) => {
            state.status = 'done'
            state.data = action.payload
        }
    }
})


export default productSlice.reducer