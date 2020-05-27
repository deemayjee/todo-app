import React, { useState } from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import AddTodoList from "./components/AddTodoList";
import EditTodoList from "./components/EditTodoList";

function App() {
  const [dailytask, setDailyTask] = useState([]);
  const [editTask, setEditTask] = useState({});
  const [hideEditTask, setHideEditTask] = useState(true);

  const getDataFromAddTodoList = (data) => {
    let newDailyTask = [...dailytask, data];
    setDailyTask(newDailyTask);
  };

  const getTaskToDelete = (data) => {
    let getNewTask = dailytask.filter((item, index) => data !== index);
    setDailyTask(getNewTask);
  };

  const editTodoItem = (item, index) => {
    setHideEditTask(false);
    setEditTask({
      index: index,
      item: item,
    });
  };

  const updateTodoItem = (item, index) => {
    let tempDailytask = dailytask;
    tempDailytask[index] = { task: item };

    setDailyTask(tempDailytask);
    setHideEditTask(true);
  };

  return (
    <div className="App">
      <div className="compsContainer">
        {hideEditTask === true ? (
          <div>
            <AddTodoList receivedata={getDataFromAddTodoList} />
            <TodoList
              tasklist={dailytask}
              deleteTask={getTaskToDelete}
              editTask={editTodoItem}
            />
          </div>
        ) : (
          <EditTodoList
            editTask={editTask}
            updateTodoItem={updateTodoItem}
          />
        )}
      </div>
    </div>
  );
}

export default App;
