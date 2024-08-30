import { FC } from "react";
import { Product } from "../../../models";
import { Analogs } from "./analogs";
import { Related } from "./related";
import './product-page.css'


interface ILinkedProducts {
    product: Product | null,
    isLoading: boolean,
    error: Error | null,
    linkedProducts: Product[]
}

export const LinkedProducts: FC<ILinkedProducts> = ({product, isLoading, error, linkedProducts}) => {
    if (isLoading) {
        return <div>Loading...</div>
      }
    
      if (error) {
        return <div>Error</div>
      }
    
      const analogProducts = linkedProducts.filter(pr => pr.categoryId === product.categoryId)
      const relatedProducts = linkedProducts.filter(pr => pr.categoryId !== product.categoryId)

      return (
        <ul>
            <Analogs products={analogProducts} />
            <Related products={relatedProducts} />
        </ul>
    )
}