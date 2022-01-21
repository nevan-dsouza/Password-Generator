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
    let start = prompt("You will be presented witha series of prompts for password criteria")
    var characters = prompt("What is the length of your password? Minimum 8 and maximum 128 characters.");
    if(isNaN (parseInt(characters))) {
    alert("Please input a number between 8 and 128.")
        return
    } else if(parseInt(characters) < 8 || parseInt(characters) > 128) {
    alert("Sorry, your password is either too short or too long. Please keep your password between 8-128 characters in length.");
    return;
    }

    var passwordOptions = ""


    var lowerCase = confirm("Would you like lower case letters in your password?");
    if(lowerCase === true) {
    var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    passwordOptions += lowerCaseLetters
    }

    var upperCase = confirm("Would you like upper case letters in your password?");
    if(upperCase === true) {
        var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        passwordOptions += upperCaseLetters
        }


    var numbers = confirm("Would you like numbers in your password?");
    if(numbers === true) {
    var numbersTrue = "1234567890"
    passwordOptions += numbersTrue
    }


    var symbols = confirm("Would you like symbols in your password? Special characters include: !@#$%^&*()_+");
    if(symbols === true) {
    var symbolsTrue = '"~!@#$%^&*()_+{}|"'
    passwordOptions += symbolsTrue
    }


    var password = ""


    // console.log(characters);
    // console.log(lowerCase);
    // console.log(upperCase);
    // console.log(numbers);
    // console.log(symbols);
    console.log(parseInt (characters))
    // Validity check on variables
    // passwordOptions holds the user's password criteria.
    console.log(passwordOptions)

    // Randomly choose characters from passwordOptions
    for (var i = 0; i < characters; i++) {
    var randomNumber = Math.floor(Math.random() * passwordOptions.length);
    password += passwordOptions.substring(randomNumber, randomNumber +1);
    }
    // password pulls from passwordOptions to create the user's password.
    document.getElementById("password").value = password;
    console.log(password);
    }