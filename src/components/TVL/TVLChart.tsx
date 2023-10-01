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
import { faker } from '@faker-js/faker';

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
    pool: string;
}

const TVLChart: React.FC<TVLChartProps> = ({ chartData, pool }) => {

    var months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
        "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];

    const labels = chartData.map((point) => {
        const day = point.x.getDate().toString(); // Convert day to a string
        const month = months[point.x.getMonth()]; // Convert month to a string (adding 1 because months are 0-indexed)

        return day + '-' + month;
    });

    const data = {
        labels,
        datasets: [
            {
                data: chartData.map((point) => point.y),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: pool,
            },
        },
    };

    return (
        <Line options={options} data={data} />
    );
}


export default TVLChart;