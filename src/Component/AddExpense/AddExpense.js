import { useContext, useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import "./AddExpense.css";

function AddExpense() {
  const { addExpense } = useContext(ExpenseContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [payment, setPayment] = useState("UPI");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: Date.now(),
      title,
      amount,
      category,
      payment,
      date,
      description,
    };

    addExpense(expense);

    setTitle("");
    setAmount("");
    setCategory("Food");
    setPayment("UPI");
    setDate("");
    setDescription("");

    alert("Expense Added Successfully");
  };

  return (
    <div className="add-expense">
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter expense title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Amount</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Medical</option>
          <option>Entertainment</option>
          <option>Fuel</option>
        </select>

        <label>Payment Method</label>
        <select
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        >
          <option>UPI</option>
          <option>Cash</option>
          <option>Credit Card</option>
          <option>Debit Card</option>
          <option>Net Banking</option>
        </select>

        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Description</label>
        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button type="submit">+ Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;