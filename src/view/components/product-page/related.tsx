import { FC } from 'react';
import { Product } from '../../../models';
import { useDispatch } from 'react-redux';
import { setIsModalOpen } from '../../../store/actions/ui';
import { setModalPageProduct } from '../../../store/actions/modal-page';

interface IRelated {
  products: Product[];
}

export const Related: FC<IRelated> = ({ products }) => {
  const dispatch = useDispatch();
  const onProductClick = (product: Product) => {
    dispatch(setIsModalOpen(true));
    dispatch(setModalPageProduct(product));
  };
  return (
    <>
      {products.map((product) => (
        <li key={product.id}>
          Сопутствующий товар:{' '}
          <button onClick={() => onProductClick(product)}>Товар {product.id}</button>
        </li>
      ))}
    </>
  );
};
