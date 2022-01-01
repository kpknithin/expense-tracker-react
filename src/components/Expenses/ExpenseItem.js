import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">₹{props.amount}</div>
          <button
            className="btn-edit"
            id="edit"
            title="Edit"
            onClick={() => props.onEditHandler(props.id)}>
            Edit
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
