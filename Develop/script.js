// Assignment Code
let encrypted_pass={};  //final password

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // const passwordBox = document.getElementById("passwordBox");
  const length = document.getElementById("length");
  let password = "";
  while ((encrypted_pass).length.value > passwordText.length) {
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if (isChecked) {
      password += keyToAdd();
    }

}

// Password Generation Function
function generatePassword(){
  var result = window.confirm("You will receive a series of prompts to construct your password.");
  console.log(result);

  // decides whether user wants to go ahead with password gen or not
  if (result===true){
    passwdLength()
  } else{
    return("User didn't continue with password generation.");
  }
}

// Password Criteria Functions

// Criteria 1: Password Length
function passwdLength(){

    // lets the user choose the password length
    let passwd_length = window.prompt("Choose length of password from 8 characters to 128 characters:","Example: 8, 50, 78, etc.");
    console.log(passwd_length);
    encrypted_pass.length = passwd_length;

    // checks if length has a data type of number
    if((isNaN(passwd_length))===false){
      return charType();
    } else{
      // Alerts user to re-enter a valid input
      window.alert("Invalid Input! Type a number below:")
      return passwdLength();
    }
}

// Criteria 2: Password Character Types
// Passwd Char Types Object
const types = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  special: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}

// Array
const getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * types.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * types.lowerCase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * types.number.length)];
  },
  function symbol() {
    return keys.symbol[Math.floor(Math.random() * types.special.length)];
  }
];

// Validation of Passwd Char Types
function charType(){
  let upper = window.confirm("Do you want your password to have 'UPPERCASE' characters");
  let lower = window.confirm("Do you want your password to have 'LOWERCASE' characters");
  let number = window.confirm("Do you want your password to have 'NUMBER' characters");
  let special = window.confirm("Do you want your password to have 'SPECIAL' characters");

  // checks if at least one character type is chosen
  if (upper + lower + number + special === 0) {
    alert("Please check atleast one box!");
    return charType();
  }
}