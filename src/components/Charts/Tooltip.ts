import { Chart, Tooltip, TooltipPositionerFunction, ChartType } from 'chart.js';


// Register the necessary components
Chart.register(Tooltip);

// Define your custom positioner
// Define your custom positioner
Tooltip.positioners.top = function (elements: any, eventPosition: any) {
    if (!elements.length) return false;

    // Assuming you want to display the tooltip at the top
    const x = eventPosition.x;
    const y = elements[0].parsed.y;

    return {
        x: x,
        y: 0,
        xAlign: 'center',
        yAlign: 'top',
    };
};

declare module 'chart.js' {
    interface TooltipPositionerMap {
        top: TooltipPositionerFunction<ChartType>;
    }
}



