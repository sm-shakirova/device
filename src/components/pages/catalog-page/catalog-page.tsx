import React from 'react';
import { Filters, Catalog } from '../../blocks';
import { Title } from '../../ui';
import { Header, Wrapper } from './styles';

const CatalogPage: React.FC = () => {
  return (
    <main>
      <Header>
        <Title as='h2' size='L'>Моноподы для селфи</Title>
      </Header>
      <Wrapper>
        <Filters />
        <Catalog />
      </Wrapper>
    </main>
  )
};

export default CatalogPage;
