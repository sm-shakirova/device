import styled from 'styled-components';

export const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  grid-template-areas: 
          'image image'
          'title price';
`;

export const Image = styled.img`
  display: block;
  grid-area: image;
  display: relative;
`;