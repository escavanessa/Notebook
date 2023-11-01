
import './App.css'
import { useState } from 'react'

//a form for the input and a ul for the tasks.
//set up state for the item so that way it is recorded
//add onsubmit handlesubmit
//set up state to take the recorded item and add it to todo list


function App() {
  const [tasks, setTasks] = useState([
    {
      'title': 'go trick or treating',
      'completed': false
    }
  ]);

  const addTask = (value) => {
    const newTask = [...tasks, { title: value, completed: false }];
    setTasks(newTask);
  }



  const isCompleted = (index) => {
    const newTask = [...tasks]
    const thisTask = newTask[index]
    if (thisTask.completed === false) {
      thisTask.completed = true
    } else {
      thisTask.completed = false
    }
    setTasks(newTask);
  }


  const InputForm = () => {
    const [value, setValue] = useState("")



    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(value)
      addTask(value)
    }



    return (
      <div className='input-wrapper'>
        <form onSubmit={handleSubmit} >
          <input
            type='text'
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder='write a task'
          />
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  };



  const TaskList = () => {
    return (
      <>
        <h1>return a map</h1>
        {tasks.map((task, index) =>
          <>
            <span className='item-title'>{task.title}</span>
            <input className='checkbox'
              type='checkbox'
              checked={task.completed}
              onChange={() => isCompleted(index)}
            />
          </>
        )}

      </>
    )
  }



  return (
    <>
      <h1>why are you so stupid</h1>
      <TaskList addTask={addTask} />
      <InputForm />
    </>
  )
}








export default App