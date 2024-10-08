import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ColumnChart = ({ isDarkMode }) => {
  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7'],
    datasets: [
      {
        label: 'Data Set 1',
        data: [10, 20, 30, 40, 50, 60, 21],
        backgroundColor: isDarkMode ? '#3c1ead' : 'rgba(75, 192, 192, 0.6)',
        borderColor: isDarkMode ? '#3c1ead' : 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Data Set 2',
        data: [15, 25, 35, 45, 55, 65, 54],
        backgroundColor: isDarkMode ? '#ff7777' : 'rgba(153, 102, 255, 0.6)',
        borderColor: isDarkMode ? '#ff7777' : 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: isDarkMode ? '#ECECEC' : '#000000',
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Categories',
          color: isDarkMode ? '#ECECEC' : '#000000',
        },
        ticks: {
          color: isDarkMode ? '#ECECEC' : '#000000',
        },
      },
      y: {
        stacked: false,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Values',
          color: isDarkMode ? '#ECECEC' : '#000000',
        },
        ticks: {
          color: isDarkMode ? '#ECECEC' : '#000000',
        },
      },
    },
  };

  return (
    <div
      style={{
        width: '48rem',
        height: '17rem',
        backgroundColor: isDarkMode ? '#0D0C0F' : '#FFFFFF',
        borderRadius: '0.5em',
        overflow: 'hidden',
      }}
    >
      <Bar data={data} options={options} style={{ width: 'auto', height: '100%' }} />
    </div>
  );
};

export default ColumnChart;
