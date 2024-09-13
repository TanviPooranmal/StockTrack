import React from 'react';
import {
  TopBar,
  Sidebar,
  WelcomeCard,
  BarChart,
  LineChart,
  PieChart,
  BarChart2
} from '../components';
import styles from '../css/dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <div className={styles.content}>
          {/* Welcome card and Bar chart side by side */}
          <div className={styles.cardContainer}>
            <WelcomeCard />
            <BarChart />
          </div>
          {/* Line charts in the next row, placed side by side */}
          <div className={styles.lineChartsContainer}>
          <div className={styles.chart1}>
                <LineChart />
            </div>
            <div className={styles.chart2}>
                <LineChart />
            </div>
            <div className={styles.chart3}>
                <LineChart />
            </div>
          </div>
          {/* Bar chart and pie chart side by side */}
          <div className={styles.barPieContainer}>
            <BarChart2 />
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
