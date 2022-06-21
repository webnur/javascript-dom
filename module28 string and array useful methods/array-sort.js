const numbers = [2, 4, 7, 8, 1, 3, 5, 0, 9]
const numberSorted = numbers.sort()
// console.log(numberSorted);

const friends = ['rayhan', 'sharif', 'tusar', 'abdullah', 'amena', 'tarnija'];
const friendSorted = friends.sort()
// console.log(friendSorted);

const reversedFriends = friends.reverse()
// console.log(reversedFriends);


// number sorting fun
const bigNumbers = [65, 78, 71, 3, 41, 5, 9, 99];
const sortedBigNumber = bigNumbers.sort(function(a, b){
    return a - b;
});
console.log(sortedBigNumber);