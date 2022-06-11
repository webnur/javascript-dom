
function getInputValue (inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear Input field
    inputField.value = '';

    return amountValue;
}


function updateTotalField (totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
   const previousTotal = parseFloat(totalText)
   totalElement.innerText = previousTotal + amount;
   
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
   
    if(isAdd == true){
         balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }

  
}


document.getElementById('deposit-button').addEventListener('click', function(){

    /*

    const depositInput = document.getElementById('defosit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    */
   

    //get current deposit
    /*
    const depositTotal = document.getElementById('total-deposit');
    const depositTotalText = depositTotal.innerText;
   const previousDipositTotal = parseFloat(depositTotalText)

    depositTotal.innerText = previousDipositTotal + depositAmount;
    */


   

    // // clear Input field
    // depositInput.value = '';

    // update balance 

    /*
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + depositAmount;

    balanceTotal.innerText = newBalanceTotal;
    */
    const depositAmount = getInputValue('defosit-input')
    updateTotalField('total-deposit',depositAmount)
    updateBalance(depositAmount, true)


})


// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function(){
   
    /*
    get withdraw input
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputText);

    */

    // get withdraw input
 


    // update withdraw total

    /*
    const withdrawTotal = document.getElementById('total-withdraw');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotalAmount + withdrawAmount;
    */


 


    // update balance total after withdraw

    /*
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBanalceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBanalceTotal -  withdrawAmount;

    */



    // // Clear withdraw field 
    // withdrawInput.value = '';

    const withdrawAmount = getInputValue('withdraw-input');
    updateTotalField('total-withdraw', withdrawAmount)
    updateBalance(withdrawAmount, false)

})
