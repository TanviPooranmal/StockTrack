import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ isDarkMode }) => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales',
        data: [50, 60, 70, 80, 90, 100, 110],
        borderColor: '#ff7777', // Updated color
        backgroundColor: 'rgba(255, 119, 119, 0.2)', // Updated color
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
        tension: 0.4,
      },
      point: {
        radius: 3,
        hoverRadius: 5,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{
      width: 'auto',
      maxWidth: '25rem',
      height: '6rem',
      display: 'flex',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: isDarkMode ? '#0D0C0F' : '#ffffff', // Updated for dark mode
    }}>
      {/* Left half with points */}
      <div
        style={{
          width: '50%',
          padding: '0.75rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '0.5rem',
          backgroundColor: isDarkMode ? '#0D0C0F' : '#ffffff', // Background for the left half
        }}
      >
        <span style={{
          color: isDarkMode ? '#E3E3E3' : '#FF6347',
          fontSize: '1rem',
          fontWeight: 'bold',
          borderBottom: '2px solid',
          borderColor: isDarkMode ? '#E3E3E3' : '#FF6347',
        }}>
          Point 1
        </span>
        <span style={{
          color: isDarkMode ? '#E3E3E3' : '#4682B4',
          fontSize: '0.875rem',
          fontWeight: 'normal',
          backgroundColor: isDarkMode ? '#2E2E2E' : '#f0f8ff',
          padding: '0.25rem',
          borderRadius: '4px',
        }}>
          Point 2
        </span>
        <span style={{
          color: isDarkMode ? '#E3E3E3' : '#32CD32',
          fontSize: '0.75rem',
          fontWeight: 'lighter',
          textTransform: 'uppercase',
          letterSpacing: '0.05rem',
        }}>
          Point 3
        </span>
      </div>

      {/* Right half with chart */}
      <div style={{
        width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: isDarkMode ? '#0D0C0F' : '#FFFFFF'
      }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
