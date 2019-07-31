import React, { useState } from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { addTodo } from '../actions/example';
import {useSelector} from 'react-redux'


export default function DemoComponent() {

  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])
  let text = useSelector(appState => appState.todos)

  function handleNewTodo (e) {
   e.preventDefault()
    console.log(todos)
    addTodo({id: Date.now(), text: todos})
    setTodos('')
  }


  return (
      <div className="demo-component">
          <form onSubmit={handleNewTodo}>
              <input placeholder = "What needs to be done?" onChange={e => setTodos(e.target.value)} value={todos} />
                  <ul>
                    {text.map((todo) => (
                      <li key={todos.id}>{todo.text}</li>
                    ))}
                  </ul>
          </form>
      </div>


  )
}