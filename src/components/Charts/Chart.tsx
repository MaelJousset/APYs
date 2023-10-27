import React, { useEffect } from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

//import { Tooltip.positioners.top } from './Tooltip.ts'
import './Tooltip.ts'
// Register the custom plugin before defining the component
ChartJS.register(
    CategoryScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);




function calculateAverage(data: { x: Date; y: number }[]) {
    const sum = data.reduce((total, point) => total + point.y, 0);
    return sum / data.length;
}

// Function to draw the line for the average value
const drawAverageLine = (chart: any) => {
    if (!chart) return;
    const ctx = chart.ctx;
    const yAxis = chart.scales['y'];

    const data = chart.data.datasets[0].data;
    const sumY = data.reduce((sum: any, point: any) => sum + point, 0);
    const averageY = sumY / data.length;

    const yPosition = yAxis.getPixelForValue(averageY);

    ctx.save();
    ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
    ctx.setLineDash([5, 5]); // Dotted line style
    ctx.beginPath();
    ctx.moveTo(chart.chartArea.left, yPosition);
    ctx.lineTo(chart.chartArea.right, yPosition);
    ctx.stroke();
    ctx.restore();
};


interface CustomChartProps {
    chartData: { x: Date; y: number }[],
}

const CustomChart: React.FC<CustomChartProps> = ({ chartData }) => {

    var months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
        "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];

    const labels = chartData.map((point) => {
        const day = point.x.getDate().toString(); // Convert day to a string
        const month = months[point.x.getMonth()]; // Convert month to a string (adding 1 because months are 0-indexed)

        return month + ' ' + day;
    });

    const maxValue = chartData.reduce((max, dataPoint) => (dataPoint.y > max ? dataPoint.y : max), chartData[0].y);
    const minValue = chartData.reduce((min, dataPoint) => (dataPoint.y < min ? dataPoint.y : min), chartData[0].y);
    const averageValue = chartData.reduce((sum, dataPoint) => sum + dataPoint.y, 0) / chartData.length;

    const data = {
        labels,
        datasets: [
            {
                data: chartData.map((point) => point.y),
                borderColor: '#2C5282',
                backgroundColor: '#2C5282',
                tension: 0.2,
                yAxisID: 'y-axis-0', // Specify the y-axis to use for this dataset
            },
        ],
    };


    const options = {
        elements: {
            point: {
                radius: 0
            }
        },
        interaction: {
            intersect: false,
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            averageLine: {
                beforeDraw: (chart: any) => {
                    drawAverageLine(chart);
                },
            },

            //tooltip: {
            //    position: 'top', // Use 'top' as the position
            //},
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    color: '#4299E1',
                },
                border: {
                    color: '#4299E1',
                },
                ticks: {
                    color: '#2C5282',
                    font: {
                        family: "Plus Jakarta Sans, sans-serif",
                    },
                },
            },
            y: {
                display: false,
                max: maxValue * 1.05,
                min: minValue * 0.95,
            },
        },
        tooltip: {
            position: 'top', // Use 'top' as the position
        },
    };


    return (
        <Line options={options} data={data} />
    );
}


export default CustomChart;