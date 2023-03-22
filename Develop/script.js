// Assignment Code
let generateBtn = document.querySelector("#generate");

// Create function to generate the password
// generatePassword has to be assigned to something

function generatePassword() {
  // Write a prompt for criteria
  // Prompt for length 8-128 characters
  let length = prompt(
    "How many characters would you like your password to be?"
  );
  // Character type confirmations
  let lowerCase = confirm("Would you like lowercase letters?");
  let upperCase = confirm("Would you like uppercase letters?");
  let numbers = confirm("Would you like numbers?");
  let specialChar = confirm("Would you like special characters?");
  // Input validation
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  // Replaces the "Your Secure Password with new password"
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
