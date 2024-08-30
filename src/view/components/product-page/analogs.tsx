import { FC } from 'react';
import { Product } from '../../../models';
import { useDispatch } from 'react-redux';
import { addProductToCompareList } from '../../../store/actions/product-page';

interface IAnalogs {
  products: Product[];
}

export const Analogs: FC<IAnalogs> = ({ products }) => {
  const dispatch = useDispatch();

  const onClick = (product: Product) => dispatch(addProductToCompareList(product));
  return (
    <>
      {products.map((product) => (
        <li key={product.id}>
          Аналог: <button onClick={() => onClick(product)}>Товар {product.id}</button>
        </li>
      ))}
    </>
  );
};
