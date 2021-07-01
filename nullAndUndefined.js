var first   //Theres no value, only variable is declared
var second = null   //This variable has a value that is 'null' (special value). nothing

console.log(first, second)

console.log(null === undefined) //different type, thats why not tightly equal, false
console.log(null == undefined) //different type but same value. loosely equal, true

// They are both premitive falsy value
// when typeof(null) logged, it says object. Because null is used to signify an empty refference of object.
// but the null itself is a premitive data