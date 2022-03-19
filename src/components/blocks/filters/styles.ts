import styled from 'styled-components';

export const StyledFilters = styled.section`
  background: linear-gradient(to bottom, 
      ${(props) => props.theme.colors.basicGray} 70px, 
      ${(props) => props.theme.colors.basicLightGray} 0
  );
  height: 100%;
`;

export const Wrapper = styled.div`
  padding: 0 70px 0 200px;
  margin-left: auto;
`;

export const Header = styled.div`
  height: 70px;
  display: grid;
  align-items: center;
`;

