import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledHeader,
  Wrapper,
  StyledLogo,
  StyledSearch,
  StyledNav,
  StyledUserNav,
  CatalogMenu
} from './styles';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <h1 className='visually-hidden'>Интернет-магазин "Девайс"</h1>
        <StyledLogo />
        <StyledSearch width='500px' placeholder='Поиск по сайту'/>
        <StyledNav width='calc(100% + 40px)' asymmetric />
        <StyledUserNav width='calc(100% + 40px)' />
        <CatalogMenu>
          <Link to='/catalog'>Каталог товаров</Link>
        </CatalogMenu>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
