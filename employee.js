const person = new Object()
person.name = "Noor Alam",
person.age = "20"
const employee = Object.create(person);
employee.company = "microsoft",
employee.position =  "web  developer"
console.log(employee.company)
console.log(employee.position)
console.log(employee.name)
console.log(employee.age)
