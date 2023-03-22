// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Create function to generate the password

  // generatePassword has to be assigned to something
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Replaces the "Your Secure Password with new password"
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
