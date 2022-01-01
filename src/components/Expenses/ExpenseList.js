import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expense found.</h2>;
  }
const onEditHandler = (id) => {
  props.onEditHandler(id);
}
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          key={expense.id}
          id={expense.id}
          onEditHandler={onEditHandler}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
