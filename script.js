var passwordLength = 0;
var choiceArray = [];

//Arrays used to create password characters
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", ".", "/", "?", ";"]
var numberArrey = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lcaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ucaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const aNumber = Number(window.prompt("How many characters in your password?", ""));
/*
Generate password
  User input a number between 8 and 128. (stored in a varible)
  list all of the characters possible in an array
    array lowercase letters
    array of uppercase letters
    array of numbers
    array of symbols

  I will need varibles to hold the user inputs
*/

//Generate a password based on the above function call from writePassword
function generatePassword() {

}


//Create prompts for character types as in the User request described
function charPrompts() {
  passwordLength = Number(prompt("How many characters will your password have? (Please chose a number between 8 to 128"))

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert ("Character length has to be a number, and between 8 - 128. Try Again!");
    return false;
  }
}
