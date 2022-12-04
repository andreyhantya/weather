import { configureStore } from '@reduxjs/toolkit';
import walletDataSlice from './slices/WeatherDataSlice';
import thunk from 'redux-thunk';

const reHydrateStore = () => {
    if (localStorage.getItem('app_state') !== null) {
        return JSON.parse(localStorage.getItem('app_state')!);
    }
};

const appMiddleware = (store: any) => (next: any) => (action: any) => {
    const result = next(action);
    const appState = store.getState();
    localStorage.setItem('app_state', JSON.stringify(appState));
    return result;
};

export const store = configureStore({
    reducer: walletDataSlice.reducer,
    middleware: [thunk, appMiddleware],
    preloadedState: reHydrateStore(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
