import { createSlice } from "@reduxjs/toolkit";



export const UserDataSlice = createSlice({
    name:"userData",
    initialState: {
        currentUser : null
    },

    reducers: {
        currentUser : (state, action) => {
            state.currentUser = action.payload
            
        }
    }
})

export const {currentUser} = UserDataSlice.actions

export default UserDataSlice.reducer