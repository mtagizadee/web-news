import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: localStorage.getItem('isAuth') === 'true',
        token: localStorage.getItem('token')
    },
    reducers: {
        setIsAuth: (state, action) => {
            const value = action.payload;
            state.isAuth = value;
            localStorage.setItem('isAuth',String(value));
        },
        setToken: (state, action) => {
            const value = action.payload;
            state.token = value;
            localStorage.setItem('token',value);
        }
    }
});

export const { setIsAuth, setToken } = authSlice.actions;
export default authSlice.reducer;