import React from 'react';
import { StyledTitle } from './styles';

export interface ITitleProps {
  children: React.ReactChild | React.ReactChildren;
  size: 'XS' | 'S' | 'M' | 'L';
  as: any;
};

const Title: React.FC<ITitleProps> = ({ children, as, size }) => {
  return (
    <StyledTitle as={as} size={size}>
      {children}
    </StyledTitle>
  )
};

export default Title;
