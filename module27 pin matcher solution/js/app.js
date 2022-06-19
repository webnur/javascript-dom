
function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    if(pinString.length == 4){
        return pin;
    }
    else{
        console.log('got 3 digit and calling again')
        return getPin();
    }
}

function generatePin(){

    const pin = getPin()

   document.getElementById('display-pin').value = pin;

}



document.getElementById('key-pad').addEventListener('click', function(event){
   const number = event.target.innerText;
   const calcInput = document.getElementById('typed-numbers');

   if(isNaN(number)){
    if(number == 'C'){
        calcInput.value = ''
    }
   }
   else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
   }

   
})


// submit button event handeler

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typed = document.getElementById('typed-numbers').value;

    const success = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if(pin == typed){  
        success.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        
        failError.style.display = 'block';
        success.style.display = 'none';
    }
}