import { FC } from "react"
import { Product } from "../../../models"
import "./product-page.css"

interface IProduct {
    isLoading: boolean,
    product: Product | null,
    error: Error | null
}

export const ProductItem: FC<IProduct> = ({isLoading, product, error}) => {
    if (isLoading) {
        return <div>Loading...</div>
      }
    
      if (error) {
        return <div>Error</div>
      }
    
    return (
        <div className='product'>
        <h3>{product?.name}</h3>
        <p>{product?.price}</p>
      </div>
    )
}