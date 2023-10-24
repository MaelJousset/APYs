import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



interface TVLChartProps {
    chartData: { x: Date; y: number }[],
}

const TVLChart: React.FC<TVLChartProps> = ({ chartData }) => {

    var months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
        "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];

    const labels = chartData.map((point) => {
        const day = point.x.getDate().toString(); // Convert day to a string
        const month = months[point.x.getMonth()]; // Convert month to a string (adding 1 because months are 0-indexed)

        return month + ' ' + day;
    });

    const data = {
        labels,
        datasets: [
            {
                data: chartData.map((point) => point.y),
                borderColor: '#2C5282',
                backgroundColor: '#2C5282',
                tension: 0.2,
            },
        ],
    };


    const options = {
        elements: {
            point: {
                radius: 0
            }
        },
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
                display: false,
            },
            y: {
                display: false,
            },
        }
    };

    return (
        <Line options={options} data={data} />
    );
}


export default TVLChart;