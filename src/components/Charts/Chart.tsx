import React from "react";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Label } from 'recharts';

// import CustomTooltip from "./Tooltip";
import CustomTooltip from './Tooltip'
import { Chart } from "chart.js";


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
                top: 2,
                right: 2,
                left: 2,
                bottom: 2,
            }}
        >
            <XAxis
                dataKey="x"
            />
            <YAxis
                hide={true}
                domain={[minValue * 0.95, maxValue * 1.05]}
            />
            <Tooltip
                // content={<CustomTooltip active={Tooltip.defaultProps.active} payload={[{ price: 42, date: 'Some Data' }]} label={Tooltip.name} />}
                position={{ y: 0 }}
                cursor={{ fill: "transparent" }}
                offset={-10}
                allowEscapeViewBox={{ x: true, y: true }}
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
            <ReferenceLine y={maxValue} stroke="#90CDF4" strokeDasharray="3 3" >
                <Label value="Max" position={"insideBottomLeft"} />
            </ReferenceLine>
            <ReferenceLine y={minValue} stroke="#90CDF4" strokeDasharray="3 3" >
                <Label value="Min" position={"insideBottomLeft"} />
            </ReferenceLine>
            <ReferenceLine y={averageValue} stroke="#90CDF4" strokeDasharray="3 3" >
                <Label value="Average" position={"insideBottomLeft"} />
            </ReferenceLine>
        </LineChart>
        //</ResponsiveContainer>
    );
}


export default CustomChart;

