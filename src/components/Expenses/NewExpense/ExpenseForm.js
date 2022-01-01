import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  // const [titleVal, setTitle] = useState("");
  // const [amountVal, setAmount] = useState("");
  // const [dateVal, setDate] = useState("");
  const [expenseData, updateUserInput] = useState(props.expenseData);
  const titleChangeHandler = (event) => {
    expenseData.title = event.target.value;
    updateUserInput({ ...expenseData });
    // setTitle(event.target.value);
  };

  // console.log("Title: " + updateUserInput);
  const amountChangeHandler = (event) => {
    expenseData.amount = +event.target.value;
    updateUserInput({ ...expenseData });
    // setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    expenseData.date = event.target.value;
    updateUserInput({ ...expenseData });
    // setDate(event.target.value);
  };
  // console.log("Date: " + updateUserInput);
  const submitHandler = (event) => {
    expenseData.date = new Date(expenseData.date);
    updateUserInput({ title: "", amount: "", date: "" });
    props.onSaveExpenseData(expenseData);
    event.preventDefault();
  };
  const date = expenseData.date;
  var day = ("0" + date.getDate()).slice(-2);
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  
  var dateVal = date.getFullYear()+"-"+(month)+"-"+(day) ;
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expenseData.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={expenseData.amount}
            onChange={amountChangeHandler}
            min="0.1"
            step="0.1"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={dateVal}
            min="2019-10-10"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
