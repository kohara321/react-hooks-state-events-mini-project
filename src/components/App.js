import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [filter, setFilter] = useState('All')

function handleFilter(category) {
    setFilter(category)
}
  const newFilterArray = tasks.filter(task => {
    if(filter === "All") {
      return true
    } else {
      return(
      task.category === filter
   )}
  })

  function handleDelete(text) {
    const deleteText = tasks.filter(task => task.text !== text)
    setTasks(deleteText)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter filter={filter} categories={CATEGORIES} handleFilter={handleFilter}/>
      <NewTaskForm />
      <TaskList tasks={newFilterArray} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
