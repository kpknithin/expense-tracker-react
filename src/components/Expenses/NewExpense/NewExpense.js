import { useState } from "react/cjs/react.development";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const[isEditing,setIsEditing] = useState(false);
  const saveExpenseDataHaldler = (enteredExpenseData) => {
    
    // Construct the latest ID
    const newExpenseId = new Date().getTime();
    const newExpenseData = {
      ...enteredExpenseData,
      id: "e" + newExpenseId,
    };
    console.log("New Expense Data: ");
    console.log(newExpenseData);

    // Adding new Expense into existing object
    props.onAddExpense(newExpenseData);
    setIsEditing(false);
  };

  const startEditingHandler = (event) => {
    setIsEditing(true);
    event.preventDefault();
  }
  const stopEditingHandler = (event) => {
    setIsEditing(false);
    event.preventDefault();
  }
  return (
    <div className="new-expense">
      {!isEditing && (
    
      <button onClick={startEditingHandler}>Add New Expense</button>
    )}
     {isEditing && (
      <ExpenseForm onSaveExpenseData={saveExpenseDataHaldler} onCancel={stopEditingHandler} />
     )}
    </div>
  );
}

export default NewExpense;
