import React, { useState, useEffect } from "react";

function EditTodoList(props) {
  const [task, setTask] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const updateTask = () => {
    if (task === "") {
      setErrorMsg("You have not entered in a task!");
    } else {
      props.updateTodoItem(task, props.editTask.index);
      setErrorMsg("");
    }
  };

  useEffect(() => {
    setTask(props.editTask.item);
  }, []);

  return (
    <div>
      <div className="main">
        <h1>Edit Task</h1>

        <div className="box">
          <input
            id="item"
            type="text"
            value={task}
            placeholder="Enter new task"
            onChange={(event) => setTask(event.target.value)}
          />
          <button id="add" onClick={updateTask}>
            Update
          </button>
        </div>
        <div>
          <p className="error-msg">{errorMsg}</p>
        </div>
      </div>
    </div>
  );
}

export default EditTodoList;
