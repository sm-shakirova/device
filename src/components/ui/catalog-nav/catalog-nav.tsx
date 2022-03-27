import React from 'react';
import { StyledNav, List, StyledLink } from './styles';
import { categories } from '../../../data/categories';

export interface ICatalogNav {
  display: boolean;
  setDisplay: (params: boolean) => any;
}

const CatalogNav: React.FC<ICatalogNav> = ({ display, setDisplay }) => {
  return (
    <StyledNav display={display}>
      <List>
        {categories.map((category) => (
          <li key={category.name}>
            <StyledLink to='/catalog' onClick={() => setDisplay(false)}>
              {category.display}
            </StyledLink>
          </li>
        ))}
      </List>
    </StyledNav>
  )
}

export default CatalogNav;
