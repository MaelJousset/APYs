import { Chart, Tooltip, TooltipPositionerFunction, ChartType, Point } from 'chart.js';

// Register the necessary components
Chart.register(Tooltip);

// Define your custom positioner
// Define your custom positioner
Tooltip.positioners.top = function (elements: any, eventPosition: any) {
    //if (!elements.length) return false;

    const { chartArea: { top }, scales: { x, y } } = this.chart;
    // Assuming you want to display the tooltip at the top
    //const x = eventPosition.x;
    //const y = eventPosition.y;
    //const y = elements[0].parsed.y;
    const xValue = x.getValueForPixel(eventPosition.x);
    var value_x = 0;

    if (typeof xValue === 'number') {
        value_x = x.getPixelForValue(xValue);
    }

    return {
        x: value_x,
        y: top,
        //xAlign: 'center',
        //yAlign: 'top',
    };
};

declare module 'chart.js' {
    interface TooltipPositionerMap {
        top: TooltipPositionerFunction<ChartType>;
    }
}



