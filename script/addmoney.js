
document.getElementById("add-money-btn").addEventListener("click", function () {

    //1 bank accound get
    const bankAccount = getValueFromInput("add-money-bank");
    if (bankAccount == "Select a Bank"){
        alert("Please select a bank");
        return;
    }
    //2 get bank accound number
    const accno = getValueFromInput("add-money-number");
    if (accno.length != 11){
        alert("invalid acc no");
        return;
    }

    // 3 get amount 
    const amount =getValueFromInput("add-money-amount");
    const newBalance = getBalance() + Number(amount);


    const pin = getValueFromInput("add-money-pin");
    if (pin == "2010") {
        alert("Add Money Success");
        setBalance(newBalance);

        //1 history-container ke shore niye ashbo
        const history = document.getElementById("history-container");

        //2 new div create korbo
        const newHistory = document.createElement("div");

        //3 new div innerHtml add korbo
        newHistory.innerHTML =`
        <div class="transaction-card p-5 bg-base-100">
            Add Money Success from
            ${bankAccount} , acc-no ${accno} at ${new Date()}

        </div>
        
        `;

        history.append(newHistory);

    }else{
        alert("invalid pin");

        return;
    }
})