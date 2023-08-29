import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function GrafDonut(data) {
  return (
    <Pie
      data={data.data}
      options={{
        color: "white",
        plugins: {
          legend: {
            position: "right",
            labels: {
              font: {
                size: "10vw",
              },
              boxWidth: 10,
              boxHeight: 10,
            },
          },
        },
      }}
    />
  );
}
