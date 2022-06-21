const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const numberSliced = numbers.slice(4, 8)
// console.log(numberSliced);
// console.log(numbers)


// splice to remove element from an array
const numberSpliced = numbers.splice(4, 3);
// console.log(numberSpliced)

const numberSpliced2 = numbers.splice(4, 3, 100, 200, 300, 400,)
console.log(numberSpliced2);
console.log(numbers)