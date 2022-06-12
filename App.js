import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toAdd, toDelete } from "./features/listSlice.js";
import "./App.css";
import Li from "./Li.js";

function App() {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.list.value);
  const dispatch = useDispatch();
  console.log(tasks);
  function updateValue(event) {
    setTask(event.target.value);
  }
  let myTimeOut;
  function deleteTask(id) {
    dispatch(toDelete(id));
  }
  return (
    <React.Fragment>
      <div className="App">
        <div id="myDIV" className="header">
          <h2>My To Do List</h2>
          <input
            type="text"
            id="myInput"
            placeholder="enter your task :)"
            onChange={updateValue}
          />
          <span
            className="addBtn"
            onClick={() => {
              task.length
                ? dispatch(toAdd(task))
                : alert("поле задачи не должна быть пустой");
            }}
          >
            Add
          </span>
        </div>

        <ul id="myUL">
          {/* <List tasks={tasks} onUpdateTasks = {deleteTask}/> */}
          {tasks.map((task, i) => (
            <Li key={i} number={i} task={task} onUpdateTasks={deleteTask} />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default App;
