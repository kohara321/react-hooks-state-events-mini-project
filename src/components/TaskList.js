import React from "react";
import Task from "./Task"

function TaskList({ tasks, handleDelete }) {
  const tasksList = tasks.map(task => {
    return (
      <Task key={task.text} category={task.category} text={task.text} handleDelete={handleDelete}/>
    )
  })
  return (
    <div className="tasks">
      {tasksList}
    </div>
  );
}

export default TaskList;