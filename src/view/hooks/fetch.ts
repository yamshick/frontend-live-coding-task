import { useState, useEffect } from 'react';
import { Product } from '../../models';
import { mockProductPageGateway } from '../../gateways/product-page';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useFetchProduct = (productId: string | number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Product | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const makeRequest = async (productId: string | number) => {
    try {
      setError(null);
      setIsLoading(true);
      await delay(1000);
      const data = await mockProductPageGateway.getProduct(`${productId}`);
      setData(data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      makeRequest(productId);
    }
  }, [productId]);

  return { isLoading, data, error };
};

export const useFetchLinkedProducts = (productId: string | number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const makeRequest = async (productId: string | number) => {
    try {
      setError(null);
      setIsLoading(true);
      await delay(1000);
      const data = await mockProductPageGateway.getLinkedProducts(`${productId}`);
      setData(data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      makeRequest(productId);
    }
  }, [productId]);

  return { isLoading, data, error };
};
