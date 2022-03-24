import styled from 'styled-components';
import { Logo, Search, Nav, UserNav } from '../../ui';

export const StyledHeader = styled.header`
  padding: ${(props) => props.theme.pagePadding};
  padding-top: 0;
  padding-bottom: 0;
`;

export const Wrapper = styled.div`
  background: linear-gradient(to bottom, transparent 40px, ${(props) => props.theme.colors.themeMain} 0);
  padding: 17px 60px 38px;
  display: grid;
  grid-template-areas: 
          'logo .'
          'search user-nav' 
          'catalog-menu nav';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;
  column-gap: ${(props) => props.theme.layoutGap};
  row-gap: 20px;
`;

export const StyledLogo = styled(Logo)`
  grid-area: logo;
`;

export const StyledSearch = styled(Search)`
  grid-area: search;
  margin-left: -20px;
`;

export const StyledUserNav = styled(UserNav)`
  grid-area: user-nav;
  margin-left: -20px;
`;

export const StyledNav = styled(Nav)`
  grid-area: nav;
  margin-left: -20px;
`;

export const CatalogMenu = styled.div`
  grid-area: catalog-menu;
`;