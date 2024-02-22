// function add(a, b) {
//     const result = a + b;
//     return result;
// }
// function dicliration
function add(a, b) {
    
    return a + b;
}
// function expression
const add2 = function (a, b)  {
    return a + b
}

console.log(add2(3, 3))
const sum = add( 5, 60);
console.log(sum);

// arrow function
const add3 = (a, b) => a + b;
const sum2 = add3(5, 10);
console.log(sum2)

const add4 = (num1, num2, num3, num4) => num1 + num2 -num3*num4;
const sum3 = add4(3,7, 5, 5);
console.log(sum3)