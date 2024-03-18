import React, { useState } from 'react'

const Patients = () => {
const [resident, setResident] = useState({
  name: '',
});
const [list, setList] = useState([]);

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
      list.map((res, index) => {
        return <div key={index}>{res.name}</div>
      })
    }

    </>
  )
}

export default Patients