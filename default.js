// default -->if value is not provided, take this as a default.
// function add(num1, num2) {
//     const result = num1 + num2;
//     console.log(num1, num2, result);
//     return result;
// }
// const sum = add(5, 7);
// const sum = add(5, );
// const sum = add( );
// const sum = add( ,);
// const sum = add( ,6);
// const sum = add(1 ,6);

// function add(num1 = 10, num2=10) {
//     const result = num1 + num2;
//     console.log(num1, num2, result);
//     return result;
// }
// const sum = add(5);
// const sum = add(5,7);
// const sum = add();

function name (firstName, lastName = 'Gupta') {
    const fullName = firstName + ' '+ lastName;
    console.log(firstName, lastName, fullName);
    return fullName;
}
const myName = name('abhi', 'poja');
console.log(myName);

function friends (numbs = []) {

}
function person(human = {}) {
    
}