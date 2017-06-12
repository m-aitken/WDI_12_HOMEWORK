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
  checkBal = parseInt(checkBal.replace("$", ""))
  var checkingUpdate = parseInt(checkAmount.value);
  var total = checkBal - checkingUpdate;
  checkBalance.textContent = "$" + total;
  checkAmount.value = "";
};


var checkDeposit = function () {
  // checkBalance + value
  var balance = checkBalance.textContent;
  balance = parseInt(balance.replace("$", ""));
  var checkingUpdate = parseInt(checkAmount.value);
  var total = balance + checkingUpdate;
  checkBalance.textContent = "$" + total;
  checkAmount.value = "";
};


// listening to button clicks

savingsWithdrawBtn.addEventListener('click', savingsWithdraw);
savingsDepositBtn.addEventListener('click', savingsDeposit);
checkWithdrawBtn.addEventListener('click', checkWithdraw);
checkDepositBtn.addEventListener('click', checkDeposit);
