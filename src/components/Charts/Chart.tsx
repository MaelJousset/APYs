import React from "react";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

import './Tooltip'


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
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x"
            />
            <YAxis />
            <Tooltip
                position={{ y: 0 }}
            />
            <Legend />
            <Line
                type="monotone"
                dataKey="y"
                stroke="#2C5282"
                strokeWidth={2}
                legendType="none"
                dot={false}
            />
            <ReferenceLine y={averageValue} label="Average" stroke="#90CDF4" strokeDasharray="3 3" />
        </LineChart>
        //</ResponsiveContainer>
    );
}


export default CustomChart;

