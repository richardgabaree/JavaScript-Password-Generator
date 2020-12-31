
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
