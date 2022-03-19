import React from 'react';
import { useStore } from 'effector-react';
import { $catalog } from '../../../model/catalog';
import { ProductCard } from '../../ui';
import { Products, ListItem } from './styles';

const ProductsList: React.FC = () => {
  const products = useStore($catalog);

  return (
    <div>
      <h3 className='visually-hidden'>Список товаров</h3>
      <Products>
        {products.map((product) => (
          <ListItem key={product.id}>
            <ProductCard product={product} />
          </ListItem>
        ))}
      </Products>
    </div>
  )
};

export default ProductsList;
