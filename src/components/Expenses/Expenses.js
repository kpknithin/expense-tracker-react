import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react/cjs/react.development";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterExpenses = (selectedYear) => {
    console.log("Filtered Expenses with Date: " + selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterExpenses={filterExpenses}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
