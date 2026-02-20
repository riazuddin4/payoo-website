document.getElementById("cashout-btn").addEventListener("click", function () {
    //1 get the agent number & validate
    const cashoutNumber = getValueFromInput("cashout-number");
    if(cashoutNumber.length != 11){
        alert("invalid number");
        return;
    }
    
    //2 get the amount
    const cashoutAmount = getValueFromInput("cashout-amount")
    
    //3 get the Current balance 
    // const balaceElement = document.getElementById("balace");
    // const balace = balaceElement.innerText;
    // console.log(balace)
    const currentBalance = getBalance();

     //4 calculate new balance
     const newBalance =currentBalance - Number(cashoutAmount);
     console.log(newBalance)
     if(newBalance < 0){
        alert("invalid Amount");
        return;
     }
     const pin = getValueFromInput("cashout-pin");
     if(pin === '2010'){
        alert("Cashout Successfull");

        // document.getElementById("balace").innerText = newBalance;
        setBalance(newBalance);
         //1 history-container ke shore niye ashbo
        const history = document.getElementById("history-container");

        //2 new div create korbo
        const newHistory = document.createElement("div");

        //3 new div innerHtml add korbo
        newHistory.innerHTML =`
        <div class="transaction-card p-5 bg-base-100">
            cashout ${cashoutAmount} Taka Success to ${cashoutNumber} , at ${new Date()}

        </div>
        
        `;

        history.append(newHistory);
        return;
     }else{
        alert("invalid pin");
        return;
     }

});


// document.getElementById("cashout-btn").addEventListener("click", function () {
//     //1 get the agent number & validate
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length != 11){
//         alert("invalid  Agent Number");
//         return;
//     }
//     //2 get the amount
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     //3 get the Current balance 
//     const balaceElement = document.getElementById("balace");
//     const balace = balaceElement.innerText;
//     // console.log(balace)
//     //4 calculate new balance
//     const newBalance = Number(balace) - Number(cashoutAmount);
//     // console.log(newBalance);
//     if(newBalance < 0){
//         alert("Invalid Amount")
//         return;
//     }
    
//     //5 get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;
//     if(pin === '2010'){
//         alert("cashout Successfull")
//         console.log("new balance", newBalance);
//         balaceElement.innerText =newBalance;
//     }else{
//         alert("invalid pin");
//         return;
//     }
// });