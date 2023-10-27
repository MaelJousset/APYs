import React from "react";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './Tooltip'


function calculateAverage(data: { x: Date; y: number }[]) {
    const sum = data.reduce((total, point) => total + point.y, 0);
    return sum / data.length;
}

interface CustomChartProps {
    chartData: { x: string; y: number }[],
}


const CustomChart: React.FC<CustomChartProps> = ({ chartData }) => {

    const maxValue = chartData.reduce((max, dataPoint) => (dataPoint.y > max ? dataPoint.y : max), chartData[0].y);
    const minValue = chartData.reduce((min, dataPoint) => (dataPoint.y < min ? dataPoint.y : min), chartData[0].y);
    const averageValue = chartData.reduce((sum, dataPoint) => sum + dataPoint.y, 0) / chartData.length;

    return (
        //<ResponsiveContainer width="100%" height="100%">
        <LineChart
            width={500}
            height={300}
            data={chartData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x"
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="y" stroke="#82ca9d" />
        </LineChart>
        //</ResponsiveContainer>
    );
}


export default CustomChart;

