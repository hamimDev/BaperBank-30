document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('input-deposit');
    const depositAmount = depositField.value;
    const pNumber1 = parseFloat(depositAmount);
    depositField.value = '';
    const Soto = pNumber1;
    if (Soto < 0) {
    alert('Please provide a Positive Number');
    return;
    }

    if(isNaN(pNumber1)){
        alert('Please provide a valid Number');
        return;
    }
    const depositTotal = document.getElementById('deposit-total');
    const depositNumber = depositTotal.innerText;
    const pNumber2 = parseFloat(depositNumber);

    const nowAmount = pNumber2+pNumber1;
    depositTotal.innerText = nowAmount;
    depositField.value = '';

    const totalBalance = document.getElementById('total-taka');
    const textBalance = totalBalance.innerText;
    const numBalance = parseFloat(textBalance);
    // console.log(nowAmount);
    const numBalanceTotal = numBalance + nowAmount;
    totalBalance.innerText = numBalanceTotal;
})