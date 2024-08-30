import { useState, useEffect } from 'react';
import { Product } from '../../models';
import { mockProductPageGateway } from '../../gateways/product-page';
import { useDispatch } from 'react-redux';
import {
  setProduct,
  setLinkedProducts,
  setIsProductLoading,
  setIsLinkedProductsLoading,
} from '../../store/actions/product-page';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useFetchProduct = (productId: string | number) => {
  const dispatch = useDispatch();
  const makeRequest = async (productId: string | number) => {
    try {
      dispatch(setIsProductLoading(true));
      await delay(1000);
      const data = await mockProductPageGateway.getProduct(`${productId}`);
      dispatch(setProduct(data));
      console.log({ data });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setIsProductLoading(false));
    }
  };

  useEffect(() => {
    console.log({ productId });
    if (productId) {
      makeRequest(productId);
    }
  }, [productId]);
};

export const useFetchLinkedProducts = (productId: string | number) => {
  const dispatch = useDispatch();
  const makeRequest = async (productId: string | number) => {
    try {
      dispatch(setIsLinkedProductsLoading(true));
      await delay(1000);
      const data = await mockProductPageGateway.getLinkedProducts(`${productId}`);
      dispatch(setLinkedProducts(data));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setIsLinkedProductsLoading(false));
    }
  };

  useEffect(() => {
    if (productId) {
      makeRequest(productId);
    }
  }, [productId]);
};
