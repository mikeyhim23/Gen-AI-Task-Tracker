'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      try {
        setTasks(JSON.parse(stored));
      } catch {
        setTasks([]);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskInput.trim()) return;

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
      createdAt: new Date(),
    };

    setTasks([newTask, ...tasks]);
    setTaskInput('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">📝 My Task Manager</h1>

        {/* Input */}
        <div className="flex items-center gap-2 mb-6">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Enter a task..."
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <TaskList tasks={tasks} onToggle={toggleComplete} onDelete={deleteTask} />
      </div>
    </main>
  );
}

// Task List
function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0)
    return <p className="text-center text-gray-500">No tasks yet.</p>;

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}

// Task Item
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      className="flex items-center justify-between bg-gray-50 p-3 rounded-md shadow-sm animate-fade-in"
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 text-blue-600 accent-blue-600 transition"
        />
        <span
          className={`text-gray-800 ${
            task.completed ? 'line-through text-gray-400' : ''
          }`}
        >
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
      >
        Delete
      </button>
    </li>
  );
}
