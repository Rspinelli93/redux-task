import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, toggleTask, deleteTask } from './redux/todosSlice';
import { useState } from 'react'; 

const App = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  const handleAddTask = () => {
    const newTask = { id: Date.now(), name: task, done: false };
    dispatch(addTask(newTask));
    setTask("");
  };

  return (
      <div>
          <h2>Task List</h2>
          <input 
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter task..."
          />
          <button onClick={handleAddTask}>Add</button>

          {tasks && <ul>
              {tasks.map(t => (
                  <li key={t.id} style={{ textDecoration: t.done ? "line-through" : "none" }}>
                      {t.text}
                      <p>{t.name}</p>
                      <button onClick={() => dispatch(toggleTask(t.id))}>
                          {t.done ? "⛔" : "✅"}
                      </button>
                      <button onClick={() => dispatch(deleteTask(t.id))}>Delete</button>
                  </li>
              ))}
          </ul>}
      </div>
  );
};

export default App;
