import React from 'react';
import TopBar from '../components/Topbar/topbar';
import styles from '../css/dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <TopBar />
      <div className={styles.content}>
        <h1>Dashboard</h1>
        {/* Add more content or components for the dashboard here */}
      </div>
    </div>
  );
};

export default Dashboard;
