import React, {createContext, useReducer} from 'react';

const PERSIST_LOGIN_START = 'PERSIST_LOGIN_START';
const PERSIST_LOGIN_SUCCESS = 'PERSIST_LOGIN_SUCCESS';
const PERSIST_LOGIN_FAIL = 'PERSIST_LOGIN_FAIL';
const FIRST_LOGIN_SUCCESS = 'FIRST_LOGIN_SUCCESS';
const COMPLETE_NEW_PASSWORD_SUCCESS = 'COMPLETE_NEW_PASSWORD_SUCCESS';
const LOGIN_START = 'LOGIN_START';
const REFRESH_USER = 'REFRESH_USER';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';
const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR';
const COMPLETE_NEW_PASSWORD_TIMEOUT = 'COMPLETE_NEW_PASSWORD_TIMEOUT';

export const appActions = {
    PERSIST_LOGIN_START,
    PERSIST_LOGIN_SUCCESS,
    PERSIST_LOGIN_FAIL,
    FIRST_LOGIN_SUCCESS,
    COMPLETE_NEW_PASSWORD_SUCCESS,
    LOGIN_START,
    LOGIN_SUCCESS,
    REFRESH_USER,
    LOGIN_FAIL,
    LOGOUT,
    TOGGLE_NAVBAR,
    COMPLETE_NEW_PASSWORD_TIMEOUT,
};

const AuthContext = createContext({});

// useReducer Initial State
const initialState = {
    isLoading: true,
    user: null,
    isDarkMode: false,
    isNavbarOpen: false,
    errors: null,
    intendedRoute: '/',
};

function authReducer(state = {}, action = null) {
    // console.log('\n', `auth reducer action.type = `, action.type, '\n');
    switch (action.type) {
        case appActions.PERSIST_LOGIN_START: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case appActions.PERSIST_LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
            };
        }
        case appActions.PERSIST_LOGIN_FAIL: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case appActions.FIRST_LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
            };
        }
        case appActions.COMPLETE_NEW_PASSWORD_SUCCESS: {
            return {
                ...state,
                user: null,
                isLoading: false,
            };
        }
        case appActions.COMPLETE_NEW_PASSWORD_TIMEOUT: {
            console.log('\n', `COMPLETE_NEW_PASSWORD_TIMEOUT `, '\n');
            return {
                ...state,
                user: null,
            };
        }
        case appActions.LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
            };
        }
        case appActions.LOGOUT: {
            return {
                ...initialState,
                isLoading: false,
            };
        }
        case appActions.TOGGLE_NAVBAR: {
            return {
                ...state,
                isNavbarOpen: !state.isNavbarOpen,
            };
        }
        case appActions.REFRESH_USER: {
            return {
                ...state,
                user: {
                    ...state.user,
                    attributes: {
                        ...state.user.attributes,
                        ...action.payload.updatedUserAttributes,
                    },
                },
            };
        }
        default:
            return state;
    }
}

function AuthProvider(props) {
    // useReducer(reducer, initialState)
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider
            {...props}
            value={{
                state,
                dispatch,
            }}
        />
    );
}

export {AuthContext, AuthProvider};
