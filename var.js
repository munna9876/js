var num = 10
function numFunc() {
    var num = 20  // It won't change the global num variable
    console.log(num)
}
numFunc()
console.log(num)