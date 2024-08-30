import { FC } from 'react';
import { Analogs } from './analogs';
import { Related } from './related';
import './product-page.css';
import { useSelector } from 'react-redux';
import {
  isLinkedProductsLoadingSelector,
  linkedProductsSelector,
  productSelector,
} from '../../../store/selectors/product-page';

export const LinkedProducts: FC = () => {
  const isLoading = useSelector(isLinkedProductsLoadingSelector);
  // TODO analog and related selectors
  const linkedProducts = useSelector(linkedProductsSelector);

  const product = useSelector(productSelector);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const analogProducts = linkedProducts.filter((pr) => pr.categoryId === product?.categoryId);
  const relatedProducts = linkedProducts.filter(
    (pr) => pr.categoryId && pr.categoryId !== product?.categoryId
  );

  return (
    <ul>
      <Analogs products={analogProducts} />
      <Related products={relatedProducts} />
    </ul>
  );
};
