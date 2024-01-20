import React from 'react'
import { useState } from 'react'



const Checklist = () => {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);
    
    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleAdd() {
        if (input === '') {
            return;
        }
        setTodo([...todo, input])
        setInput('');
    }

    function handleDelete(index) {
        const removeItem = todo.filter((todo) => {
            return todo.index !== index;
        });
        setTodo(removeItem)
    }

  return (
    <>
    <h1>CheckList!</h1>
    <input
    placeholder='new item'
    value={input}
    onChange={handleChange}
    />
    <button onClick={handleAdd}>Add</button>

    <ul>
        {todo.map((todo, index) => (
            <li key={index}>{todo}
            <button onClick={handleDelete}>Delete</button>
            </li>
        ))}
    </ul>
    </>
  )
}

export default Checklist