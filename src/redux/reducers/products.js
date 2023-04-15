import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (filter, {rejectWithValue}) => {
        try {

            const queryParam = `${filter.brand ? `brand=${filter.brand}&` : ''}${filter.limit ? `limit=${filter.limit}&` : ''}${filter.subCategory ? `subCategory=${filter.subCategory}&` : ''}${filter.title ? `title=${filter.title}&` : ''}`
            const res = await axios(`/products?${queryParam}?not=${filter.title}&search=${filter.search}`)
            if (res.statusText !== 'OK') {
                throw new Error(' server error')
            }
            return res.data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
const initialState = {
    data: [],
    filter: {
        brand: 'Apple',
        limit: 10,
        title: '',
        subCategory: '',
        search: ''
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
        }, productsClear: (state, action) => {
            state.filter = {subCategory: '', title: ''}
        },
        changeSearch: (state, action) => {
            state.filter = {
                ...state.filter,
                search: action.payload
            }
        }

    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getProducts.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = 'Done'
            state.data = action.payload
        }
    }
})

export const {changeBrand, changeSearch, changeSubCategory, changeTitle, productsClear} = productsSlice.actions
export default productsSlice.reducer