
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../layout/userSlice';

export default configureStore({
    reducer: {
        user: userSlice,
    }
});