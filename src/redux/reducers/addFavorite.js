import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getFavorite = createAsyncThunk(
    'addFavorite/getFavorite',
    async (_, {rejectWithValue}) => {
        try {

            const res = await axios('/products')
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
    favorites: {
        data: [],
        dataLength: 0
    },
    basket: {
        data: [],
        dataLength: 0
    },
    error: '',
    status: ''

}

const addFavoriteSlice = createSlice({
    name: 'addFavorite',
    initialState,
    reducers: {
        favorite: (state, action) => {
            state.favorites.data = [...state.favorites.data, state.data.find((item) => item.id === action.payload)]
            state.favorites.dataLength = state.favorites.dataLength + 1
        },
        deleteFavorite: (state, action) => {
            state.favorites.data = state.favorites.data.filter(item => item.id !== action.payload)
            state.favorites.dataLength = state.favorites.dataLength - 1
        },
        setBasket: (state, action) => {
            let idx = state.basket.data.find(el => el.id === action.payload)
            if (!!idx) {
                state.basket.data = state.basket.data.map((el) => el.id === idx.id ? {...el, count: el.count + 1} : el)
            } else{
                state.basket.data = [...state.basket.data, state.data.find(item => item.id === action.payload)]
                state.basket.dataLength = state.basket.dataLength + 1
            }

        },
        oneSetBasket: (state, action) => {
            const item = state.basket.data.find((item) => item.id === action.payload);
            item.count++;
        },
        minusSetBasket: (state, action) => {
            const item = state.basket.data.find((item) => item.id === action.payload);
            if (item.count === 1) {
                state.basket.data = state.basket.data.filter(item => item.id !== action.payload)
                state.basket.dataLength = state.basket.dataLength - 1
            } else {
                item.count--;
            }


        },
        deleteBasket: (state, action) => {
            state.basket.data = state.basket.data.filter(item => item.id !== action.payload)
            state.basket.dataLength = state.basket.dataLength - 1
        },
        resetBasket: (state, action) => {
            state.basket = {
                    data: [],
                    dataLength: 0
            }
        }


    },
    extraReducers: {
        [getFavorite.pending]: (state, action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getFavorite.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getFavorite.fulfilled]: (state, action) => {
            state.status = 'Done'
            state.data = action.payload
        }
    }
})

export const {
    favorite,
    deleteFavorite,
    setBasket,
    deleteBasket,
    oneSetBasket,
    minusSetBasket,
    resetBasket
} = addFavoriteSlice.actions
export default addFavoriteSlice.reducer