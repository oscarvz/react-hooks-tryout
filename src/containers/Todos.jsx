import React, { useState, useEffect } from 'react'
import Form from '../components/Form'
import Todo from '../components/Todo'
import uniqid from 'uniqid'

export default () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    document.title = todos.length
      ? `Todo List: you have ${todos.length} todos!`
      : 'Todo List: you have no todos'
  })

  const handleSubmit = e => {
    e.preventDefault()

    setTodos([...todos, { id: uniqid.time(), text, isDone: false }])
    setText('')
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
        handleChange={e => setText(e.target.value)}
        handleSubmit={handleSubmit}
        value={text}
        buttonAvailability={text.length ? false : true}
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
