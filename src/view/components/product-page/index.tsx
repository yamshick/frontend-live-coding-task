import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchLinkedProducts, useFetchProduct } from '../../hooks/fetch';
import './product-page.css';
import { ProductItem } from './product';
import { LinkedProducts } from './linked-products';

export const ProductPage: FC = () => {
  const location = useLocation();
  const [productId, setProductId] = useState<string>('');
  const {
    isLoading: isProductLoading,
    error: productError,
    data: product,
  } = useFetchProduct(productId);
  const {
    isLoading: isLinkedProductsLoading,
    error: linkedProductsError,
    data: linkedProducts,
  } = useFetchLinkedProducts(productId);

  useEffect(() => {
    const productId = location.pathname.split('/')[2];
    setProductId(productId);
  }, [location]);

  return (
    <div>
      <div className="header-container">
        <div>
          <ProductItem isLoading={isProductLoading} error={productError} product={product} />
        </div>
        <div className="compare-panel"></div>
      </div>
      <LinkedProducts
        product={product}
        isLoading={isProductLoading || isLinkedProductsLoading}
        error={productError || linkedProductsError}
        linkedProducts={linkedProducts}
      />
    </div>
  );
};
