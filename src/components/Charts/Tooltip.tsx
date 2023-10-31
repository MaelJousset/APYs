interface CustomTooltipProps {
    active: boolean;
    payload: any[];
    label: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="tooltip">
                <p className="tooltipLabel">{`$${payload[0].payload?.price}`}</p>
                <p className="tooltipDesc">{`${payload[0]?.payload?.date}`}</p>
            </div>
        )
    }

    return null
}

export default CustomTooltip