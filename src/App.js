import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
const expense = [
  {
    id: "e1",
    date: new Date(),
    title: "Course Fee",
    amount: 455.0,
  },
  { id: "e2", date: new Date(), title: "Reat Exam Fee", amount: 250.0 },
  {
    id: "e3",
    date: new Date(),
    title: "React Open Source Donation",
    amount: 500.0,
  },
];
const App = () => {
  return (
    <div>
      <NewExpense />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
