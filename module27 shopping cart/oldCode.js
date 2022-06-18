
// update phone number
function updatePhoneNumber(isIncreasing){
    const phoneInput = document.getElementById('phone-number');
    let phoneNumber = phoneInput.value;


//    phoneInput.value = parseInt(phoneNumber) + 1;
    if(isIncreasing){
        phoneNumber = parseInt(phoneNumber) + 1;
    }
    else if(phoneNumber > 0){
        phoneNumber = parseInt(phoneNumber) -1;
    }

    phoneInput.value = phoneNumber;

    //update phone total

    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneNumber * 1219;

}

// update case total
function updateProductNumber(isIncreasing){
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if(isIncreasing){
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
    }

    caseInput.value = caseNumber;
 
    // update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;


}

// phone increase and decrease event
document.getElementById('phone-plus').addEventListener('click', function(){
    
    updatePhoneNumber(true)
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updatePhoneNumber(false)
})

// case increase and decrease event
document.getElementById('case-plus').addEventListener('click', function(){
    
    updateProductNumber(true)
})


document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber(false)
  
})





