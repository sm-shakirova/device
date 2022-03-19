import React from 'react';
import { ITab } from '../../../data/tabs';
import { Content } from './styles';
import { Title } from '../../ui';

const Tab: React.FC<{ tab?: ITab }> = ({ tab }) => {
  return tab ? (
    <Content background={tab.icon ? tab.icon : ''}>
      <div>
        <Title as='h3' size='L'>{tab.title}</Title>
        <p>{tab.text}</p>
      </div>
    </Content>
  ) : null
};

export default Tab;
