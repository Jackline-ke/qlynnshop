import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';

import ProductReducer, { productFetch } from './features/ProductSlice';

import { ProductsApi } from './features/ProductsApi';

const store = configureStore({
  reducer: {
    products: ProductReducer,
    [ProductsApi.reducerPath]: ProductsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(ProductsApi.middleware);
  },
});


store.dispatch(productFetch());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
