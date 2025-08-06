import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'admin-auth', label: 'Admin Auth' },
    { id: 'admin-drugs', label: 'Manage Drugs' },
    { id: 'user-auth', label: 'User Auth' },
    { id: 'user-drugs', label: 'Browse Drugs' }
  ];

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
