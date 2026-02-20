console.log("machine add");

//machine id -> input value

function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

// machine -> balance
function getBalance() {
    const balaceElement=document.getElementById("balace");
    const balace =balaceElement.innerText;
    console.log("current balance", Number(balace))
    return Number(balace);
}


// machine -> set balance

function setBalance(value) {
    const balaceElement=document.getElementById("balace");
    balaceElement.innerText = value;
}