'use strict';

// function onDropdownClick1() {
//     let weekFrequency = document.getElementById('weekFrequency').textContent;
//     let menuButtonFreq = document.getElementById('dropdownMenuButton');
//     menuButtonFreq.textContent = weekFrequency;
// }

// function onDropdownClick2() {
//     let monthFrequency = document.getElementById('monthFrequency').textContent;
//     let menuButtonFreq = document.getElementById('dropdownMenuButton');
//     menuButtonFreq.textContent = monthFrequency;
// }

// function onDropdownClick3() {
//     let semiFrequency = document.getElementById('semiFrequency').textContent;
//     let menuButtonFreq = document.getElementById('dropdownMenuButton');
//     menuButtonFreq.textContent = semiFrequency;
// }

// function onDropdownClick4() {
//     let yearFrequency = document.getElementById('yearFrequency').textContent;
//     let menuButtonFreq = document.getElementById('dropdownMenuButton');
//     menuButtonFreq.textContent = yearFrequency;
// }

const LOAN_PERIOD = {
    "weekly": 52,
    "monthly": 12,
    "semi-annually": 2,
    "annually": 1
}

let loanPeriodValue = LOAN_PERIOD["annually"];

function onDropdownClick(value) {
    let menuButtonText = document.querySelector('#dropdownMenuButton span');
    loanPeriodValue = LOAN_PERIOD[value];
    menuButtonText.innerHTML = value.trim().replace(/^\w/, (c) => c.toUpperCase());
}



function calculateLoan() {
    let loanAmountInput = document.getElementById('loanAmountInput').value;
    let loanInterestInput = document.getElementById('loanInterestInput').value;
    let loanTermInput = document.getElementById('paymentTerm').value;

    let effectiveInterestValue = loanInterestInput / loanPeriodValue;
    let effectivePeriod = loanTermInput * loanPeriodValue;

    let paymentValue = loanAmountInput / ((1 - (1 + effectiveInterestValue) ^ (-effectivePeriod)) / effectiveInterestValue);
    let totalPayable = effectivePeriod * paymentValue;
    let interestPayable = totalPayable - loanAmountInput;
    console.log(paymentValue);

    const updateValues = {
        "payment": paymentValue,
        "interest": interestPayable,
        "total": totalPayable
    }

    updatePaymentValue(updateValues);
    // let effectiveInterest = loanInterestInput / 
}

function updatePaymentValue(updateValues) {
    // update values
    let paymentResult = document.getElementById('repayment-value');
    let interestResult = document.getElementById('interest-value');
    let totalResult = document.getElementById('total-value');
    console.log(totalResult);

    console.log(updateValues);

    paymentResult.textContent = updateValues.payment;
    interestResult.textContent = updateValues.interest;
    totalResult.textContent = updateValues.total;

    console.log(paymentResult);
}