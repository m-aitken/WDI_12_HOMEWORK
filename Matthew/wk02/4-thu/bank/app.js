// linking up balance log, input fields, buttons 

var savingsBalance = document.querySelector('#saveBalDiv');
var savingsAmount = document.querySelector('#saveAmt');
var savingsWithdrawBtn = document.querySelector('#saveWithdrawButton');
var savingsDepositBtn = document.querySelector('#saveDepositButton');

var checkBalance = document.querySelector('#checkBalDiv');
var checkAmount = document.querySelector('#checkAmt');
var checkWithdrawBtn = document.querySelector('#checkWithdrawButton');
var checkDepositBtn = document.querySelector('#checkDepositButton');


var savingsWithdraw = function() {
  // savingsBalance - value but not below zero
  var savingsBal = savingsBalance.textContent;  // store current balance
  savingsBal = parseInt(savingsBal.replace("$", "")); // balance whole number, remove $ and space
  var savingsUpdate = parseInt(savingsAmount.value); // withdraw whole number
  var total = savingsBal - savingsUpdate;     // store balance  - withdraw amt
  savingsBalance.textContent = "$" + total;   // insert total in balance field
  savingsAmount.value = "";     // clear field  

};

var savingsDeposit = function () {
  // savingsBalance + value
  var balance = savingsBalance.textContent; // store current balance
  balance = parseInt(balance.replace("$", ""));  // balance whole number, remove $ and space
  var savingsUpdate = parseInt(savingsAmount.value);   // deposit whole number
  var total = balance + savingsUpdate;   // store balance + deposit
  savingsBalance.textContent = '$' + total; // insert total in balance field
  savingsAmount.value = "";     // clear field
};


var checkWithdraw = function () {
  // checkBalance - value but not below zero
  var checkBal = checkBalance.textContent;
};


var checkDeposit = function () {
  // checkBalance + value
  var balance = checkBalance.textContent;
};


// listening to button clicks

savingsWithdrawBtn.addEventListener('click', savingsWithdraw);
savingsDepositBtn.addEventListener('click', savingsDeposit);
// checkWithdrawBtn.addEventListener();
// checkDepositBtn.addEventListener();
