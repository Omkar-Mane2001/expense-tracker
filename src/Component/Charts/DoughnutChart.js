import { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import "./Charts.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const { expenses } = useContext(ExpenseContext);

  // Store category totals
  const categoryData = {};

  expenses.forEach((expense) => {
    const category = expense.category || "Others";

    if (categoryData[category]) {
      categoryData[category] += Number(expense.amount);
    } else {
      categoryData[category] = Number(expense.amount);
    }
  });

  const data = {
    labels: Object.keys(categoryData),

    datasets: [
      {
        label: "Expenses",

        data: Object.values(categoryData),

        backgroundColor: [
          "#5B5CE9",
          "#36A2EB",
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#9966FF",
          "#FF9F40",
          "#2ECC71",
          "#E74C3C",
        ],

        borderColor: "#ffffff",

        borderWidth: 2,

        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "bottom",
      },

      title: {
        display: false,
      },
    },

    cutout: "60%",
  };

  return (
    <div className="chart-card">

      <h2>Expense Overview</h2>

      {expenses.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          No Expense Data Available
        </p>
      ) : (
        <Doughnut data={data} options={options} />
      )}

    </div>
  );
}

export default DoughnutChart;