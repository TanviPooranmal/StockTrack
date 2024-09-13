import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ['Part 1', 'Part 2', 'Part 3'],
        datasets: [
            {
                data: [30, 40, 30],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    },
                },
            },
        },
    };

    return (
        <div style={{ width: '24rem', height: '17rem', position: 'relative', backgroundColor: '#FFFFFF', padding: '1.5rem 0 0 0', borderRadius: '0.5rem 0 0 0', boxSizing: 'border-box' }}>
            {/* Chart Title */}
            <div style={{ position: 'absolute', top: '0.2rem', left: '0', width: '100%', textAlign: 'center', fontSize: '1.125rem', fontWeight: 'bold', color: '#000000' }}>
                Chart Title
            </div>
            {/* Chart */}
            <div style={{ width: '90%', height: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Pie
                    data={{
                        ...data,
                        datasets: [
                            {
                                ...data.datasets[0],
                                cutout: '80%',
                            },
                        ],
                    }}
                    options={options}
                />
            </div>
        </div>
    );
};

export default PieChart;
