
function addNumbers(num1, num2){

    let result = 0;
    for(const num of arguments){
        result = result + num
    }

    // const result = num1 + num2;
    return result;
}

// const sum = addNumbers(20, 10, 50, 100)
// console.log(sum);


function fullName(firstName, lastName){

    let fullName = '';
    for(const name of arguments){
        fullName = fullName + name + ' ';
    }
    // const fullName = firstName + ' ' + lastName;
    return fullName;
}

const name = fullName('amena', 'nur', 'bin', 'mojibul', 'hok', 'mojumder')
console.log(name);