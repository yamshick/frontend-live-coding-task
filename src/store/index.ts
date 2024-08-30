import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { productPageReducer } from './reducers/product-page';
import { uiReducer } from './reducers/ui';
import { modalPageReducer } from './reducers/modal-page-reducer';
// @ts-ignore
import logger from 'redux-logger';

export const rootReducer = combineReducers({
  productPage: productPageReducer,
  ui: uiReducer,
  modalPage: modalPageReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const preloadedState: Partial<RootState> = {};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const dispatch = store.dispatch;
