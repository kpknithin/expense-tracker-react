import ExpenseForm from "./ExpenseForm";
const emptyFormObj = {
  title: "",
  amount: "",
  date: "",
};
function NewExpense(props) {
  const saveExpenseDataHaldler = (enteredExpenseData) => {
    if (enteredExpenseData.id === undefined) {
      // Construct the latest ID
      const newExpenseId = new Date().getTime();
      const newExpenseData = {
        ...enteredExpenseData,
        id: "e" + newExpenseId,
      };
      // Adding new Expense into existing object
      props.onAddExpense(newExpenseData);
    }else{
      props.onAddExpense(enteredExpenseData);
    }

    props.onEditExpense(undefined);
  };

  const startEditingHandler = (event) => {
    props.onEditExpense({ ...emptyFormObj });
    // Init with Null data to empty all the input values
  };
  const stopEditingHandler = (event) => {
    props.onEditExpense(undefined);
  };
  let expenseData = props.expenseData;
  if (props.isEditing && expenseData === undefined) {
    expenseData = emptyFormObj;
  }
  return (
    <div className="new-expense">
      {props.isEditing ? (
        <ExpenseForm
          expenseData={expenseData}
          onSaveExpenseData={saveExpenseDataHaldler}
          onCancel={stopEditingHandler}
        />
      ) : (
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
}

export default NewExpense;
