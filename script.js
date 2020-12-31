
// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var symbols = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Actual password creation
function generatePassword () {
  
  var passCharacters = "";
  var userPassword = "";

  var passlength = prompt("Number of characters in password? min 8 max 128");

  if (passlength >= 8 && passlength <= 128) {

    password.length = passlength


    var hasLowerCase = confirm("Do you want lower case?");
    var hasUpperCase = confirm("Do you want upper case?");
    var hasNumeric = confirm("Do you want numeric");
    var hasSymbols = confirm("Do you want symbols");

  }

  else {
    alert("Paramaters not met for password creation. Lenght must be 8-128 characters")
  }

  if (hasLowerCase) {
    passCharacters += lowerCase
  }
  if (hasUpperCase) {
    passCharacters += upperCase
  }
  if (hasNumeric) {
    passCharacters += numeric
  }
  if (hasSymbols) {
    passCharacters += symbols
  }


  for ( var i=0; i < passlength; i++ ) {
    userPassword += passCharacters[Math.floor(Math.random() * passCharacters.length)];
  }

console.log(passCharacters)

return userPassword

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 
