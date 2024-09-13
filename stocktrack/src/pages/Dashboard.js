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
import { IconButton } from '@mui/material';
import { WbSunny as SunIcon, DarkMode as MoonIcon } from '@mui/icons-material';

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? styles.dashboardDark : styles.dashboard}>
      {/* Sidebar and TopBar receive the dark mode state */}
      <Sidebar isDarkMode={isDarkMode} />
      <div className={styles.mainContent}>
        <TopBar isDarkMode={isDarkMode} />

        {/* Dark mode toggle icon */}
        <div className={styles.toggleIcon}>
          <IconButton onClick={handleToggle} color="inherit">
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </div>

        <div className={styles.content}>
          {/* Welcome card and Bar chart side by side */}
          <div className={styles.cardContainer}>
            <WelcomeCard isDarkMode={isDarkMode} />
            <BarChart symbol="MSFT" isDarkMode={false} />
          </div>

          {/* Line charts in the next row, placed side by side */}
          <div className={styles.lineChartsContainer}>
            <div className={styles.chart1}>
              <LineChart isDarkMode={isDarkMode} />
            </div>
            <div className={styles.chart2}>
              <LineChart isDarkMode={isDarkMode} />
            </div>
            <div className={styles.chart3}>
              <LineChart isDarkMode={isDarkMode} />
            </div>
          </div>

          {/* Bar chart and pie chart side by side */}
          <div className={styles.barPieContainer}>
            <BarChart2 isDarkMode={isDarkMode} />
            <PieChart isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
