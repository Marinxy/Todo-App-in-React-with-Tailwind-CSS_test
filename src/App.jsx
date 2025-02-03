import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-2 border-b border-gray-200"
            >
              <span
                className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
                onClick={() => toggleTodo(index)}
              >
                {todo.text}
              </span>
              <button
                className="text-red-500 hover:text-red-600 focus:outline-none"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
