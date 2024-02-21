const PatientManager = {
    patients: [],

    addPatient: function(name, age, birthday) {
        const patient = { name, age, birthday };
        this.patients.push(patient);
    },

    displayPatients: function() {
        if(this.patients.length === 0) {
            console.log('no patients');
        } else {
            console.log('registered patients:');
            this.patients.forEach((patient, index) => {
                console.log(`Name: ${patient.name}, Age: ${patient.age}, Patient Birthday: ${patient.birthday}`)
            })
        }
    }

}


export default PatientManager