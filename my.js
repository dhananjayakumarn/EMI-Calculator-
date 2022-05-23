const bt = document.getElementById('bt');
bt.addEventListener('click',function(){
    const amount = document.getElementById('amount').value;

    const rate = document.getElementById('rate').value;

    const month = document.getElementById('month').value;

    const interest = (amount * (rate * 0.01)) / month;

    const total = ((amount / month) + interest).toFixed(2);

    
    document.getElementById('result').innerHTML='EMI:  (₹)'+total

})