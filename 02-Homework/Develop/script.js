// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
var allowUppercase;
var allowLowerCase;
var allowNumbcrs;
var allowSpecials;
var passwordCharacterCount;

var uppercaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowercaseChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "|", "\\", "}", "{", "]", "[", '"', "'", ":", ";", "/", "?", ".", ">", ",", "<", "`", "~"];



// Provided by instructor

// ask about Uppercase
function askAboutUppercase(){
  allowUppercase = confirm("Are upper case characters allowed?");
  console.log(allowUppercase);
}

// ask about Lowercase
function askAboutLowercase(){
  allowLowercase = confirm("Are lower case characters allowed?");
  console.log(allowLowercase);
}

// ask about Number
function askAboutNumbers(){
  allowNumbers = confirm("Are numbers allowed?");
  console.log(allowNumbers);
}

// ask about Specials
function askAboutSpecials(){
  allowSpecials = confirm("Are special characters allowed?");
  console.log(allowSpecials);
}
// Repeat for other criteria; for the number of characters, use a prompt statement. Google it. NOTE: prompt statements think any value you provide is a string. You will need to convert it to a number.
function askNumberOfCharacters(){
  window.prompt("How many characters are allowed?");
}

// Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.
function generatePassword(){
  var finalResult = ""

  // HINT: Remember that a for-loop can iterate from a starting number to a ending number, such as the number of characters in a password.

  // HINT: You may want to look into merging arrays together


  return finalResult;
}

// Write password to the #password input
function writePassword() {

  // ask the questions first
  askAboutUppercase();
  askAboutLowercase();
  askAboutNumbers();
  askAboutSpecials();
  askNumberOfCharacters();




  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

drawbox(red);
