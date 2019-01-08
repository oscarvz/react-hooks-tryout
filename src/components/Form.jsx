import React from 'react'

export default ({ handleSubmit, handleChange, value }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="textInput">
      <input id="textInput" type="text" onChange={handleChange} value={value} />
    </label>
    <button type="submit">Add todo</button>
  </form>
)
