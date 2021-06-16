import React, { useState, useEffect, useReducer } from 'react';
import TodosReducer from '../reducers/todos';
import Form from '../components/Form';
import Todo from '../components/Todo';
import uniqid from 'uniqid';

export default () => {
  const [todos, dispatch] = useReducer(TodosReducer, []);
  const [text, setText] = useState('');

  useEffect(() => {
    document.title = todos.length
      ? `Todo List: ${todos.length} todo${todos.length > 1 ? 's' : ''}!`
      : 'Todo List: no todos';
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'ADD-TODO',
      payload: { id: uniqid.time(), text, isDone: false },
    });
    setText('');
  };

  return (
    <>
      <Form
        handleChange={(e) => setText(e.target.value)}
        handleSubmit={handleSubmit}
        value={text}
        buttonAvailability={text.length ? false : true}
      />

      <ul>
        {todos.map((t) => (
          <Todo
            id={t.id}
            text={t.text}
            key={t.id}
            isDone={t.isDone}
            handleToggle={(id, checked) =>
              dispatch({ type: 'TOGGLE-TODO', payload: { id, checked } })
            }
            handleRemove={(id) =>
              dispatch({ type: 'REMOVE-TODO', payload: { id } })
            }
          />
        ))}
      </ul>

      <button
        onClick={() => dispatch({ type: 'REMOVE-SELECTED' })}
        disabled={todos.some((t) => t.isDone) ? false : true}
      >
        Remove selected
      </button>

      <button
        onClick={() => dispatch({ type: 'REMOVE-ALL' })}
        disabled={todos.length ? false : true}
      >
        Remove all
      </button>
    </>
  );
};
