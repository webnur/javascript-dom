       
        // handle deposit event handler
        document.getElementById('deposit-button').addEventListener('click', function(){
            //updated diposit
            const depositInput = document.getElementById('defosit-input');

            const newDipositText = depositInput.value
            const newDipositAmount = parseFloat(newDipositText);


            const dipositTotal = document.getElementById('total-deposit')

            const previousDipositText = dipositTotal.innerText;
            const previousDipositAmount = parseFloat(previousDipositText);
            const newDipositTotal =previousDipositAmount + newDipositAmount;

            dipositTotal.innerText = newDipositTotal;


            // update account balance

            const BalanceTotal = document.getElementById('total-balance');
            const balanceTotalText = BalanceTotal.innerText;
            const previousBalanceTotal = parseFloat(balanceTotalText);

            const newBalanceTotal = previousBalanceTotal + newDipositAmount;

            BalanceTotal.innerText = newBalanceTotal;



            
           depositInput.value = '';
            
            
        })


        // handle  withdraw balance event handler
        document.getElementById('withdraw-button').addEventListener('click', function(){


            /*

            my personal code

            const withdrawInput = document.getElementById('withdraw-input');
            const NewWithdrawAmountText = withdrawInput.value;
            const NewWithdrawAmount = NewWithdrawAmountText;

            const withdrawTotal = document.getElementById('total-withdraw');
            withdrawTotal.innerHTML = parseFloat(NewWithdrawAmount);

            

            const totalBalance = document.getElementById('total-balance');
            const totalBalanceText = parseFloat(totalBalance.innerText);
            const totalBalanceAmount = totalBalanceText;
            const newTotalBalance = totalBalanceAmount - NewWithdrawAmount;

            
            totalBalance.innerText = newTotalBalance;

            */

            // sir r code 
            const withdrawInput = document.getElementById('withdraw-input');
            const NewWithdrawAmountText = withdrawInput.value;
            const NewWithdrawAmount = parseFloat(NewWithdrawAmountText);

            // set withdrawTotal 

            const withdrawTotal = document.getElementById('total-withdraw');
            const previousWithdrawText = withdrawTotal.innerText;
            const previousWithdrawAmount = parseFloat(previousWithdrawText)

            const newWithdrawTotal = previousWithdrawAmount + NewWithdrawAmount;

            withdrawTotal.innerText = newWithdrawTotal;

            //update Balance
            const totalBalance = document.getElementById('total-balance');
            const previousBalanceText = totalBalance.innerText;
            const previousBalanceAmount = parseFloat(previousBalanceText);
            const newTotalBalance = previousBalanceAmount - NewWithdrawAmount;
            totalBalance.innerText = newTotalBalance;

            // Clear withdraw Input
            withdrawInput.value = '';

        })