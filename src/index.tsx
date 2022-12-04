import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './store/index';
import { Provider } from 'react-redux';
import PublicRouters from './PublicRouters';
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PublicRouters />
        </Provider>
    </BrowserRouter>,
);
