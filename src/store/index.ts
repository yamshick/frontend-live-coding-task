import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { productPageReducer } from './reducers/product-page';

export const rootReducer = combineReducers({
  productPage: productPageReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const preloadedState: Partial<RootState> = {};


// @ts-ignore
const logMiddleware = (store: {dispatch: () => void, getState: () => RootState}) => (next) => (action) => {
  const prevState = store.getState()
  const result = next(action);
  console.log('ACTION', {action, prevState, state: store.getState()})
  return result;
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
// @ts-ignore
  getDefaultMiddleware().concat(logMiddleware)
});


export const dispatch = store.dispatch;
