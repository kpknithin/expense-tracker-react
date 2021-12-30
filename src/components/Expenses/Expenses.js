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
    console.log("Filtered Expenses with Date: " + selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterExpenses={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpeses} />
      <ExpenseList items={filteredExpeses} />
    </Card>
  );
};

export default Expenses;
