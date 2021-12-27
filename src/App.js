import { useState } from "react/cjs/react.development";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
const expense = [
  {
    id: "e1",
    date: new Date(),
    title: "Course Fee",
    amount: 455.0,
  },
  { id: "e2", date: new Date(), title: "Reat Exam Fee", amount: 250.0 },
  {
    id: "e3",
    date: new Date(),
    title: "React Open Source Donation",
    amount: 500.0,
  },
];
const App = () => {
  const [prevExpense, updateExpense] = useState(expense);
  // console.log("Previous Value: "+ JSON.stringify(prevExpense));

  const addExpenseHandler = (newExpenseData) => {
    console.log("Expense list updated!!!");
    expense.push(newExpenseData);
    updateExpense(() => [...prevExpense, newExpenseData]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expense} onExpense />
    </div>
  );
};

export default App;
