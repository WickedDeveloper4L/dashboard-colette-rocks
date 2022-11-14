import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState:{
        currentUser: null,
        isSigningIn: true
    },
    reducers:{
        updateCurrentUser: (state, action)=>{
            state.currentUser = action.payload
            state.isSigningIn = false
        }
    }
})


export const {updateCurrentUser} = userSlice.actions

export default userSlice.reducer