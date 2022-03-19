import React from 'react';
import { Slider, Tabs } from '../../blocks';
import { Wrapper } from './styles';

const MainPage: React.FC = () => {
  return (
    <main>
      <Wrapper>
        <Slider />
        <Tabs />
      </Wrapper>
    </main>
  )
};

export default MainPage;
