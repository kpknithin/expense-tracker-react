import { useState } from "react/cjs/react.development";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
const dt = new Date();
  dt.setMonth(9);
const INITIAL_EXPENSE = [
  
  {
    id: "e1",
    date: new Date(),
    title: "Course Fee",
    amount: 455.0,
  },
  { id: "e2", date: new Date(), title: "Reat Exam Fee", amount: 250.0 },
  {
    id: "e3",
    date: dt,
    title: "React Open Source Donation",
    amount: 500.0,
  },
];
const App = () => {
  const [expense, updateExpense] = useState(INITIAL_EXPENSE);

  const addExpenseHandler = (newExpenseData) => {
    console.log("Expense list updated!!!");
    updateExpense(() => [newExpenseData, ...expense]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expense} filteredYear={new Date().getFullYear().toString()} />
    </div>
  );
};

export default App;
