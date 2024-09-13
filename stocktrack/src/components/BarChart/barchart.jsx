import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart = ({ isDarkMode }) => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: isDarkMode ? '#ff7777' : '#3c1ead',
                borderColor: isDarkMode ? '#ff7777' : '#3c1ead',
                borderWidth: 1,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: isDarkMode ? '#ECECEC' : '#000000',
                },
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: isDarkMode ? '#ECECEC' : '#000000',
                },
                beginAtZero: true,
            },
        },
    };

    return (
        <div
            style={{
                position: 'relative',
                height: '12.0625rem',
                width: '24rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isDarkMode ? '#0D0C0F' : '#FFFFFF',
                borderRadius: '0.5em',
            }}
        >
            <div style={{ width: '100%', height: '100%' }}>
                <Bar data={data} options={options} />
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '0.5rem',
                    left: '1rem',
                    fontSize: '1.125rem',
                    fontWeight: 'bold',
                    color: isDarkMode ? '#ECECEC' : '#000000',
                    backgroundColor: isDarkMode ? '#0D0C0F' : '#FFFFFF',
                    padding: '0 0.5rem',
                    borderRadius: '0.25rem',
                }}
            >
                Chart Title
            </div>
        </div>
    );
};

export default BarChart;
