import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm() {
  const [titleVal, setTitle] = useState("");
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  console.log("Title: "+titleVal);
  const [dateVal, setDate] = useState("");
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  console.log("Date: "+dateVal);
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.1" step="0.1" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-10-10" max="2021-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
