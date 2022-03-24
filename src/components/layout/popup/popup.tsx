import React, { useState } from 'react';
import { Wrapper, Overlay, StyledPopup, CloseButton } from './styles';

export interface IPopup {
  isOpen: boolean;
  setOpen: any;
  children: React.ReactNode;
}

const Popup: React.FC<IPopup> =
  ({ isOpen,
     setOpen,
     children }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <Overlay onClick={() => setOpen(false)} />
      <StyledPopup>
        <CloseButton onClick={() => setOpen(false)}/>
        {children}
      </StyledPopup>
    </Wrapper>
  )
}

export default Popup;
