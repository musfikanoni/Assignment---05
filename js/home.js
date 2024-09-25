

function uptdateMoney(initialMoney, inputMoney, donateValue){
    let money = initialMoney - inputMoney;
    let donateMoney =  parseFloat(donateValue) || 0;
    donateMoney += inputMoney;        
    return [money, donateMoney];
}

//card-1
document.getElementById('donation-form1').addEventListener('submit', function(event){
    event.preventDefault();
    let firstInp = parseFloat(document.getElementById('donate-inp1').value);
    let donateAmount1 = parseFloat(document.getElementById('donate-amount1').innerText);
    let initialValue = parseFloat(document.getElementById('main-money').innerText);


    if(!isNaN(firstInp) && firstInp > 0 && initialValue >= firstInp){
        let [money, donateMoney] = uptdateMoney(initialValue, firstInp, donateAmount1);

        document.getElementById('main-money').innerText = money;
        document.getElementById('donate-amount1').innerText = donateMoney;
    }
    else{
        console.error('Invalid input values');
        alert('please enter valid donation amount');
    }

})


//card-2
document.getElementById('donation-form2').addEventListener('submit', function(event){
    event.preventDefault();
    let firstInp = parseFloat(document.getElementById('donate-inp2').value);
    let donateAmount2 = parseFloat(document.getElementById('donate-amount2').innerText);
    let initialValue = parseFloat(document.getElementById('main-money').innerText);


    if(!isNaN(firstInp) && firstInp > 0 && initialValue >= firstInp){
        let [money, donateMoney] = uptdateMoney(initialValue, firstInp, donateAmount2);

        document.getElementById('main-money').innerText = money;
        document.getElementById('donate-amount2').innerText = donateMoney;
    }
    else{
        console.error('Invalid input values');
        alert('please enter valid donation amount');
    }

})

//card-3
document.getElementById('donation-form3').addEventListener('submit', function(event){
    event.preventDefault();
    let firstInp = parseFloat(document.getElementById('donate-inp3').value);
    let donateAmount3 = parseFloat(document.getElementById('donate-amount3').innerText);
    let initialValue = parseFloat(document.getElementById('main-money').innerText);


    if(!isNaN(firstInp) && firstInp > 0 && initialValue >= firstInp){
        let [money, donateMoney] = uptdateMoney(initialValue, firstInp, donateAmount3);

        document.getElementById('main-money').innerText = money;
        document.getElementById('donate-amount3').innerText = donateMoney;
    }
    else{
        console.error('Invalid input values');
        alert('please enter valid donation amount');
    }

})