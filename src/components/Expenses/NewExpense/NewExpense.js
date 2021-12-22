import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
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
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHaldler} />
    </div>
  );
}

export default NewExpense;
