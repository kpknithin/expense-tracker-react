import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react/cjs/react.development";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(props.filteredYear);

  let filteredExpeses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const filterChangeHandler = (selectedYear) => {
    // child to parent "Lifiting state up or Two way binding"
    console.log("Filtered Expenses with Date: " + selectedYear);
    setFilteredYear(selectedYear);
  };

  const onEditHandler = (id) => {
    props.onEditHandler(id);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterExpenses={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpeses} />
      <ExpenseList items={filteredExpeses} onEditHandler={onEditHandler} />
    </Card>
  );
};

export default Expenses;
