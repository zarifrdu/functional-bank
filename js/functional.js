function getInputvalue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueIntext = inputField.value;
    const value = parseFloat(valueIntext);
    inputField.value = '';
    return value;
}
function getinnerTextvalue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldText = fieldTag.innerText;
    const fieldNum = parseFloat(fieldText);
    return fieldNum;
}
function updateTotal(fieldId, amount) {
    const prevTotal = getinnerTextvalue(fieldId);
    const newTotal = prevTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}
function updateBalance(amount, isAdding) {
    const prevbalanceText = getinnerTextvalue('balance-total');
    let newBalance;
    if (isAdding == true) {
        newBalance = prevbalanceText + amount;
    } else {
        newBalance = prevbalanceText - amount
    }
    document.getElementById('balance-total').innerText = newBalance;
}
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputvalue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
})
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputvalue('withdraw-input');
    const balance = getinnerTextvalue('balance-total')
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false)
    }
})