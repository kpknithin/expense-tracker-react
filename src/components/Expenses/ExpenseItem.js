import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [amount, setTitle] = useState(props.amount);
  // console.log("Compent Evaluating");
  const clickHandler = () => {
    console.log("onlick : " + amount);

    //  setInterval(() => {
    console.log("Interval triggered");
    setTitle(amount + 1.0);
    //  }, 4000);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">₹{amount}</div>
          <button
            className="btn-edit"
            id="edit"
            title="Edit"
            onClick={clickHandler}
          >
            Edit
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
