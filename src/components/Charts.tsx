import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  TimeScale,
  TimeSeriesScale,
  ChartTypeRegistry,
  ChartData,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  TimeScale,
  TimeSeriesScale
);

interface ChartProps {
  name: string;
  type: keyof ChartTypeRegistry;
  data: ChartData<
    | "line"
    | "bar"
    | "bubble"
    | "doughnut"
    | "pie"
    | "polarArea"
    | "radar"
    | "scatter"
  >;
}

export default function Charts(props: ChartProps) {
  return (
    <div>
      <h2>{props.name}</h2>
      <Chart type={props.type} data={props.data} />
    </div>
  );
}
