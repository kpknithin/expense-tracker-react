import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("click Event!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
        <button className="btn-edit" onClick={clickHandler}>Edit</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
