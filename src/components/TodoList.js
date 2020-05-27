import React from "react";

function TodoList(props) {
  const removeTask = (data) => {
    props.deleteTask(data);
  };

  const editTask = (task, index) => {
    if (editTask !== null) {
      props.editTask(task, index);
    }
  };

  return (
    <div>
      {props.tasklist.map((item, index) => (
        <div key={index} className="listme">
          <div className="">
            <div className="">{item.task}</div>
          </div>

          <div>
            <button
              className="edit-btn"
              onClick={() => editTask(item.task, index)}>
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => removeTask(index)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
