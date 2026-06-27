import { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import "./Charts.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function LineChart() {

  const { expenses } = useContext(ExpenseContext);

  // Monthly data object
  const monthlyData = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  };

  // Add expenses to their month
  expenses.forEach((expense) => {

    if (!expense.date) return;

    const month = new Date(expense.date).toLocaleString("default", {
      month: "short",
    });

    monthlyData[month] += Number(expense.amount);

  });

  // 👇 Put your data object HERE
  const data = {
    labels: Object.keys(monthlyData),

    datasets: [
      {
        label: "Monthly Expense",

        data: Object.values(monthlyData),

        borderColor: "#5B5CE9",

        backgroundColor: "#5B5CE9",

        tension: 0.4,

        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="chart-card">
      <h3>Monthly Expenses</h3>

      {expenses.length === 0 ? (
        <p>No Expense Data</p>
      ) : (
        <Line data={data} options={options} />
      )}
    </div>
  );
}

export default LineChart;