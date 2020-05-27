import React, { useState } from "react";

function AddTodoList(props) {
  const [task, setTask] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const AddNewTask = () => {
    if (task === "") {
      setErrorMsg("You have not entered in a task!");
    } else {
      props.receivedata({ task });
      setErrorMsg("");
    }

    setTask("");
  };

  return (
    <div>
      <div className="main">
        <h1>My Daily Task</h1>

        <div className="box">
          <input
            id="item"
            type="text"
            value={task}
            placeholder="Enter new task"
            onChange={(event) => setTask(event.target.value)}
          />
          <button id="add" onClick={AddNewTask}>
            Add
          </button>
        </div>
        <div>
          <p className="error-msg">{errorMsg}</p>
        </div>
      </div>
    </div>
  );
}

export default AddTodoList;
