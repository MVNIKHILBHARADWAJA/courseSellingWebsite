import React, { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardContent from '../components/DashboardContent';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('myCourses');

  return (
    <div className="dashboard">
      <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <DashboardContent activeTab={activeTab} />
    </div>
  );
};

export default Dashboard;
