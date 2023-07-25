import "./App.css";
import ExpenseList from "./Components/Expense/ExpenseList";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car insurance",
      amount: 114.75,
      date: new Date(2022, 9, 5),
    },
    {
      id: "e2",
      title: "Grocery",
      amount: 112.25,
      date: new Date(2022, 9, 10),
    },
    {
      id: "e3",
      title: "Internet",
      amount: 110.75,
      date: new Date(2022, 9, 12),
    },
  ];

  return (
    <div>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
