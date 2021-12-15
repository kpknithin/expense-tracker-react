import Expenses from "./components/Expenses";
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
function App() {
  return (
    <div>
      <Expenses items={expense} />
    </div>
  );
}

export default App;
