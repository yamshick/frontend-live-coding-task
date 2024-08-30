import { createReducer } from '@reduxjs/toolkit';
import { Product } from '../../models';
import { setModalPageProduct } from '../actions/modal-page';

type ModalPageState = {
  product: Product | undefined;
};

const defaultState: ModalPageState = {
  product: undefined,
};

export const modalPageReducer = createReducer<ModalPageState>(defaultState, (builder) => {
  builder.addCase(setModalPageProduct, (state, action) => ({ ...state, product: action.payload }));
});
