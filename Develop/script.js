// Assignment Code

// Create empty password array
let userChoice = [];
// Create the minimum of 8 characters
let charLength = 8;

// Specify letters for lowercase
let lowerCaseChars = [
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
let upperCaseChars = [
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
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Specify special characters
let specialChars = [
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

let generateBtn = document.querySelector("#generate");

// Create Function to get user inputs
function grabInfo() {
  charLength = prompt(
    "How many characters would you like your password to be?"
  );
  // Check number
  if (charLength < 8 || charLength > 128) {
    alert("Sorry, the number has to be between 8 - 128");
    return false;
  }
  // Check for what kind of characters
  if (confirm("Would you like lowercase letters?")) {
    userChoice = userChoice + lowerCaseChars;
  }

  if (confirm("Would you like uppercase letters?")) {
    userChoice = userChoice + upperCaseChars;
  }

  if (confirm("Would you like numbers?")) {
    userChoice = userChoice + numbers;
  }

  if (confirm("Would you like special characters?")) {
    userChoice = userChoice + specialChars;
  }
}

grabInfo();

// Create function to generate the password
function generatePassword() {}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  // Replaces the "Your Secure Password with new password"
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
