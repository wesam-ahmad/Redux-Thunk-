import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask, deleteTask } from '../Tasks/TaskSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = () => {
    if (taskDescription) {
      dispatch(addTask({ description: taskDescription }));
      setTaskDescription('');
    }
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h2>Task List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.description}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskList;
