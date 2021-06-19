//Variables for user inputs
var passwordLength;
var confirmUpper;
var confirmLower;
var confirmNumber;
var confirmSymbol;
var userChoice;

//Characters available for use, using ASCII Character Set
const upperChar = allCharArray(65, 90);
const lowerChar = allCharArray(97, 122);
const numberChar = allCharArray(48, 57);
const symbolChar = allCharArray(33, 47).concat(allCharArray(58, 64)).concat(allCharArray(91, 96)).concat(allCharArray(123, 126));

// Function to put the selected characters into an array
function allCharArray(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Start the function for the password
function generatePassword() {
  // Asks user for amount of characters
  passwordLength = parseInt(prompt("How many characters would you like your password? Choose between 8 - 128"));
  if (!passwordLength) {
    alert("You need to pick a value");
  } else if (isNaN(passwordLength)) {
    alert("You need to pick a number");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("You must choose between 8 - 128"));
  // Asks for types of characters after amount is verified
  } else {
    confirmUpper = confirm("Would you like to include uppercase characters?");
    confirmLower = confirm("Would you like to include lowercase characters?");
    confirmNumber = confirm("Would you like to include numbers?");
    confirmSymbol = confirm("Would you like to include symbols?");
  };
  // If 4 negative options
  if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSymbol) {
    userChoice = alert("You must choose some criteria!");
  }
  // 4 positive options
  else if (confirmUpper && confirmLower && confirmNumber && confirmSymbol) {
    userChoice = upperChar.concat(lowerChar, numberChar, symbolChar);
  }
  // 3 positive options
  else if (confirmUpper && confirmLower && confirmNumber) {
    userChoice = upperChar.concat(lowerChar, numberChar);
  }
  else if (confirmUpper && confirmLower && confirmSymbol) {
    userChoice = upperChar.concat(lowerChar, symbolChar);
  }
  else if (confirmUpper && confirmNumber && confirmSymbol) {
    userChoice = upperChar.concat(numberChar, symbolChar);
  }
  else if (confirmLower && confirmNumber && confirmSymbol) {
  userChoice = lowerChar.concat(numberChar, symbolChar);
  }
  // 2 positive choices
  else if (confirmUpper && confirmLower) {
    userChoice = upperChar.concat(lowerChar);
  }
  else if (confirmUpper && confirmNumber) {
    userChoice = upperChar.concat(numberChar);
  }
  else if (confirmUpper && confirmSymbol) {
    userChoice = upperChar.concat(symbolChar);
  }
  else if (confirmLower && confirmNumber) {
    userChoice = lowerChar.concat(numberChar);
  }
  else if (confirmLower && confirmSymbol) {
    userChoice = lowerChar.concat(symbolChar);
  }
  else if (confirmNumber && confirmSymbol) {
    userChoice = numberChar.concat(symbolChar);
  }
  // 1 positive option
  else if (confirmUpper) {
    userChoice = upperChar;
  }
  else if (confirmLower) {
    userChoice = lowerChar;
  }
  else if (confirmNumber) {
    userChoice = numberChar;
  }
  else if (confirmSymbol) {
    userChoice = symbolChar;
  };

  // Create the password and convert the array into a string
  var password = []
  for (var i = 0; i < passwordLength; i++) {
    var passwordChar = userChoice[Math.floor(Math.random() * userChoice.length)]
    password.push(String.fromCharCode(passwordChar))
  }
  return password.join("")
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Adds the password into the text box 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}