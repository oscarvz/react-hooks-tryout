import React, { useState } from 'react'
import Form from '../components/Form'

const Todos = () => {
  const [state, setData] = useState({
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
    ],
    value: '',
  })

  const handleOnChange = e => {
    setData({
      todos: [...state.todos],
      value: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setData({
      todos: [...state.todos, { text: state.value, isDone: false }],
      value: '',
    })
  }

  const { todos, value } = state

  return (
    <>
      <ul>
        {todos.map((t, i) => (
          <li key={i} index={i}>
            {t.text}
          </li>
        ))}
      </ul>
      <Form
        handleChange={handleOnChange}
        handleSubmit={handleSubmit}
        value={value}
      />
    </>
  )
}

export default Todos
