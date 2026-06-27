import { useContext, useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import "./Transactions.css";

function Transaction() {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [paymentFilter, setPaymentFilter] = useState("All");

  const filteredExpenses = expenses.filter((expense) => {
    const matchTitle = expense.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      categoryFilter === "All" ||
      expense.category === categoryFilter;

    const matchPayment =
      paymentFilter === "All" ||
      expense.payment === paymentFilter;

    return matchTitle && matchCategory && matchPayment;
  });

  return (
    <div className="transaction-page">

      <h2>Transactions</h2>

      <div className="filters">

        <input
          type="text"
          placeholder="Search by Title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option>All</option>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Fuel</option>
          <option>Bills</option>
          <option>Medical</option>
          <option>Entertainment</option>
        </select>

        <select
          value={paymentFilter}
          onChange={(e) => setPaymentFilter(e.target.value)}
        >
          <option>All</option>
          <option>Cash</option>
          <option>UPI</option>
          <option>Card</option>
        </select>

      </div>

      {filteredExpenses.length === 0 ? (
        <h3>No Transactions Found</h3>
      ) : (
        <table>

          <thead>

            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Payment</th>
              <th>Date</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {filteredExpenses.map((expense) => (
              <tr key={expense.id}>

                <td>{expense.title}</td>

                <td>₹{expense.amount}</td>

                <td>{expense.category}</td>

                <td>{expense.payment}</td>

                <td>{expense.date}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteExpense(expense.id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>
      )}

    </div>
  );
}

export default Transaction;