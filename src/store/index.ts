import { configureStore } from "@reduxjs/toolkit"

import authReducer from './Auth';

// MIDDLEWARES
import localStorage from './middleware/localStorage';


const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorage)
});

export type RootState = ReturnType<typeof store.getState>

export default store;