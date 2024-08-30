import { FC } from 'react';
import './product-page.css';
import { useSelector } from 'react-redux';
import { isProductLoadingSelector, productSelector } from '../../../store/selectors/product-page';

export const ProductItem: FC = () => {
  const isLoading = useSelector(isProductLoadingSelector);
  const product = useSelector(productSelector);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{product?.name}</h3>
      <p>Price: {product?.price}</p>
    </div>
  );
};
