import React from 'react';
import {
  TopBar,
  Sidebar
} from '../components';
import styles from '../css/dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <div className={styles.content}>
          <h1>Dashboard</h1>
          {/* Add more content or components for the dashboard here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
