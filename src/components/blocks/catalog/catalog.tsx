import React from 'react';
import { StyledCatalog, Wrapper, Sorting } from './styles';
import ProductsList from './products-list';
import { sortByLowerPrice, sortByHigherPrice, sortByNovelty } from '../../../model/products';
import { Title } from '../../ui';

const Catalog: React.FC = () => {
  return (
    <StyledCatalog>
      <Wrapper>
        <Sorting>
          <Title as='h3' size='S'>Сортировка:</Title>
          <select onChange={(evt) => {
            switch (evt.target.value) {
              case '1': return sortByLowerPrice();
              case '2': return sortByHigherPrice();
              case '3': return sortByNovelty();
            }
          }}>
            <option value='1'>Сначала дешевые</option>
            <option value='2'>Сначала дорогие</option>
            <option value='3'>Сначала новые</option>
          </select>
        </Sorting>
        <ProductsList />
      </Wrapper>
    </StyledCatalog>
  )
};

export default Catalog;