import { FC } from 'react';
import { Product } from '../../../models';

interface IAnalogs {
  products: Product[];
}

export const Analogs: FC<IAnalogs> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <li key={product.id}>
          Аналог: <button>Товар {product.id}</button>
        </li>
      ))}
    </>
  );
};
