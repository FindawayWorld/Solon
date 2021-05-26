import { createSlice } from '@reduxjs/toolkit';
import passwordValidator from 'password-validator';

export const passwordSchema = new passwordValidator();

//prettier-ignore
passwordSchema
    .is().min(8)
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().symbols();

// useReducer Initial State
const initialState = {
    isLoading: true,
    user: null,
    isDarkMode: false,
    isNavbarOpen: false,
    errors: null,
    intendedRoute: '/'
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //PERSIST_LOGIN_START
        authLoginStart: (state, action) => {
            state.isLoading = true;
        },
        //FIRST_LOGIN_SUCCESS
        //PERSIST_LOGIN_SUCCESS
        //LOGIN_SUCCESS
        authLoginSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user;
        },
        //PERSIST_LOGIN_FAIL
        authLoginFailure: (state) => {
            state.isLoading = false;
        },
        //COMPLETE_NEW_PASSWORD_SUCCESS
        authCompleteNewPasswordSuccess: (state) => {
            state.user = null;
            state.isLoading = false;
        },
        //COMPLETE_NEW_PASSWORD_TIMEOUT
        authCompleteNewPasswordTimeout: (state) => {
            state.user = null;
        },
        //LOGOUT
        authLogout: () => {
            return { ...initialState, isLoading: false };
        },
        //REFRESH_USER
        authRefreshUser: (state, action) => {
            state.user.attributes = {
                ...state.user.attributes,
                ...action.payload.updatedUserAttributes
            };
        }
    }
});

export const {
    authLoginStart,
    authLoginSuccess,
    authLoginFailure,
    authCompleteNewPasswordSuccess,
    authCompleteNewPasswordTimeout,
    authLogout,
    authRefreshUser
} = authSlice.actions;

export default authSlice.reducer;
