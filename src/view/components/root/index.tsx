import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProduct, setProductsComparingList } from '../../../store/actions/product-page';

export const Root: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProduct(undefined));
    dispatch(setProductsComparingList(undefined));
  }, []);

  return (
    <div>
      <ul>
        {[1, 2, 3, 4, 5, 6].map((productId) => (
          <li key={productId}>
            <Link to={`/products/${productId}`}>Товар {productId}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
