import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toAdd, toDelete } from "./features/listSlice.js";
import "./App.css";
import Li from "./Li.js";

function App() {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.list.value);
  const dispatch = useDispatch();

  function updateValue(event) {
    setTask(event.target.value);
  }
  function deleteTask(id) {
    dispatch(toDelete(id));
  }
  function checkTask(task) {
    if (task.length > 0 && !tasks.includes(task)) {
      dispatch(toAdd(task));
    } else {
      if (task.length === 0) {
        alert("Задача не может быть пустой. Попробуйте снова...");
      } else if (tasks.includes(task)) {
        alert(
          "Задача не может повторяться. Она уже есть в списке. Попробуйте снова..."
        );
      }
    }
    handleClear();
  }
  const handleClear = () => {
    setTask("");
  };
  return (
    <React.Fragment>
      <div className="App">
        <div id="myDIV" className="header">
          <h2>My To Do List</h2>
          <input
            value={task}
            type="text"
            id="myInput"
            placeholder="enter your task :)"
            onChange={updateValue}
          />
          <span
            className="addBtn"
            onClick={() => {
              checkTask(task);
            }}
          >
            Add
          </span>
        </div>

        <ul id="myUL">
          {tasks.map((task, i) => (
            <Li key={i} number={i} task={task} onUpdateTasks={deleteTask} />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default App;
