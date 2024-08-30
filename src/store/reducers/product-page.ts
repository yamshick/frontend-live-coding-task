import { createReducer } from '@reduxjs/toolkit';
import { LinkedProduct, Product } from '../../models';
import {
  setProduct,
  setIsProductLoading,
  setLinkedProducts,
  setIsLinkedProductsLoading,
  addProductToCompareList,
  setProductsComparingList,
  deleteProductFromCompareList,
} from '../actions/product-page';

type CatalogPageState = {
  product: Product | undefined;
  isProductLoading: boolean | undefined;
  linkedProducts: LinkedProduct[] | undefined;
  isLinkedProductsLoading: boolean | undefined;
  comparingProducts: Product[] | undefined;
};

const defaultState: CatalogPageState = {
  product: undefined,
  isProductLoading: undefined,
  linkedProducts: undefined,
  isLinkedProductsLoading: undefined,
  comparingProducts: undefined,
};

export const productPageReducer = createReducer<CatalogPageState>(defaultState, (builder) => {
  builder
    .addCase(setProduct, (state, action) => ({ ...state, product: action.payload }))
    .addCase(setIsProductLoading, (state, action) => ({
      ...state,
      isProductLoading: action.payload,
    }))
    .addCase(setLinkedProducts, (state, action) => ({ ...state, linkedProducts: action.payload }))
    .addCase(setIsLinkedProductsLoading, (state, action) => ({
      ...state,
      isLinkedProductsLoading: action.payload,
    }))
    .addCase(setProductsComparingList, (state, action) => ({
      ...state,
      comparingProducts: action.payload,
    }))
    .addCase(addProductToCompareList, (state, action) => ({
      ...state,
      comparingProducts: [
        ...(state.comparingProducts || []).filter((product) => product.id !== action.payload.id),
        action.payload,
      ],
    }))
    .addCase(deleteProductFromCompareList, (state, action) => ({
      ...state,
      comparingProducts: (state.comparingProducts || []).filter(
        (product) => product.id !== action.payload
      ),
    }));
});
