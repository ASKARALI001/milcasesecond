import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (filter,{rejectWithValue}) => {
        try {

            const queryParam = `${filter.brand ? `brand=${filter.brand}&` : ''}${filter.limit ? `limit=${filter.limit}&`: '' }${filter.subCategory ? `subCategory=${filter.subCategory}&`: ''}${filter.title ? `title=${filter.title}&` : ''}`
            const res = await axios(`/products?${queryParam}`)
            if(res.statusText !== 'OK'){
                throw new Error(' server error')
            }
            console.log(res.data)
            return res.data
        } catch (e){
            return rejectWithValue(e.message)
        }
}
)
const initialState = {
    data: [],
    filter: {
        brand:'',
        limit: 10,
        title:'',
        subCategory:''
    },
    error: '',
    status: ''

}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        changeBrand: (state, action) => {
            state.filter = {
                ...state.filter,
                brand: action.payload
            }
        },
        changeSubCategory: (state, action) => {
            state.filter = {
                ...state.filter,
                subCategory: action.payload
            }
        },
        changeTitle: (state, action) => {
            state.filter = {
                ...state.filter,
                title: action.payload
            }
        }


    },
    extraReducers: {
       [getProducts.pending] : (state, action) => {
            state.status = 'loading'
           state.error = ''
       },
        [getProducts.rejected] : (state, action) => {
            state.status = 'error'
            state.error = action.payload
       },
        [getProducts.fulfilled] : (state, action) => {
            state.status = 'Done'
            state.data = action.payload
       }
    }
})

export const {changeBrand, changeSubCategory} = productsSlice.actions
export default productsSlice.reducer