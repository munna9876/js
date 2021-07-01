var date = new Date()
console.log(date.toDateString())
console.log(date.toTimeString())
console.log(date.toUTCString())
console.log(date.toLocaleString()) //my pc's date and time

console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getMinutes())
console.log(date.getSeconds())

var onlyDay = date.getDay()
switch(onlyDay) {
    case 0:
        console.log("Sub")
    case 1:
        console.log("Mon")
    case 2:
        console.log("Tues")
    case 3:
        console.log("Wednes")
    case 4:
        console.log("Trus")
    case 5:
        console.log("Fri")
    case 6:
        console.log("Satur")
    default:
        console.log("Not gonna happe")
    
}