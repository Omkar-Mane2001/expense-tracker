import { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";

import Cards from "../Cards/Cards";
import DoughnutChart from "../Charts/DoughnutChart";
import LineChart from "../Charts/LineChart";

import "./Dashboard.css";

function Dashboard() {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div className="dashboard">


      <div className="dashboard-content">

        <Cards />

        <div className="chart-row">
          <DoughnutChart />
          <LineChart />
        </div>

        <div className="recent-transactions">

          <h2>Recent Transactions</h2>

          {expenses.length === 0 ? (
            <p>No Expenses Added</p>
          ) : (
            expenses.slice(-5).reverse().map((expense) => (
              <div className="transaction-card" key={expense.id}>
                <h4>{expense.title}</h4>

                <p>₹ {expense.amount}</p>

                <span>{expense.category}</span>
              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;