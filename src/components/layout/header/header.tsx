import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledHeader,
  Wrapper,
  StyledLogo,
  StyledNav,
  StyledSearch,
  CatalogMenu
} from './styles';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <h1 className='visually-hidden'>Интернет-магазин "Девайс"</h1>
        <StyledLogo />
        <StyledSearch width='500px' placeholder='Поиск по сайту'/>
        <StyledNav width='100%' asymmetric />
        <CatalogMenu>
          <Link to='/catalog'>Каталог товаров</Link>
        </CatalogMenu>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
