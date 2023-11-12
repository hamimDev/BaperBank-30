document.getElementById('withdraw-btn').addEventListener('click', function(){
    const depositField = document.getElementById('input-withdraw');
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
    const depositTotal = document.getElementById('withdraw-total');
    const depositNumber = depositTotal.innerText;
    const pNumber2 = parseFloat(depositNumber);

    const totalBalance = document.getElementById('total-taka');
    const textBalance = totalBalance.innerText;
    const numBalance = parseFloat(textBalance);
    if(pNumber1 > numBalance){
        alert('Ato Taka Nai');
        return
    }
    const nowAmount = pNumber2+pNumber1;
    depositTotal.innerText = nowAmount;
    const numBalanceTotal = numBalance - pNumber1;
    totalBalance.innerText = numBalanceTotal;
})