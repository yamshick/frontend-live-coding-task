import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import { productPageReducer } from './reducers/product-page';
// @ts-ignore
import logger from 'redux-logger';

export const rootReducer = combineReducers({
  productPage: productPageReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const preloadedState: Partial<RootState> = {};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const dispatch = store.dispatch;
