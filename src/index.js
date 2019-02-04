import './styles.css';
updateOutputInit();
function init() {
    console.log('init being called');
    //updateOutput();
}

let billInput = document.querySelector("#billInput");
let tip10Button = document.querySelector("#tip1");
let tip15Button = document.querySelector("#tip2");
let tip20Button = document.querySelector("#tip3");
let billAmountEntered;
let tipPercentSelected = 0;

billInput.addEventListener('input', updateOutput, false);
tip10Button.addEventListener('click', tip10, false);
tip15Button.addEventListener('click', tip15, false);
tip20Button.addEventListener('click', tip20, false);

function updateOutputInit() {
    console.log('init being called');
    let billAmountEntered = 0;
    tipPercentSelected = 0;
    let tipAmount = 0;
    let totalAmount = 0; billAmountEntered + tipAmount;
    document.getElementById('message').innerHTML = 'You are tipping 0%';
    wipeoutValues();
}
function updateOutput(e) {
    if (e.target.value == '') {
        console.log('e.target.value is: ' + e.target.value);
        wipeoutValues();
    }
    else {
        if (e.target.valueAsNumber < 0) {
            billAmountEntered = e.target.valueAsNumber;
            wipeoutValues();
            document.getElementById("billInput").style.border = "1px solid red";
        }
        else {
            billAmountEntered = e.target.valueAsNumber;
            let tipAmount = billAmountEntered * tipPercentSelected / 100;
            var totalAmount = billAmountEntered + tipAmount;
            document.getElementById("billAmount").innerHTML = `Bill Amount: ${formatter.format(billAmountEntered)}`;
            document.getElementById("tipPercentAmount").innerHTML = `Tip Percentage: ${tipPercentSelected}%`;
            document.getElementById("tipAmount").innerHTML = `Amount of tip: ${formatter.format(tipAmount)}`;
            document.getElementById("totalAmount").innerHTML = `Total to be Paid: ${formatter.format(totalAmount)}`;
            document.getElementById("billInput").style.border = "";
        }
    }

}
function tip10(e) {
    document.getElementById('message').innerHTML = 'You are tipping 10%';
    displayAmounts(e);
    document.getElementById("tip1").disabled = true;
    document.getElementById("tip2").disabled = false;
    document.getElementById("tip3").disabled = false;
}
function tip15(e) {
    document.getElementById('message').innerHTML = 'You are tipping 15%';
    displayAmounts(e);
    document.getElementById("tip1").disabled = false;
    document.getElementById("tip2").disabled = true;
    document.getElementById("tip3").disabled = false;
}
function tip20(e) {
    document.getElementById('message').innerHTML = 'You are tipping 20%';
    displayAmounts(e);
    document.getElementById("tip1").disabled = false;
    document.getElementById("tip2").disabled = false;
    document.getElementById("tip3").disabled = true;
}
function displayAmounts(e)
{
    tipPercentSelected = e.target.value;
    let tipAmount = billAmountEntered * tipPercentSelected / 100;
    let totalAmount = billAmountEntered + tipAmount;
    document.getElementById('Validationmessage').innerHTML = '';
    if (billAmountEntered < 0) {
        wipeoutValues();
    }
    else {
        document.getElementById("billAmount").innerHTML = `Bill Amount: ${formatter.format(billAmountEntered)}`;
        document.getElementById("tipPercentAmount").innerHTML = `Tip Percentage: ${tipPercentSelected}%`;
        document.getElementById("tipAmount").innerHTML = `Amount of tip: ${formatter.format(tipAmount)}`;
        document.getElementById("totalAmount").innerHTML = `Total to be Paid: ${formatter.format(totalAmount)}`;
    }
}
function wipeoutValues()
{
    document.getElementById("billAmount").innerHTML = 'Bill Amount:';
    document.getElementById("tipPercentAmount").innerHTML = 'Tip Percentage: ';
    document.getElementById("tipAmount").innerHTML = 'Amount of tip:';
    document.getElementById("totalAmount").innerHTML = 'Total to be Paid:';
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

