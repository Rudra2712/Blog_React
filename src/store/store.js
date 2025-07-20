import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
// This file is used to configure the Redux store for the application, including the authentication slice
const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
    }
});


export default store;