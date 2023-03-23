// Assignment Code
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

// Specify characters 8-128. Create the minimum of 8
let charLength = 8;

let generateBtn = document.querySelector("#generate");

// Grab prompts from user
const length = prompt(
  "How many characters would you like your password to be?"
);
const lowerCaseSel = confirm("Would you like lowercase letters?");
const upperCaseSel = confirm("Would you like uppercase letters?");
const numbersSel = confirm("Would you like numbers?");
const specialCharSel = confirm("Would you like special characters?");

// Create function to generate the password
function generatePassword() {}

// Verify all the info

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  // Replaces the "Your Secure Password with new password"
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
