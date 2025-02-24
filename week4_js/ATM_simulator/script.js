let balance = 0;
const correctPin = "1234";

const loginContainer = document.getElementById("login_container");
const atmContainer = document.getElementById("atm_container");

const loginPin = document.getElementById("pin_input");
const loginBtn = document.getElementById("login_btn");
const loginMessage = document.getElementById("login_message");

const displayBalance = document.getElementById("balance");
const depositAmount = document.getElementById("deposit_amount");
const depositBtn = document.getElementById("deposit_btn");

const withdrawAmount = document.getElementById("withdraw_amount");
const withdrawBtn = document.getElementById("withdraw_btn");
const messageElement = document.getElementById("message");

function checkBalance() {
  displayBalance.textContent = balance.toFixed(2);
}

function showMessage(message, isError = true) {
  messageElement.textContent = message;
  messageElement.style.color = isError ? "red" : "green";
}

function deposit() {
  const amount = parseFloat(depositAmount.value);
  if (isNaN(amount) || amount <= 0) {
    showMessage("Please enter a valid amount");
    return;
  }

  balance += amount;
  checkBalance();
  showMessage(`Deposited $${amount.toFixed(2)} Successfully.`, false);
  depositAmount.value = "";
}

function withdraw() {
  const amount = parseFloat(withdrawAmount.value);
  if (isNaN(amount) || amount <= 0) {
    showMessage("please enter a valid amount");
    return;
  }
  if (amount > balance) {
    showMessage("Not enough balance");
    return;
  }
  balance -= amount;
  checkBalance();
  showMessage(`Withdrew $${amount.toFixed(2)} Successfully.`, false);
  withdrawAmount.value = "";
}

function login() {
  const enteredPin = loginPin.value;
  if (enteredPin === correctPin) {
    loginContainer.style.display = "none";
    atmContainer.style.display = "block";
    showMessage("Welcome!", false);
  } else {
    loginMessage.textContent = "Invlid PIN. Please try again.";
    loginMessage.style.color = "red";
  }
}

loginBtn.addEventListener("click", login);
depositBtn.addEventListener("click", deposit);
withdrawBtn.addEventListener("click", withdraw);

checkBalance();
