import { createSlice } from "@reduxjs/toolkit";
import { actionLogin, authLogin, authMe, logoutUser } from "../services/authService";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: "",
        loginLoader: false,
        userLoader: false,
    },
    reducers: {},
    extraReducers: (buider) => {
        buider
            // Login State
            .addCase(actionLogin.pending, (state) => {
                state.loginLoader = true;
            })
            .addCase(actionLogin.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loginLoader = false;
                state.loginErr = false;
            })
            .addCase(actionLogin.rejected, (state) => {
                state.loginLoader = false;
                state.loginErr = true;
            })
            // Fetch userprofile
            .addCase(authMe.pending, (state) => {
                state.userLoader = true;
            })
            .addCase(authMe.fulfilled, (state, action) => {
                state.user = action.payload;
                state.userLoader = false;
            })
            .addCase(authMe.rejected, (state) => {
                state.userLoader = false;
            })
            // logout user
            // Logout 
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = "";
            })

    }
})

export default authSlice.reducer;
