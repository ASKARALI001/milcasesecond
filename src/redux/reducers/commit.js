import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getCommit = createAsyncThunk(
    'commit/getCommit',
    async (_,{rejectWithValue}) => {
        try {
            const res = await axios(`/commit`)
            if(res.statusText !== 'OK'){
                throw new Error(' server error')
            }
            return res.data
        } catch (e){
            return rejectWithValue(e.message)
        }
    }
)


const initialState = {
    data:[],
    error: '',
    status: ''
}

const commitSlice = createSlice({
    name: 'commit',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getCommit.pending] : (state, action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getCommit.rejected] : (state, action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getCommit.fulfilled] : (state, action) => {
            state.status = 'done'
            state.data = action.payload
        }
    }
})


export default commitSlice.reducer