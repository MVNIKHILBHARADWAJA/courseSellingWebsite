import React from 'react';
import './DashboardSidebar.css';

const DashboardSidebar = ({ activeTab, setActiveTab }) => {
  const tabs = ['myCourses', 'profile', 'history', 'certificates'];

  return (
    <div className="dashboard-sidebar">
      <h3>Dashboard</h3>
      <ul>
        {tabs.map(tab => (
          <li
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'myCourses' && ' My Courses'}
            {tab === 'profile' && ' Profile Settings'}
            {tab === 'history' && ' Purchase History'}
            {tab === 'certificates' && ' Certificates'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
