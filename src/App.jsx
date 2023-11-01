
import './App.css'
import { useState } from 'react'

//a form for the input and a ul for the tasks.
//set up state for the item so that way it is recorded
//add onsubmit handlesubmit
//set up state to take the recorded item and add it to todo list



function App() {
  return (
    <>
    <h1>why are you so stupid</h1>
    <TaskList addTask={addTask}/>
    </>
  )
}



const inputForm = () => {
  const [value, setValue] = useState




  return (
    <div className='input-wrapper'>
      <form onSubmit={handleSubmite} >
        <input
          type='text'
          id={index}
          value={value}
          onChange={e => setValue(e.target)}
          placeholder='write a task'
        />
        <button type='submite' onClick={addTask}>Add</button>
      </form>
    </div>
  );
};



const TaskList = () => {
  const [tasks, setTasks] = useState

  
  const addTask = () => {
    const newTask = [...tasks];
    setTasks(newTask);
  }


  return (
    <>
      <h1>return a map</h1>
      {tasks.map(task =>
        <ul>
          <li>
              task={task}
          </li>
        </ul>
      )}

    </>
  )
}









export default App