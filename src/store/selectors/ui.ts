import { RootState } from '..';

const uiSelector = (state: RootState) => state.ui;

export const isModalOpenSelector = (state: RootState) => uiSelector(state).isModalOpen;
