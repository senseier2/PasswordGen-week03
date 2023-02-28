// Initial password length
var passwordLength = 0;
// Initial character choice array
var choiceArray = [];

//Arrays used to create password characters
// symbols
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", ".", "/", "?", ";"];
// numbers
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// lowercase letters
var lcaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase letters
var ucaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var myPrompts = charPrompts(); //returns a boolean
    var passwordText = document.querySelector("#password");

  if(myPrompts) {
    var yourPassword = generatePassword();
    passwordText.value = yourPassword;
  } 
  else {
    passwordText.value = "";
  }
}


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
    alert("Character length has to be a number, and between 8 - 128.");
    return false;
  }

  if (confirm("Would you like to use lowercase letters")) {
    choiceArray = choiceArray.concat(lcaseArray);
  }

  if (confirm("Would you like to have uppercase letters")) {
    choiceArray = choiceArray.concat(ucaseArray);
  }

  if (confirm("Would you like to use symbols in your passwords")) {
    choiceArray = choiceArray.concat(symbols);
  }

  if (confirm("Would you like to use numbers")) {
    choiceArray = choiceArray.concat(numberArray);
  }
  return true;
}
