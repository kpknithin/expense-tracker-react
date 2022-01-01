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
  { id: "e2", date: new Date(), title: "React Exam Fee", amount: 250.0 },
  {
    id: "e3",
    date: dt,
    title: "React Open Source Donation",
    amount: 500.0,
  },
];
const App = () => {
  const [expense, updateExpense] = useState(INITIAL_EXPENSE);
  const [expenseData, setIsEditing] = useState(undefined);

  const addExpenseHandler = (newExpenseData) => {
    console.log("Expense list updated!!!");
    const isEditObj = expense.find((exp) => exp.id === newExpenseData.id);
    if (isEditObj === undefined) {
      updateExpense(() => [newExpenseData, ...expense]);
    }else{
      isEditObj.title = newExpenseData.title;
      isEditObj.amount = newExpenseData.amount;
      isEditObj.date = newExpenseData.date;
      updateExpense(() => [...expense]);
    }
  };

  const onEditHandler = (id) => {
    const obj2Edit = expense.find((exp) => exp.id === id);
    console.log("Edited: " + JSON.stringify(obj2Edit));
    setIsEditing(obj2Edit);
  };
  return (
    <div>
      <NewExpense
        isEditing={expenseData !== undefined}
        onEditExpense={setIsEditing}
        expenseData={expenseData}
        onAddExpense={addExpenseHandler}
      />
      <Expenses
        items={expense}
        filteredYear={new Date().getFullYear().toString()}
        onEditHandler={onEditHandler}
      />
    </div>
  );
};

export default App;
