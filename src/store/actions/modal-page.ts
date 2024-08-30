import { createAction } from '@reduxjs/toolkit';
import { Product } from '../../models';

export const setModalPageProduct = createAction<Product | undefined>('modal-page/set-product');
