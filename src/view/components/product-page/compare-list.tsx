import { FC } from 'react';
import './product-page.css';
import { useSelector } from 'react-redux';
import { compareListSelector } from '../../../store/selectors/product-page';
import { useDispatch } from 'react-redux';
import { deleteProductFromCompareList } from '../../../store/actions/product-page';

export const CompareList: FC = () => {
  const products = useSelector(compareListSelector);

  const dispatch = useDispatch();

  const onDeleteClick = (id: string) => {
    dispatch(deleteProductFromCompareList(id));
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="compare-item">
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <button onClick={() => onDeleteClick(product.id)} className="compare-item-delete-button">
            x
          </button>
        </div>
      ))}
    </div>
  );
};
