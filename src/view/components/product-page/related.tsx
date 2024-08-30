import { FC } from 'react';
import { Product } from '../../../models';

interface IRelated {
  products: Product[];
}

export const Related: FC<IRelated> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <li key={product.id}>
          Сопутствующий товар: <button>Товар {product.id}</button>
        </li>
      ))}
    </>
  );
};
