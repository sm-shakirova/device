import React, { useRef } from 'react';
import { useStore } from 'effector-react';
import { $tabs, $currentTab, changeTab }  from '../../../model/tabs';
import { StyledTabs, Nav } from './styles';
import Tab from './tab';

const Tabs: React.FC = () => {
  const tabs = useStore($tabs);
  const currentTab = useStore($currentTab);

  return (
    <StyledTabs id='tabs'>
      <h2 className='visually-hidden'>Сервисы</h2>
      <Nav>
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button type='button' onClick={() => changeTab(tab.id)}>
              {tab.title}
            </button>
          </li>
        ))}
      </Nav>
      <Tab tab={tabs.find((tab) => tab.id === currentTab)}/>
    </StyledTabs>
  )
};

export default Tabs;
