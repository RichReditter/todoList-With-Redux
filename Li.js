import React, { useState } from "react";
import "./Li.css";
export default function Li(props) {
  const [isChecked, setIsChecked] = useState(false);
  const number = props.number;
  const task = props.task;
  const remove = () => {
    props.onUpdateTasks(props.number);
  };

  function handleClick(event) {
    setIsChecked(!isChecked);
  }
  return task !== undefined ? (
    <li className={isChecked ? "checked" : ""} onClick={handleClick}>
      {task}
      {isChecked ? (
        <button type="button" className="btn btn-danger close" onClick={remove}>
          Delete task
        </button>
      ) : (
        <div></div>
      )}
    </li>
  ) : (
    <li className="none"></li>
  );
}
