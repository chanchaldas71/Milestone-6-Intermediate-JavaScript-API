const difference = (x, y) => x -y;
const multiply = (first, second, third) => first * second* third;
// single paramiter
const getAge =(person) =>person.age;
const student = {name: 'Abhijit', age: 23}
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird ([1,2,3,5,6,7,8]);
console.log(third);
// no parameter
const doubleIt = num => num* 2;
const getPI = () =>Math.PI
console.log(getPI());
// large arrow function
const doMath = (x, y , z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}