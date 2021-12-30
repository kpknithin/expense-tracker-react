import { useState } from "react/cjs/react.development";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHaldler = (enteredExpenseData) => {
    // Construct the latest ID
    const newExpenseId = new Date().getTime();
    const newExpenseData = {
      ...enteredExpenseData,
      id: "e" + newExpenseId,
    };

    // Adding new Expense into existing object
    props.onAddExpense(newExpenseData);
    setIsEditing(false);
  };

  const startEditingHandler = (event) => {
    setIsEditing(true);
  };
  const stopEditingHandler = (event) => {
    setIsEditing(false);
  
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHaldler}
          onCancel={stopEditingHandler}
        />
      ) : (
        <button type="button" onClick={startEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
