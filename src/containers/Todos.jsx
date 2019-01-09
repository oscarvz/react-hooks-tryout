import React, { useState } from 'react'
import Form from '../components/Form'
import Todo from '../components/Todo'
import uniqid from 'uniqid'

export default () => {
  const [state, setData] = useState({
    todos: [],
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

  const handleRemove = id => {
    setData({
      todos: state.todos.filter(t => t.id !== id),
      value: '',
    })
  }

  const handleRemoveSelected = () => {
    setData({
      todos: state.todos.filter(t => !t.isDone),
      value: '',
    })
  }

  const handleRemoveAll = () => {
    setData({
      todos: [],
      value: '',
    })
  }

  const { todos, value } = state

  return (
    <>
      <Form
        handleChange={handleOnChange}
        handleSubmit={handleSubmit}
        value={value}
      />
      <ul>
        {todos.map(t => (
          <Todo
            id={t.id}
            text={t.text}
            key={t.id}
            isDone={t.isDone}
            handleToggle={handleToggle}
            handleRemove={handleRemove}
          />
        ))}
      </ul>
      <button
        onClick={handleRemoveSelected}
        disabled={todos.some(t => t.isDone) ? false : true}
      >
        Remove selected
      </button>
      <button 
        onClick={handleRemoveAll}
        disabled={todos.length ? false : true}
      >
        Remove all
      </button>
    </>
  )
}
