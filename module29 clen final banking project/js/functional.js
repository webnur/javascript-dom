
// function getInputValue(fieldId){
//     const fieldInput = document.getElementById(fieldId);
//     const inputInText = fieldInput.value;
//     const value = parseFloat(inputInText);
//     fieldInput.value = '';
//     return value;
   
    
// }

// function updateTotal(fieldId, amount){
//     const totalTag = document.getElementById(fieldId);
//     const previousTotalInText = totalTag.innerText;
//     const previousTotal = parseFloat(previousTotalInText)
//     const newTotal = previousTotal + amount;
//     totalTag.innerText = newTotal;
// }


// function updateBalance(amount, isAdding){
//     const balanceTag = document.getElementById('total-balance');
//     const balanceInText = balanceTag.innerText;
//     const previousBalance = parseFloat(balanceInText);

//     let newBalance;
//     if(isAdding == true){
//         newBalance = previousBalance + amount;
//     }else{
//         newBalance = previousBalance - amount;
//     }

//     balanceTag.innerText = newBalance;

// }

// document.getElementById('deposit-button').addEventListener('click', function(){
//     const amount = getInputValue('defosit-input');
//     if(amount > 0){
//         updateTotal('total-deposit', amount)
//         updateBalance(amount, true)
//     }

// })

// // handle withdraw
// document.getElementById('withdraw-button').addEventListener('click', function(){
//     const amount = getInputValue('withdraw-input');
//     if(amount > 0){
//         updateTotal('total-withdraw', amount);
//         updateBalance(amount, false)
//     }


// })




function getInputValue(fieldId){
    const fieldInput = document.getElementById(fieldId);
    const inputInText = fieldInput.value;
    const value = parseFloat(inputInText);
    fieldInput.value = '';
    return value;
   
    
}

function getInnerTextValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.innerText;
    const value = parseFloat(valueInText);
    return value;
}

function updateTotal(fieldId, amount){

    // const totalTag = document.getElementById(fieldId);
    // const previousTotalInText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalInText);

    const previousTotal = getInnerTextValue(fieldId)

    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
}


function updateBalance(amount, isAdding){


    // const balanceTag = document.getElementById('total-balance');
    // const balanceInText = balanceTag.innerText;
    // const previousBalance = parseFloat(balanceInText);

    const previousBalance = getInnerTextValue('total-balance')

    let newBalance;
    if(isAdding == true){
        newBalance = previousBalance + amount;
    }else{
        newBalance = previousBalance - amount;
    }

    document.getElementById('total-balance').innerText = newBalance;

}

document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('defosit-input');
    if(amount > 0){
        updateTotal('total-deposit', amount)
        updateBalance(amount, true)
    }

})

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('total-balance')
    if(amount > 0 && amount <= balance){
        updateTotal('total-withdraw', amount);
        updateBalance(amount, false)
    }


})