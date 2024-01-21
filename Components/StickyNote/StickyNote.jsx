import React, { useState } from 'react'
import './StickyNote.css'

//container the contains all the stick notes. a map that returns whats inside the sticky state in its own seperate box.
//you can also delete the sticky and edit. 
//state for input. state for list/sticky.
//function to generate a random color out of six colors. it gets assigned to the style of the box.
//initial sitcky is just a grey one with an add button? once you click - a new sticky pops up 
//and when you hit enter or maybe save you saves the sticky, every add - adds another sticky. 


const StickyNote = () => {
  const [sinput, setSinput] = useState('');
  const [sticky, setSticky] = useState([]);


    function handleChange(e) {
      setSinput(e.target.value)
    }

    function handleClick() {
      if(sinput === '') {
        return;
      }
      setSticky([...sticky, sinput]);
      setSinput('')
    }

    function handleDelete() {
      
    }



  return (
    <>
    <input 
    value={sinput}
    onChange={handleChange}
    placeholder='add sticky'
    ></input>

    <button onClick={handleClick}>+</button>

    {
      sticky.map((stick, index) => (
        <div className='sticky-wrapper' key={index}>
          <h2>{stick}</h2>
          <button onClick={() => handleDelete}></button>
        </div>
      ))
    }

    </>
  )
}

export default StickyNote