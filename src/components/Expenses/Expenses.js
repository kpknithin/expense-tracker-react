import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react/cjs/react.development";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(props.filteredYear);

  let filteredExpeses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const filterChangeHandler  = (selectedYear) => {
    console.log("Filtered Expenses with Date: " + selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterExpenses={filterChangeHandler }
      />
      {filteredExpeses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          key={expense.id}
        />
      ))}
    </Card>
  );
};

export default Expenses;
