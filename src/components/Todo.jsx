import React from 'react'

export default ({ id, text, isDone, handleToggle }) => (
  <li>
    <label>
      <input
        type="checkbox"
        onChange={() => handleToggle(id, isDone)}
        checked={isDone}
      />
      {text}
    </label>
  </li>
)
