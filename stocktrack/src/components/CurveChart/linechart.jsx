import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales',
        data: [50, 60, 70, 80, 90, 100, 110],
        borderColor: 'rgb(128, 0, 128)',
        backgroundColor: 'rgba(128, 0, 128, 0.2)',
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
    <div style={{ width: 'auto', maxWidth: '25rem', height: '6rem', display: 'flex', borderRadius: '8px', overflow: 'hidden' }}>
      {/* Left half with points */}
      <div
        style={{
          width: '50%',
          padding: '0.75rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '0.5rem',
          backgroundColor: '#ffffff',
        }}
      >
        <span style={{ color: '#4A4A4A', fontSize: '0.875rem', fontWeight: 'bold' }}>Point 1</span>
        <span style={{ color: '#4A4A4A', fontSize: '0.875rem', fontWeight: 'bold' }}>Point 2</span>
        <span style={{ color: '#4A4A4A', fontSize: '0.875rem', fontWeight: 'bold' }}>Point 3</span>
      </div>

      {/* Right half with chart */}
      <div style={{
        width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF'
      }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
