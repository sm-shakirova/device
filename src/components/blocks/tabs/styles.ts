import styled from 'styled-components';

interface IContent {
  background?: string;
};

export const StyledTabs = styled.section`
  background: linear-gradient(to bottom, white 100px, ${(props) => props.theme.colors.basicLight} 0);
  padding: ${(props) => props.theme.pagePadding};
  padding-top: 0;
  padding-bottom: 70px;
  display: grid;
  grid-template-columns: ${(props) => props.theme.layoutColumnWide} 1fr;
  align-items: center;
  column-gap: 120px;
`;

export const Nav = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Content = styled.div<IContent>`
  min-height: 380px;
  margin-right: 60px;
  padding-right: 240px;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: center right;
  background-size: 170px auto;
  display: grid;
  align-items: center;
`;

