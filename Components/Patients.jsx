import React, { useState } from 'react'

const Patients = () => {
const [resident, setResident] = useState('');
const [list, setList] = useState([]);

function addResident() {
  setList([...list])
  console.log(list)
}


  return (
    <>
    <input 
    value={resident}
    placeholder='Resident Name'
    onChange={e => setResident(e.target.value)}
    />
    <button onClick={addResident}>Add Resident</button>
    </>
  )
}

export default Patients