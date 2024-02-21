import React from 'react'
import PatientManager from './Patients.js'
import { useEffect } from 'react';


const Patients = () => {
  useEffect(() => {
    // Add patients when the component mounts
    PatientManager.addPatient("John Doe", 35, "1989-05-20");
    PatientManager.addPatient("Jane Smith", 45, "1979-10-15");

    // Display patients
    PatientManager.displayPatients();
}, []);
  return (
    <div>Patients</div>
  )
}

export default Patients