"use strict";

const LOAN_PERIOD = {
  weekly: 52,
  monthly: 12,
  "semi-annually": 2,
  annually: 1,
};

const CHART_LABELS = ["LOAN", "INTEREST"];

let loanPeriodValue = LOAN_PERIOD["annually"];

function onDropdownClick(value) {
  let menuButtonText = document.querySelector("#dropdownMenuButton span");
  loanPeriodValue = LOAN_PERIOD[value];
  menuButtonText.innerHTML = value
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase());
}

function calculateLoan() {
  let loanAmountInput = document.getElementById('loanAmountInput').value;
  let loanInterestInput = document.getElementById('loanInterestInput').value;
  let loanTermInput = document.getElementById('paymentTerm').value;

  let effectiveInterestValue = loanInterestInput / (100 * loanPeriodValue);
  let effectivePeriod = loanTermInput * loanPeriodValue;


  let annuityFormula = 1 - 1 / ((1 + effectiveInterestValue) ** (effectivePeriod));

  let paymentValue = loanAmountInput / (annuityFormula / effectiveInterestValue);
  let totalPayable = effectivePeriod * paymentValue;
  let interestPayable = totalPayable - loanAmountInput;


  const updateValues = {
    "payment": paymentValue.toFixed(2),
    "interest": interestPayable.toFixed(2),
    "total": totalPayable.toFixed(2)
  }

  updatePaymentValue(updateValues);
  // let effectiveInterest = loanInterestInput / 
}

function updatePaymentValue(updateValues) {
  // update values
  let paymentResult = document.getElementById("repayment-value");
  let interestResult = document.getElementById("interest-value");
  let totalResult = document.getElementById("total-value");

  paymentResult.textContent = updateValues.payment;
  interestResult.textContent = updateValues.interest;
  totalResult.textContent = updateValues.total;

  let chartElement = document.getElementById("loanAmtChart");

  renderPieChart(
    chartElement,
    [updateValues.total - updateValues.interest, updateValues.interest],
    CHART_LABELS,
    ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"]
  );
}

calculateLoan();