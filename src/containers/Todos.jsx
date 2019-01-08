import React, { useState } from 'react'

const Todos = () => {
  const [state, setTodos] = useState({
    todos: [
      {
        text: 'Do stuff',
        isDone: false,
      },
      {
        text: 'Call grandma',
        isDone: false,
      },
      {
        text: 'Fix kitchen sink',
        isDone: false,
      },
    ]
  })

  return (
    <ul>
      {state.todos.map((t, i) => <li key={i} index={i}>{t.text}</li>)}
    </ul>
  )
}

export default Todos
