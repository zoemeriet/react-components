import type { Meta, StoryObj } from '@storybook/react';
import {
  Chart,
  pluginHorizontalBaseline,
  pluginMiddleText,
  pluginVerticalBaseline,
} from './chart';
import { ChartData, ChartOptions } from 'chart.js';

const meta: Meta<typeof Chart> = {
  component: Chart,
  title: 'Components / Chart',
  args: {
    type: 'doughnut',
  },
};
export default meta;

type Story = StoryObj<typeof Chart>;

/**
 * Bar Chart
 */
const barData = {
  labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
  datasets: [
    {
      label: 'Price',
      data: [12, 23, 9, 39],
      backgroundColor: '#9747FF',
    },
    {
      label: 'Value',
      data: [40, 34, 28, 37],
      backgroundColor: '#1EFFFF',
    },
  ],
};
const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        color: '#8C8CA3',
        font: {
          size: 14,
          family: 'Eina, sans-serif',
        },
        padding: 15,
        usePointStyle: true,
      },
      position: 'bottom' as const,
    },
  },
  scales: {
    x: {
      stacked: true,
      ticks: {
        color: '#C1C1CD',
        font: { size: 10, family: 'Eina, sans-serif' },
      },
      grid: {
        color: '#24242C',
      },
    },
    y: {
      stacked: true,
      ticks: {
        color: '#C1C1CD',
        font: { size: 10, family: 'Eina, sans-serif' },
      },
      grid: {
        color: '#24242C',
      },
    },
  },
};
export const Bar: Story = {
  args: {
    type: 'bar',
    data: barData,
    options: barOptions,
    plugins: [
      pluginHorizontalBaseline(
        '#FF4242',
        [5, 10],
        'horizontalBaseline',
        'Baseline',
        60,
      ),
    ],
  },
};

/**
 * Doughnut Chart
 */
const doughnutData: ChartData = {
  labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
  datasets: [
    {
      label: 'Value',
      data: [47, 35, 11, 6],
      hoverOffset: 4,
      backgroundColor: ['#004DFF', '#F3B700', '#965BF9', '#FF4242'],
      borderWidth: 0,
    },
  ],
};
const doughnutOptions: ChartOptions = {
  plugins: {
    legend: {
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        color: '#8C8CA3',
        font: {
          size: 14,
          family: 'Eina, sans-serif',
        },
        padding: 15,
        usePointStyle: true,
      },
      position: 'bottom',
    },
  },
  aspectRatio: 2,
};
export const Doughnut: Story = {
  args: {
    data: doughnutData,
    options: doughnutOptions,
  },
};

/**
 * Doughnut 2 Chart
 */
const doughnut2Data: ChartData = {
  labels: ['Category 1', 'Category 2', 'Missing'],
  datasets: [
    {
      label: 'Value',
      data: [5, 10, 85],
      backgroundColor: ['#004DFF', '#F3B700', 'transparent'],
      borderWidth: 1,
      borderColor: '#32323E',
    },
  ],
};
const doughnut2Options: ChartOptions = {
  plugins: {
    legend: {
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        color: '#8C8CA3',
        font: {
          size: 14,
          family: 'Eina, sans-serif',
        },
        padding: 15,
        usePointStyle: true,
      },
      position: 'bottom',
    },
    tooltip: {
      usePointStyle: true,
      callbacks: {
        label: (tooltipItem: any) => {
          const value = tooltipItem.raw;
          return value + '%';
        },
      },
    },
  },
  aspectRatio: 2,
};
export const Doughnut2: Story = {
  args: {
    data: doughnut2Data,
    options: doughnut2Options,
    plugins: [pluginMiddleText('#E4E4EA', 'middleLabel', '85% missing')],
  },
};

/**
 * Line Chart
 */
const lineLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
];
const lineData = {
  labels: lineLabels,
  datasets: [
    {
      label: 'Price',
      data: lineLabels.map(() => Math.floor(Math.random() * 1000) + 1),
      borderColor: '#FB62F6',
      backgroundColor: '#FB62F6',
    },
  ],
};
const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        color: '#8C8CA3',
        font: {
          size: 14,
          family: 'Eina, sans-serif',
        },
        padding: 15,
        usePointStyle: true,
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#C1C1CD',
        font: { size: 10, family: 'Eina, sans-serif' },
      },
      grid: { color: '#24242C' },
    },
    y: {
      ticks: {
        color: '#C1C1CD',
        font: { size: 10, family: 'Eina, sans-serif' },
      },
      grid: { color: '#24242C' },
    },
  },
};
export const Line: Story = {
  args: {
    type: 'line',
    data: lineData,
    options: lineOptions,
    plugins: [
      pluginVerticalBaseline(
        'red',
        [6, 6],
        'baseline1',
        'Vertical baseline red',
        'March',
        'right',
      ),
      pluginVerticalBaseline(
        'green',
        [6, 6],
        'baseline2',
        'Vertical baseline green',
        'June',
      ),
    ],
  },
};

/**
 * Radar Chart
 */
const radarLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
];
const radarData = {
  labels: radarLabels,
  datasets: [
    {
      label: 'Price',
      data: radarLabels.map(() => Math.floor(Math.random() * 1000) + 1),
      borderColor: 'rgb(243, 183, 0)',
      backgroundColor: 'rgba(243, 183, 0, 0.2)',
    },
    {
      label: 'Value',
      data: radarLabels.map(() => Math.floor(Math.random() * 1000) + 1),
      borderColor: 'rgb(151, 71, 255)',
      backgroundColor: 'rgba(151, 71, 255, 0.2)',
      borderDash: [6, 6],
    },
  ],
};
const radarOptions = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        color: '#8C8CA3',
        font: {
          size: 14,
          family: 'Eina, sans-serif',
        },
        padding: 15,
        usePointStyle: true,
      },
      position: 'bottom' as const,
    },
  },
  scales: {
    r: {
      min: 0,
      ticks: {
        color: '#C1C1CD',
        backdropColor: 'transparent',
        font: { size: 10, family: 'Eina, sans-serif' },
      },
      angleLines: {
        color: '#24242C',
      },
      grid: {
        color: '#24242C',
      },
      pointLabels: {
        color: '#C1C1CD',
        font: {
          size: 14,
          family: 'Eina, sans-serif',
        },
      },
    },
  },
  aspectRatio: 2,
};
export const Radar: Story = {
  args: {
    type: 'radar',
    data: radarData,
    options: radarOptions,
  },
};
