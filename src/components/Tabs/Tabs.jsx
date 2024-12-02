import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  const handleTabClick = id => {
    if (id !== validTabId) {
      onTabSelected(id);
    }
  };

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          const className = tab.id === validTabId ? 'is-active' : '';

          return (
            <li key={tab.id} className={className} data-cy="Tab">
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === validTabId)?.content}
      </div>
    </div>
  );
};
