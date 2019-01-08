import React, { useState } from 'react'
import Form from '../components/Form'
import Todo from '../components/Todo'
import uniqid from 'uniqid'

export default () => {
  const [state, setData] = useState({
    todos: [
      {
        id: 1,
        text: 'Do stuff',
        isDone: false,
      },
      {
        id: 2,
        text: 'Call grandma',
        isDone: false,
      },
      {
        id: 3,
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
      todos: [
        ...state.todos,
        { id: uniqid.time(), text: state.value, isDone: false },
      ],
      value: '',
    })
  }

  const handleToggle = (id, checked) => {
    console.log(id)
    setData({
      todos: [
        ...state.todos.map(t => {
          if (t.id === id) {
            return Object.assign({}, t, {
              isDone: !checked,
            })
          }
          return t
        }),
      ],
      value: '',
    })
  }

  const { todos, value } = state

  return (
    <>
      <ul>
        {todos.map((t, i) => (
          <Todo
            id={t.id}
            text={t.text}
            key={t.id}
            isDone={t.isDone}
            handleToggle={handleToggle}
          />
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
