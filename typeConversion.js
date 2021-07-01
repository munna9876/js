var string = '1000'
var  number = 4
console.log(string+number) // 10004 as a string. 
console.log(string*number) // 4000 as a number. Because js is a "Loosly typed" language.
//when a statement expect a particular data-type, it convert to that.
// in our first log, it expect string for + operator and second one for * operator
// it called implicit conversion

console.log(String(string*number)) // explicit conversion. 
// we can also use "Number(), parseInt(), parseFloat(), Boolean(), toString() 

console.log(parseInt("string")) //NaN, Not a Number

