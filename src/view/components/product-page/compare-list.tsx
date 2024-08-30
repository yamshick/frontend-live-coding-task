import { FC } from 'react';
import { Product } from '../../../models';
import './product-page.css';

interface ICompareList {
  products: Product[];
}

export const CompareList: FC<ICompareList> = ({ products }) => {
  return (
    <div className="compare-list">
      {products.map((product) => (
        <div key={product.id} className="compare-item">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};
