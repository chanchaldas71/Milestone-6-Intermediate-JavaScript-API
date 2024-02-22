const difference = (x, y) => x -y;
const multiply = (first, second, third) => first * second* third;
const getAge =(person) =>person.age;
const student = {name: 'Abhijit', age: 23}
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird ([1,2,3,5,6,7,8]);
console.log(third);