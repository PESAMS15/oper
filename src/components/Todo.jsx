import React, { useState, useEffect } from 'react';
// import './TodoApp.css'; // Import your custom CSS file

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1 className="mt-5">Todo App</h1>

      <div className="input-group mt-4">
        <input
          type="text"
          className="form-control"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <ul className="list-group mt-4">
        {tasks.map((task, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {task}
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
