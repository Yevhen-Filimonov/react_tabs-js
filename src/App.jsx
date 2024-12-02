import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTabId, setActiveTabId] = useState('tab-1');

  const handleTabSelected = id => {
    setActiveTabId(id);
  };

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  let selectedTitle = 'Selected tab is ';

  if (activeTab) {
    selectedTitle += activeTab.title;
  }

  return (
    <div className="section">
      <h1 className="title">{selectedTitle}</h1>

      <div data-cy="TabsComponent">
        <Tabs
          tabs={tabs}
          activeTabId={activeTabId}
          onTabSelected={handleTabSelected}
        />
      </div>
    </div>
  );
};
