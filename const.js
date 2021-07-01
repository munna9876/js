const student = {
    name: "Polak",
    age: 25
}
console.log(student.name)
student.name = "Shawon"
console.log(student.name)
student = {  // Assignment is not valid
    name: "Something else",
    age: 28
}
console.log(student)