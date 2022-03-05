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

//this will make numberGiven whatever number is entered into the prompt.
function askNumberOfCharacters(){
  var numberGiven = prompt("How many characters are allowed?"); //allows user to input number of characters
  if (numberGiven === null){ 
    return; //this will break the loop if cancel button is pressed.
  }else if ( numberGiven > 0 && numberGiven < 26) { //the number needs to be above 0
    console.log(numberGiven); //just here to verify number
    console.log(typeof numberGiven); //just here to verify data type
    var numberGivenInt = parseInt(numberGiven); //this will pass the numberGiven from a string to a number.
    console.log(typeof numberGivenInt); //just here to verify data type
  }else {
    askNumberofCharacters0to25()
  }
  
}

//this function will create a loop requiring the user to input a number above 0.
function askNumberofCharacters0to25(){
  var numberGiven = prompt("Please enter a number between 0 and 25 for the allowed charaters. Thank You!"); 
  //allows user to input a different number of characters allowed above 0.
  if (numberGiven === null){
    return;
  }else if ( numberGiven > 0 && numberGiven < 26) { //the number needs to be above 0
    console.log(numberGiven); //just here to verify the number
    var numberGivenInt = parseInt(numberGiven); //this will pass the numberGiven from a string to a number.
    console.log(typeof numberGivenInt); //just here to verify data type
  } else {
    askNumberOfCharacters ();
  }

}

// Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.
function generatePassword(){
  var finalResult = ""

  // HINT: Remember that a for-loop can iterate from a starting number to a ending number, such as the number of characters in a password.

  //****************************************************figure out this for loop
  // for (let i=0; len = uppercaseChars; i++){
  //   var uppercaseRandom = i + "";   
  // }

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

