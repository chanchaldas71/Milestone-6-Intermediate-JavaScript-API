const max  = Math.max(12, 32, 53, 563 ,13, 32);
console.log(max)
const numbers = [3, 5, 3, 1, 5, 7, 22, 32,100];
const arrayMax = Math.max(...numbers)
const arrayMaxs = Math.min(...numbers)
// console.log(...numbers)
console.log(arrayMax);
console.log(arrayMaxs);
// use spread operator to copy
const nums = [1,3, 5, 7, 9];
const nums2 = nums;
nums2.push(11);
console.log(nums2)
console.log(nums)

const dosto = [nums];
console.log(dosto)
nums.push(100);
console.log(dosto);
console.log(nums)
// advanced
const sonkha = [ ...nums, 999]
console.log(sonkha);