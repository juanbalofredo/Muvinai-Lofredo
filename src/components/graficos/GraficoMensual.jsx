import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  color:'white',
  responsive: true,
  plugins: {
    legend: {
      display:false,
      position: "top",
    },
  },
  
};

const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
//Estos datos estarian traidos todos de la base de datos.
export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Pesos",
      data: [200, 400, 410, 300, 430, 300, 500],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.2)",
    },
  ],
};

export function GrafMensual() {
  return <Line options={options} data={data} />;
}
