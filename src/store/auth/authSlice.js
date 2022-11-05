import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', //authenticated, Not Authemticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: ( state, action ) => {

    },
    logaut: ( state, payload ) => {

    },
    checkingCredentials: ( state ) => {

    }  
  }
});

export const { login, logaut, checkingCredentials } = authSlice.actions
