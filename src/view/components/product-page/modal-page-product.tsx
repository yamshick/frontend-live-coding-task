import { FC } from 'react';
import { useSelector } from 'react-redux';
import { modalPageProductSelector } from '../../../store/selectors/modal-page';

export const ModalPageProduct: FC = () => {
  const product = useSelector(modalPageProductSelector);

  return (
    <div>
      <h3>{product?.name}</h3>
      <p>Price: {product?.price}</p>
    </div>
  );
};
