import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const taskArray = [
  { id: 'todo-0', name: 'Eat', done: true },
  { id: 'todo-1', name: 'Sleep', done: false },
  { id: 'todo-2', name: 'Repeat', done: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App
      tasks={taskArray}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
