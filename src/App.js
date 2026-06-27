import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Component/Navbar/NavBar";
import Dashboard from "./Component/Dashboard/Dashboard";
import AddExpense from "./Component/AddExpense/AddExpense";
import Transactions from "./Component/Transaction/Transaction"; 
function App() {
  return (
    <BrowserRouter>
      <Navbar />

  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/add-expense" element={<AddExpense />} />
    <Route path="/transaction-page" element={<Transactions />} />
  </Routes>
    </BrowserRouter>
  );
}

export default App;