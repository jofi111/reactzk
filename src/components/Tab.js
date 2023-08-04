import React, { useState } from 'react';

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={activeTab === tab.key ? 'tab-button active' : 'tab-button'}
            onClick={() => handleTabClick(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div key={tab.key} className={activeTab === tab.key ? 'active' : 'inactive'}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
