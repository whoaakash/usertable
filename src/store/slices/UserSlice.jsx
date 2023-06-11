import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action){
            state.push(action.payload) 
        },
        removeUser(state, action){
            state.splice(action.payload, 1)
        },
        deleteUsers(state, action){}
    }
})

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer