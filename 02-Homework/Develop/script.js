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

var newArray = []

// Provided by instructor
// ask about Uppercase
function setCharacters(){

  function askAboutUppercase(){
    allowUppercase = confirm("Are upper case characters allowed?");
    console.log(allowUppercase);
    if (allowUppercase === true){
      newArray.push (...uppercaseChars);
      console.log(newArray);
    }
      
  } 

  // ask about Lowercase
  function askAboutLowercase(){
    allowLowercase = confirm("Are lower case characters allowed?");
    console.log(allowLowercase);
    if (allowLowercase === true){
      newArray.push (...lowercaseChars);
      console.log(newArray);
    }
  }

  // ask about Number
  function askAboutNumbers(){
    allowNumbers = confirm("Are numbers allowed?");
    console.log(allowNumbers);
    if (allowNumbers === true){
      newArray.push (...number);
      console.log(newArray);
    }
  }

  // ask about Specials
  function askAboutSpecials(){
    allowSpecials = confirm("Are special characters allowed?");
    console.log(allowSpecials);
    if (allowSpecials === true){
      newArray.push (...specials);
      console.log(newArray);
    }
  }


  //this will make numberGiven whatever number is entered into the prompt.
  function askNumberOfCharacters(){
    passwordCharacterCount = prompt("How many characters are allowed?"); //allows user to input number of characters
    if (passwordCharacterCount === null){ 
      return; //this will break the loop if cancel button is pressed.
    }else if ( passwordCharacterCount > 7 && passwordCharacterCount < 129) { //the number needs to be between 8 and 128.
      console.log(passwordCharacterCount); //just here to verify number
      console.log(typeof passwordCharacterCount); //just here to verify data type
      var passwordCharacterCountInt = parseInt(passwordCharacterCount); //this will pass the passwordCharacterCount from a string to a number.
      console.log(typeof passwordCharacterCountInt); //just here to verify data type
    }else {
      askNumberofCharacters8to128()
    }
    passwordCharacterCount = passwordCharacterCount;
  }

  //this function will create a loop requiring the user to input a number between 8 and 128.
  function askNumberofCharacters8to128(){
    passwordCharacterCount = prompt("Please enter a number between 8 and 128 for the allowed charaters. Thank You!"); 
    //allows user to input a different number of characters allowed between 8 and 128.
    if (passwordCharacterCount === null){
      return;
    }else if ( passwordCharacterCount > 7 && passwordCharacterCount < 129) {
      console.log(passwordCharacterCount); //just here to verify the number
      var passwordCharacterCountInt = parseInt(passwordCharacterCount); //this will pass the passwordCharacterCount from a string to a number.
      console.log(typeof passwordCharacterCountInt); //just here to verify data type
    } else {
      askNumberOfCharacters ();
    }

  }
askAboutUppercase();
askAboutLowercase();
askAboutNumbers();
askAboutSpecials();
askNumberOfCharacters();

}
// Once all the criteria are determined, this function will generate the password.
function securePassword(){
  setCharacters();
  password = "";

  
  for (let i = 0; i < passwordCharacterCount; i++) {
    var randomSelector = Math.floor(Math.random()* (newArray.length-1))
    password += newArray[randomSelector];
  }
  return password;
}


// Write password to the #password input
function writePassword() {

  var password = securePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

