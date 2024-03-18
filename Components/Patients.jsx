/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Residents from './Residents';
import ActiveRes from './ActiveRes';

const Patients = () => {
const [resident, setResident] = useState({
  name: '',
});
const [list, setList] = useState([]);
const [active, setActive] = useState({});




function addResident(resident) {
  setList([...list, resident])
}

function handleChange(resident) {
  setResident({name: resident})
}


  return (
    <>
    <input 
    value={resident.name}
    placeholder='Resident Name'
    onChange={(e) => handleChange(e.target.value)}
    />
    <button onClick={() => addResident(resident)}>Add Resident</button>

    {
      list.map((resident, index) => {
        return <Residents key={index} resident={resident} onClick={() => {setActive(resident)}}/>
      })
    } 
    <ActiveRes active={active}/>
    </>
  )
}

export default Patients