// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordCriteria);


// Password Criteria Function 
function passwordCriteria() {

    // Starts with pop up stating what will happen
    let start = confirm("You will be presented with a series of prompts for password criteria")

    if(start!==true){
        return;
    }

    // prompts user to choose desired length of password
    var characters = prompt("Choose your length of the password.","Min 8 and Max 128 characters");

    // checks if inputted length is a number or not
    if(isNaN (parseInt(characters))) {
    alert("Please input a number between 8 and 128.")
        return;
    } else if(parseInt(characters) < 8 || parseInt(characters) > 128) {
    alert("Sorry, your password is either too short or too long. Please keep your password between 8-128 characters in length.");
    return;
    }

    var passwordOptions = ""

    // asks user to choose lowercase or not
    var lowerCase = confirm("Would you like LOWER CASE letters in your password?");
    if(lowerCase === true) {
    var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    passwordOptions += lowerCaseLetters
    }

    // asks user to choose uppercase or not
    var upperCase = confirm("Would you like UPPER CASE letters in your password?");
    if(upperCase === true) {
        var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        passwordOptions += upperCaseLetters
        }

    // asks user to choose numbers or not
    var numbers = confirm("Would you like NUMBERS in your password?");
    if(numbers === true) {
    var numbersTrue = "1234567890"
    passwordOptions += numbersTrue
    }

    // asks user to choose symbols or not
    var symbols = confirm("Would you like SYMBOLS like !@#$%^&*()_+ in your password? ");
    if(symbols === true) {
    var symbolsTrue = '"~!@#$%^&*()_+{}|"'
    passwordOptions += symbolsTrue
    }

    // checks if user chose at least one criteria
    if (lowerCase+upperCase+numbers+symbols === 0){
        alert("You have to select AT LEAST one criteria!");
        return;
    }

    var password = ""


    // console.log(characters);
    // console.log(lowerCase);
    // console.log(upperCase);
    // console.log(numbers);
    // console.log(symbols);

    console.log(parseInt (characters))
    // variables Validity check
    // passwordOptions holds the user's password criteria.
    console.log(passwordOptions)

    // Randomly choose any character from passwordOptions
    for (var i = 0; i < characters; i++) {
    var randomNumber = Math.floor(Math.random() * passwordOptions.length);
    password += passwordOptions.substring(randomNumber, randomNumber +1);
    }

    // pulls from passwordOptions to create the user's password.
    document.getElementById("password").value = password;
    console.log(password);
    }