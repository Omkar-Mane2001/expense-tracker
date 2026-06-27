import { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import DoughnutChart from "../Charts/DoughnutChart";
import "./Overview.css";

function Overview() {

    const { expenses } = useContext(ExpenseContext);

    // Group expenses by category
    const categoryTotals = {};

    expenses.forEach((expense) => {

        if (expense.type === "Income") return;

        if (categoryTotals[expense.category]) {
            categoryTotals[expense.category] += Number(expense.amount);
        } else {
            categoryTotals[expense.category] = Number(expense.amount);
        }
    });

    const totalExpense = Object.values(categoryTotals).reduce(
        (sum, value) => sum + value,
        0
    );

    return (
        <div className="overview">

            <div className="overview-header">
                <h2>Expense Overview</h2>
            </div>

            <div className="overview-content">

                <div className="chart">

                    <DoughnutChart expenses={expenses} />

                    <h3>₹ {totalExpense}</h3>
                    <p>Total Expenses</p>

                </div>

                <div className="category-list">

                    {
                        Object.entries(categoryTotals).map(([category, amount]) => (

                            <div
                                className="category-item"
                                key={category}
                            >

                                <span>{category}</span>

                                <strong>₹ {amount}</strong>

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>
    );
}

export default Overview;