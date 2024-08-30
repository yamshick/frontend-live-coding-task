import { RootState } from '..';

const modalPageSelector = (state: RootState) => state.modalPage;

export const modalPageProductSelector = (state: RootState) => modalPageSelector(state).product;
