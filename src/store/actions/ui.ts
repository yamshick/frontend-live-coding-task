import { createAction } from '@reduxjs/toolkit';

export const setIsModalOpen = createAction<boolean>('ui/set-is-modal-open');
