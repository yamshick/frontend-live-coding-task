import { createReducer } from '@reduxjs/toolkit';
import { setIsModalOpen } from '../actions/ui';

type UiState = {
  isModalOpen: boolean;
};

const defaultState: UiState = {
  isModalOpen: false,
};

export const uiReducer = createReducer<UiState>(defaultState, (builder) => {
  builder.addCase(setIsModalOpen, (state, action) => ({ ...state, isModalOpen: action.payload }));
});
