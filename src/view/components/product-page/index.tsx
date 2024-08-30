import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchLinkedProducts, useFetchProduct } from '../../hooks/fetch';
import './product-page.css';
import { ProductItem } from './product';
import { LinkedProducts } from './linked-products';
import { CompareList } from './compare-list';

export const ProductPage: FC = () => {
  const location = useLocation();
  const [productId, setProductId] = useState<string>('');
  useFetchProduct(productId);
  useFetchLinkedProducts(productId);

  useEffect(() => {
    const productId = location.pathname.split('/')[2];
    setProductId(productId);
  }, [location]);

  return (
    <div>
      <div className="header-container">
        <div>
          <ProductItem />
        </div>
        <div className="compare-panel">
          <CompareList />
        </div>
      </div>
      <LinkedProducts />
    </div>
  );
};
