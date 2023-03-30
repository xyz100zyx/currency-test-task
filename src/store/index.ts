import {configureStore} from '@reduxjs/toolkit';
import currency from "./slices/currency";

export const store = configureStore({
    reducer: {
        currency: currency
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch