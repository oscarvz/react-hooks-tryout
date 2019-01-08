import React from 'react'

export default ({ handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="textInput">
      <input id="textInput" type="text" onChange={handleChange} />
    </label>
    <button type="submit">Add todo</button>
  </form>
)
