import React, { useState } from 'react'
//created notebooks should sort of appear as the todo list component and when you click on one
//you can see all the notes stored inside the notebook.



const Notebook = () => {
    const [notebook, setNotebook] = useState('');
    const [list, setList] = useState([])

    const handleChange = (e) => {
        setNotebook(e.target.value)
    }

    const handleAdd = () => {
        if (notebook === '') {
            return;
        }
        setList([...list, notebook]);
        setNotebook('')
    }


    return (
        <>
            <h1>notebooks</h1>
            <ul>
                {
                    list.map((note, index) => (
                        <li key={index}>{note}</li>
                    ))
                }
            </ul>


            <input
                placeholder='add notebook'
                value={notebook}
                onChange={handleChange}
            ></input>

            <button onClick={handleAdd}>+</button>

        </>
    )
}

export default Notebook