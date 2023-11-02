import React from "react";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Label } from 'recharts';

// import CustomTooltip from "./Tooltip";
import CustomTooltip from './Tooltip'
import { Chart } from "chart.js";


interface CustomChartProps {
    isSimple?: boolean;
    width?: number;
    height?: number;
    chartData: { x: string; y: number }[],
}


const CustomChart: React.FC<CustomChartProps> = ({ isSimple, width, height, chartData }) => {

    const maxValue = chartData.reduce((max, dataPoint) => (dataPoint.y > max ? dataPoint.y : max), chartData[0].y);
    const minValue = chartData.reduce((min, dataPoint) => (dataPoint.y < min ? dataPoint.y : min), chartData[0].y);
    const averageValue = chartData.reduce((sum, dataPoint) => sum + dataPoint.y, 0) / chartData.length;

    return (
        //<ResponsiveContainer width="100%" height="100%">
        <LineChart
            width={width}
            height={height}
            data={chartData}
            margin={{
                top: 2,
                right: 2,
                left: 2,
                bottom: 2,
            }}
        >
            <XAxis
                hide={isSimple ? true : false}
                dataKey="x"
            />
            <YAxis
                hide={true}
                domain={[minValue * 0.95, maxValue * 1.05]}
            />
            {isSimple ? null :
                <Tooltip
                    // content={<CustomTooltip active={Tooltip.defaultProps.active} payload={[{ price: 42, date: 'Some Data' }]} label={Tooltip.name} />}
                    position={{ y: 0 }}
                    cursor={{ fill: "transparent" }}
                    offset={-10}
                    allowEscapeViewBox={{ x: true, y: true }}
                />
            }
            {isSimple ? null :
                <Legend />
            }
            <Line
                type="monotone"
                dataKey="y"
                stroke="#2C5282"
                strokeWidth={2}
                legendType="none"
                dot={false}
            />
            {isSimple ? null :
                <ReferenceLine y={maxValue} stroke="#90CDF4" strokeDasharray="3 3" >
                    <Label value="Max" position={"insideBottomLeft"} />
                </ReferenceLine>
            }
            {isSimple ? null :
                <ReferenceLine y={minValue} stroke="#90CDF4" strokeDasharray="3 3" >
                    <Label value="Min" position={"insideBottomLeft"} />
                </ReferenceLine>
            }
            {isSimple ? null :
                <ReferenceLine y={averageValue} stroke="#90CDF4" strokeDasharray="3 3" >
                    <Label value="Average" position={"insideBottomLeft"} />
                </ReferenceLine>
            }
        </LineChart>
        //</ResponsiveContainer>
    );
}


export default CustomChart;

