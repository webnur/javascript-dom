
function getInputValue (){
    const depositInput = document.getElementById('defosit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // clear Input field
    depositInput.value = '';

    return depositAmount;
}


document.getElementById('deposit-button').addEventListener('click', function(){

    // const depositInput = document.getElementById('defosit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);

    const depositAmount = getInputValue()

    //get current deposit
    const depositTotal = document.getElementById('total-deposit');
    const depositTotalText = depositTotal.innerText;
   const previousDipositTotal = parseFloat(depositTotalText)


    depositTotal.innerText = previousDipositTotal + depositAmount;

    // // clear Input field
    // depositInput.value = '';

    // update balance 
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + depositAmount;

    balanceTotal.innerText = newBalanceTotal;
})


// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function(){
   
    // get withdraw input
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputText);



    // update withdraw total
    const withdrawTotal = document.getElementById('total-withdraw');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotalAmount + withdrawAmount;

    // update balance total after withdraw
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBanalceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBanalceTotal -  withdrawAmount;


    // Clear withdraw field 
    withdrawInput.value = '';
})
