import React from 'react'

export default ({ handleSubmit, handleOnchange }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="textInput">
      <input id="textInput" type="text" onChange={handleOnchange} />
    </label>
    <button type="submit">Add todo</button>
  </form>
)
