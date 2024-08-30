import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchProduct } from '../../hooks/fetch';

export const ProductPage: FC = () => {
  const location = useLocation()
  const [productId, setProductId] = useState<string>('')
  const {isLoading, error, data} = useFetchProduct(productId)
  
  useEffect(() => {
    const productId = location.pathname.split('/')[2]
    setProductId(productId)
  }, [location]);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    console.log(error)
    return <div>Error</div>
  }

  console.log(data)
  return (<div className='container'><div></div></div>);
};
