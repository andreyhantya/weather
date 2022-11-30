import { configureStore } from '@reduxjs/toolkit';
import walletDataSlice from './slices/WeatherDataSlice';
import thunk from 'redux-thunk';

const reHydrateStore = () => {
    if (localStorage.getItem('app_state') !== null) {
        return JSON.parse(localStorage.getItem('app_state')!);
    }
};

const authMiddleware = (store: any) => (next: any) => (action: any) => {
    const result = next(action);
    const authState = store.getState();
    localStorage.setItem('app_state', JSON.stringify(authState));
    return result;
};

export const store = configureStore({
    reducer: walletDataSlice.reducer,
    middleware: [thunk, authMiddleware],
    preloadedState: reHydrateStore(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
