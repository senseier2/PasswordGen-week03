var passwordLength = 0;
var choiceArray = [];

//Arrays used to create password characters
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", ".", "/", "?", ";"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lcaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ucaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var myPrompts = getPrompts(); //returns a boolean
    var passwordText = document.querySelector("#password");

  if(myPrompts) {
    var yourPassword = generatePassword();
    passwordText.value = yourPassword;
  } 

  else {
    passwordTest.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{

}


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

  var password = "";
  for(var i = 0; i < passwordLength; i++) {
      var randomChar = Math.floor(Math.random() * choiceArray.length);
      password = password + choiceArray[randomChar];
  }
  return password;
}


//Create prompts for character types as in the User request described
function charPrompts() {
  choiceArray = [];
  passwordLength = Number(prompt("How many characters will your password have? (Please chose a number between 8 to 128"))

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Character length has to be a number, and between 8 - 128. Try Again!");
    return false;
  }

  if (confirm("Would you like to have lowercase letters in your password")) {
    choiceArray = choiceArray.concat(lcaseArray);
  }

  if (confirm("Would you like to have uppercase letters in your password")) {
    choiceArray = choiceArray.concat(ucaseArray);
  }

  if (confirm("Would you like to have symbols in your password")) {
    choiceArray = choiceArray.concat(symbols);
  }

  if (confirm("Would you like to have lowercase letters in your password")) {
    choiceArray = choiceArray.concat(numberArray);
  }
  return true;
}
