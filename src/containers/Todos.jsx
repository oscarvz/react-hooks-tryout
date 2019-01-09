import React, { useState } from 'react'
import Form from '../components/Form'
import Todo from '../components/Todo'
import uniqid from 'uniqid'

export default () => {
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    setTodos([...todos, { id: uniqid.time(), text: value, isDone: false }])
    setValue('')
  }

  const handleToggle = (id, checked) => {
    setTodos([
      ...todos.map(t => {
        if (t.id === id) {
          return Object.assign({}, t, {
            isDone: !checked,
          })
        }
        return t
      }),
    ])
  }

  return (
    <>
      <Form
        handleChange={e => setValue(e.target.value)}
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
            handleRemove={id => setTodos(todos.filter(t => t.id !== id))}
          />
        ))}
      </ul>

      <button
        onClick={() => setTodos(todos.filter(t => !t.isDone))}
        disabled={todos.some(t => t.isDone) ? false : true}
      >
        Remove selected
      </button>
      
      <button
        onClick={() => setTodos([])}
        disabled={todos.length ? false : true}
      >
        Remove all
      </button>
    </>
  )
}
