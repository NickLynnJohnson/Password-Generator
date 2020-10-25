//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

generateBtn.addEventListener("click", function(){
  alert("Thank you for coming to our website. To generate your password, you will need to answer several password criteria prompts. Please select OK to continue :)");

  //WHEN prompted for the length of the password
  //THEN I choose a length of at least 8 characters and no more than 128 characters
  
  var passwordLength = parseInt(prompt("Enter a password number length of at least 8 characters and no more than 128 characters."));
  

  if ((Number.isInteger(passwordLength)) && (passwordLength > 7) && (passwordLength < 129)){
    alert("Thanks for entering a number of at least 8 and no more than 128 characters.");
    var testedPasswordLength = passwordLength;
  } 
  else {
    alert("Come on user, enter a number between 8 and 128. We believe in you!");
  }

  //WHEN prompted for character types to include in the password
  //THEN I choose lowercase, uppercase, numeric, and/or special characters
  //WHEN I answer each prompt
  //THEN my input should be validated and at least one character type should be selected
  
  if (testedPasswordLength) {
    var specialCharacter = prompt("Now choose between: 'lowercase', 'uppercase', 'numeric', or 'special' for your next criterion.");

  } if (specialCharacter === "lowercase") {
    var lowerCase = specialCharacter;
    alert("lowercase it is!");

  } else if (specialCharacter === "uppercase") {
    var upperCase = specialCharacter;
    alert("uppercase it is!");

  } else if (specialCharacter === "numeric") {
    var numericCase = specialCharacter;
    alert("numericase it is!");

  } else if (specialCharacter === "special") {
    var specialCase = specialCharacter;
    alert("special it is!");
  } else {
    alert("Sorry you need to choose one of those previous options next time.");
  }

  //WHEN all prompts are answered
  //THEN a password is generated that matches the selected criteria
  //WHEN the password is generated
  //THEN the password is either displayed in an alert or written to the page

   
  if (lowerCase) {
    var possible = "abcdefghijklmnopqrstuvwxyz";
    var result = "";

    for (var i = 0; i < (testedPasswordLength); i++) {
      result += possible.charAt(Math.floor(Math.random() * 10));
    }
    alert("Your password is: " + result + ".");

  } else if (upperCase) {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";

    for (var i = 0; i < (testedPasswordLength); i++) {
      result += possible.charAt(Math.floor(Math.random() * 10));
    }
    alert("Your password is: " + result + ".");

  } else if (numericCase) {
    var possible = "0123456789";
    var result = "";

    for (var i = 0; i < (testedPasswordLength); i++) {
      result += possible.charAt(Math.floor(Math.random() * 10));
    }
    alert("Your password is: " + result + ".");

  } else if (specialCase) {
    var possible = ` !@#$%^&*()_+=-{[}]:;"'|\<,>.?/`;
    var result = "";

    for (var i = 0; i < (testedPasswordLength); i++) {
      result += possible.charAt(Math.floor(Math.random() * 10));
    }
    alert("Your password is: " + result + ".");
  
  } else {

  }

})

  


















