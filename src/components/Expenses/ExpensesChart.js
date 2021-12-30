import { useState } from "react/cjs/react.development";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Nay", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  const [expenseChart, setExpenseChart] = useState(chartDataPoints);
  for (const expense of props.expenses) {
    const month = expense.date.getMonth();
    chartDataPoints[month].value += Math.round(expense.amount);
  }
  
  return <Chart dataPoints={expenseChart}/>;
};

export default ExpensesChart;
