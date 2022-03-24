import styled from 'styled-components';
import Button from '../button/button';

export const StyledButton = styled(Button)`
  position: absolute;
  display: none;
  z-index: 2;
  top: 180px;
  left: 0;
  right: 0;
  margin: auto;
`;

export const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  grid-template-areas: 
          'image image'
          'title price';
  gap: 30px;
  position: relative;

  &:after {
    display: none;
    content: '';
    width: 360px;
    height: 380px;
    background-color: rgba(240, 240, 240, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }
  
  &:hover:after {
    display: block;
  }
  
  &:hover ${StyledButton} {
    display: inline-block;
  }
`;

export const Image = styled.img`
  display: block;
  grid-area: image;
  cursor: pointer;
`;

export const Price = styled.p`
  grid-area: price;
  margin: 0;
  text-align: end;
  color: ${(props) => props.theme.colors.basicDark};
`;
