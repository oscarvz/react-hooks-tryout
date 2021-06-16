import React from 'react';

const Todo = ({ id, text, isDone, handleToggle, handleRemove }) => (
  <li>
    <label>
      <input
        type="checkbox"
        onChange={() => handleToggle(id, isDone)}
        checked={isDone}
      />
      {text}
    </label>
    <button onClick={() => handleRemove(id)}>remove</button>
  </li>
);

export default Todo;
