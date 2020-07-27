import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

function App (props) {
  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks.map(task => (
    <Todo
      key={task.id}
      id={task.id}
      name={task.name}
      done={task.done}
    />
  ));

  const addTask = (name) => {
    const newTask = { id: `todo-${nanoid()}`, name: name, done: false };
    setTasks([...tasks, newTask]);
  };

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className='todoapp stack-large'>
      <h1>TodoMatic</h1>
      <Form
        addTask={addTask}
      />
      <div className='filters btn-group stack-exception'>
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>

      <h2 id='list-heading'>
        {headingText}
      </h2>
      <ul
        // role='list'
        className='todo-list stack-large stack-exception'
        aria-labelledby='list-heading'
      >
        {taskList}
      </ul>
    </div>
  );
}

{ /* <button type='button' className='btn toggle-btn' aria-pressed='false'>
        <span className='visually-hidden'>Show </span>
        <span>Active</span>
        <span className='visually-hidden'> tasks</span>
      </button>
      <button type='button' className='btn toggle-btn' aria-pressed='false'>
        <span className='visually-hidden'>Show </span>
        <span>Completed</span>
        <span className='visually-hidden'> tasks</span>
      </button> */ }

export default App;
