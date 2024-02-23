import React from 'react'
import './Tracker.css'
// how this should work: toggle when youve completed the task for the day
//i think you can do this without state but im not totally sure
//add a css class when the state is !.


const Tracker = () => {
  return (
    <>
    <div className='tracker-wrapper'>
        <h2>7 day tracker</h2>
        <div className='bubble-wrapper'>
            <input id='check' type='checkbox'></input>
            <input id='check' type='checkbox'></input>
            <input id='check' type='checkbox'></input>
            <input id='check' type='checkbox'></input>
            <input id='check' type='checkbox'></input>
            <input id='check' type='checkbox'></input>
            <input id='check' type='checkbox'></input>
        </div>
    </div>
    </>
  )
}

export default Tracker