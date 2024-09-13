import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart = ({ isDarkMode, symbol }) => {
    const [chartData, setChartData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/.netlify/functions/stockData?${symbol}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                if (data.error) {
                    throw new Error(data.message);
                }

                if (data.response && Array.isArray(data.response)) {
                    const labels = data.response.map(item => item.date);
                    const values = data.response.map(item => item.close);

                    setChartData({
                        labels,
                        datasets: [
                            {
                                label: 'Stock Price',
                                data: values,
                                backgroundColor: isDarkMode ? '#ff7777' : '#3c1ead',
                                borderColor: isDarkMode ? '#ff7777' : '#3c1ead',
                                borderWidth: 1,
                            },
                        ],
                    });
                } else {
                    throw new Error('Invalid response format');
                }
            } catch (error) {
                console.error('Fetch error:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [symbol, isDarkMode]);

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
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <Bar data={chartData} options={options} />
                )}
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
