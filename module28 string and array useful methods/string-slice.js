const anthem = 'amar sunar bangla, ami tumai valobasi';

// split
const words = anthem.split(' ');
//console.log(words);

// slice

const smallSlice = anthem.slice(5, 11)
//console.log(smallSlice)

// substr

const anotherPart = anthem.substr(11, 8);
//console.log(anotherPart);

// substring

const anotherAnotherPart = anthem.substring(11, 17);
console.log(anotherAnotherPart);


// Concat

const frist = 'amader';
const second = 'city';
// const fullString = frist + second;

const fullString = frist.concat(second).concat('abc').concat('Rj kibriya')
// console.log(fullString)

const words2 = ['alim', 'babul', 'cream', 'dulal']
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
const allJoined = words2.join(', ');
console.log(allJoined)