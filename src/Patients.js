const residentManager = {
    residents: [],
    addResident(name, age) {
        this.residents.push({name, age});
    },
}

residentManager.addResident('vanessa', 24);
residentManager.addResident('luke', 26);
console.log(residentManager.residents)

export { residentManager }