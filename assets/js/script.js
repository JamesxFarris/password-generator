// Assignment Code
const generateBtn = document.querySelector("#generate");
// Specify letters for lowercase
const lowerCaseChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Specify letters for uppercase
const upperCaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Specify numbers
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Specify special characters
const specialChars = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// Create empty password array
let userChoice = [];

// Create Function to get user inputs
function grabInfo() {
  charLength = parseInt(
    prompt("How many characters would you like your password to be?")
  );
  // Check number, return booleans to cancel if entered incorrect
  if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
    alert("Sorry, the number has to be between 8 - 128");
    return false;
  }
  // Check for what kind of characters
  if (confirm("Would you like lowercase letters?")) {
    userChoice = userChoice.concat(lowerCaseChars);
  }

  if (confirm("Would you like uppercase letters?")) {
    userChoice = userChoice.concat(upperCaseChars);
  }

  if (confirm("Would you like numbers?")) {
    userChoice = userChoice.concat(numbers);
  }

  if (confirm("Would you like special characters?")) {
    userChoice = userChoice.concat(specialChars);
  }
  return true;
}

// Write password to the #password input if the user entered fields properly

// Assign variables
function writePassword() {
  let success = grabInfo();
  let passwordText = document.querySelector("#password");

  // If its correct generate the password
  if (success) {
    var modifyPass = generatePassword();
    // Replaces the "Your Secure Password with new password"
    passwordText.value = modifyPass;
  }
}

// Create function to generate the password. This multiplies how many characters selected with the userChoice array, then returns password
function generatePassword() {
  let password = "";
  for (var i = 0; i < charLength; i++) {
    let randomChar = Math.floor(Math.random() * userChoice.length);
    password = password + userChoice[randomChar];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
