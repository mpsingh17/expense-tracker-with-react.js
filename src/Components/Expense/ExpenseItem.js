import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const buttonClickHandler = () => {
    setTitle("updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h1>{title}</h1>
        <p className="expense-item__price">${props.amount}</p>

        <button onClick={buttonClickHandler}>Update Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
