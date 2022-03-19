import React from 'react';
import { IDevice } from '../../../data/devices';
import Title from '../title/title';
import { StyledCard, Image } from './styles';

const ProductCard: React.FC<{ product: IDevice }> = ({ product }) => {
  return (
    <StyledCard>
      <Image src={product.image} width={360} height={380} alt={product.title}  />
      <Title as='h4' size='XS'>{product.title}</Title>
      <div><span className='visually-hidden'>Новый товар</span></div>
      <b>{product.price} ₽</b>
      <button className='visually-hidden'>Купить</button>
    </StyledCard>
  )
};

export default ProductCard;