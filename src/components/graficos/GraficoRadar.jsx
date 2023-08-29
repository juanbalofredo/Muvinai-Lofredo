

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    maintainAspectRatio: false ,
  plugins: {
    legend: {
      position: 'top',
      display:false
    },
  },
};




export const data = {
    labels: ["18-22", "22-28", "28-35", "35-50", "50+"],
    datasets: [
      {
        label: "Personas",
        data: [ 15000, 17000, 13000, 12000, 600],
        backgroundColor: ["rgba(255, 99, 132, 0.2)","rgba(255, 183, 3, 0.2)","rgba(163, 177, 138, 0.2)","rgba(72, 202, 228, 0.2)","rgba(42, 157, 143, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)","rgba(255, 183, 3, 1)","rgba(163, 177, 138, 1)","rgba(72, 202, 228, 1)","rgba(42, 157, 143, 1)"],
        borderWidth: 2,
      },
    ],
  };

export function GraficoRadar() {
  return <Bar options={options} data={data}  />;
}
