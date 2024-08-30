import { createAction } from '@reduxjs/toolkit';
import { LinkedProduct, Product } from '../../models';

export const setProduct = createAction<Product>('product-page/set-product');

export const setIsProductLoading = createAction<boolean>('product-page/set-is-product-loading');

export const setLinkedProducts = createAction<LinkedProduct[]>('product-page/set-linked-products');

export const setIsLinkedProductsLoading = createAction<boolean>(
  'product-page/set-is-linked-products-loading'
);

export const addProductToCompareList = createAction<Product>(
  'product-page/add-product-to-compare-list'
);
