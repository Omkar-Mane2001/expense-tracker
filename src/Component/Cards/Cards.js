import "./Cards.css";
import { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faReceipt,
  faArrowTrendUp,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";

function Cards() {
  const { expenses } = useContext(ExpenseContext);

  // Total Expense
  const totalExpense = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  // Total Transactions
  const totalTransactions = expenses.length;

  // Highest Expense
  const highestExpense =
    expenses.length > 0
      ? Math.max(...expenses.map((expense) => Number(expense.amount)))
      : 0;

  // Average Expense
  const averageExpense =
    expenses.length > 0
      ? (totalExpense / expenses.length).toFixed(2)
      : 0;

  const cards = [
    {
      title: "Total Expense",
      value: `₹${totalExpense}`,
      icon: faWallet,
      color: "#5B5CE9",
    },
    {
      title: "Transactions",
      value: totalTransactions,
      icon: faReceipt,
      color: "#00B894",
    },
    {
      title: "Highest Expense",
      value: `₹${highestExpense}`,
      icon: faArrowTrendUp,
      color: "#E17055",
    },
    {
      title: "Average Expense",
      value: `₹${averageExpense}`,
      icon: faCalculator,
      color: "#0984E3",
    },
  ];

  return (
    <div className="cards">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div
            className="card-icon"
            style={{ background: card.color }}
          >
            <FontAwesomeIcon icon={card.icon} />
          </div>

          <div>
            <h4>{card.title}</h4>
            <h2>{card.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;