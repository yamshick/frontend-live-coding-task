import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchLinkedProducts, useFetchProduct } from '../../hooks/fetch';
import './product-page.css';
import { ProductItem } from './product';
import { LinkedProducts } from './linked-products';
import { CompareList } from './compare-list';
import { Modal } from '../common/modal';
import { useDispatch } from 'react-redux';
import { setIsModalOpen } from '../../../store/actions/ui';
import { useSelector } from 'react-redux';
import { isModalOpenSelector } from '../../../store/selectors/ui';
import { ModalPageProduct } from './modal-page-product';

export const ProductPage: FC = () => {
  const location = useLocation();
  const [productId, setProductId] = useState<string>('');
  useFetchProduct(productId);
  useFetchLinkedProducts(productId);

  const dispatch = useDispatch();

  const onModalClose = () => dispatch(setIsModalOpen(false));
  const isModalOpen = useSelector(isModalOpenSelector);

  useEffect(() => {
    const productId = location.pathname.split('/')[2];
    setProductId(productId);
  }, [location]);

  return (
    <div>
      {isModalOpen ? (
        <Modal onClose={onModalClose}>
          <ModalPageProduct />{' '}
        </Modal>
      ) : null}
      <div className="header-container">
        <div>
          <ProductItem />
        </div>
        <div className="compare-panel">
          <CompareList />
        </div>
      </div>
      <LinkedProducts />
    </div>
  );
};
