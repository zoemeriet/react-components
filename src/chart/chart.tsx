import React from 'react';
import {
  Chart as ChartJS,
  registerables,
  ChartData,
  ChartTypeRegistry,
  ChartType,
  ChartOptions,
  Plugin,
} from 'chart.js';
import { Chart as ChartReact } from 'react-chartjs-2';

export interface ChartProps extends React.HTMLAttributes<HTMLCanvasElement> {
  className?: string;
  data: ChartData;
  options?: ChartOptions<ChartType>;
  plugins?: Plugin<ChartType>[];
  type?: keyof ChartTypeRegistry;
}

ChartJS.register(...registerables);

export const Chart = ({
  className,
  data,
  options,
  plugins,
  type = 'doughnut',
  ...props
}: ChartProps) => {
  return (
    <ChartReact
      className={className}
      {...props}
      type={type}
      options={options}
      data={data}
      plugins={plugins}
    />
  );
};

export const pluginHorizontalBaseline = (
  color: string,
  dash: number[],
  id: string,
  text: string,
  value: string | number,
): Plugin<ChartType> => {
  return {
    id: id,
    afterDatasetsDraw(chart: any) {
      const {
        ctx,
        chartArea: { left, width },
        scales: { y },
      } = chart;
      ctx.save();
      ctx.lineWidth = 2;
      ctx.strokeStyle = color;
      ctx.setLineDash(dash);
      ctx.strokeRect(left, y.getPixelForValue(value), width, 0);
      ctx.font = '14px Eina';
      ctx.textAlign = 'center';
      ctx.fillStyle = color;
      ctx.fillText(text, left + width / 2, y.getPixelForValue(value) - 10);
      ctx.restore();
    },
  };
};

export const pluginVerticalBaseline = (
  color: string,
  dash: number[],
  id: string,
  text: string,
  value: string | number,
  textAlign: 'left' | 'right' = 'left',
): Plugin<ChartType> => {
  return {
    id: id,
    afterDatasetsDraw(chart: any) {
      const {
        ctx,
        chartArea: { top, height },
        scales: { x },
      } = chart;
      ctx.save();
      ctx.lineWidth = 2;
      ctx.strokeStyle = color;
      ctx.setLineDash(dash);
      ctx.strokeRect(x.getPixelForValue(value), top, 0, height);
      ctx.font = '14px Eina';
      ctx.textAlign = textAlign;
      ctx.fillStyle = color;
      ctx.fillText(
        text,
        textAlign === 'left'
          ? x.getPixelForValue(value) + 10
          : x.getPixelForValue(value) - 10,
        top + 20,
      );
      ctx.restore();
    },
  };
};

export const pluginMiddleText = (
  color: string,
  id: string,
  text: string,
): Plugin<ChartType> => {
  return {
    id: id,
    afterDatasetsDraw(chart: any) {
      const { ctx } = chart;
      ctx.save();
      const xCorr = chart.getDatasetMeta(0).data[0].x;
      const yCorr = chart.getDatasetMeta(0).data[0].y;
      ctx.font = '14px Eina';
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.fillText(text, xCorr, yCorr);
      ctx.restore();
    },
  };
};
