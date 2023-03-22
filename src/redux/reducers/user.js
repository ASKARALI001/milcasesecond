import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    user: {
        name : '',
        email: ''
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        loginAccount : (state, action) => {
            state.user = action.payload
        },
        logOutUser : (state, action) => {
            state.user = {name : '', email: ''}
        }
    },

})

export const {loginAccount, logOutUser} = userSlice.actions
export default userSlice.reducer