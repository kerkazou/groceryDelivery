import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: {
        isLogin: false,
        message: '',
        user: {}
    },
    reducers: {
        LOGIN_SUCCESS: state => {
            state.isLogin = true,
            state.message = 'Login success'
        },
        LOGIN_FAIL: state => {
            state.isLogin = false,
                state.message = 'Login Failed'
        },
        LOGOUT: state => {
            state.isLogin = false,
                state.message = ''
        },
    }
})

export const { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } = AuthSlice.actions

// export const selectCount = (state: any) => state.counter.value

export default AuthSlice