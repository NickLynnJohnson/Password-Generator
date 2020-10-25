// Assignment Code


var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


generateBtn.addEventListener("click", function(){
  alert("Thank you for coming to our website. To generate your password, you will need to answer several password criteria prompts. Please select OK to continue :)");

  //WHEN prompted for the length of the password
  //THEN I choose a length of at least 8 characters and no more than 128 characters
  
  var passwordLength = parseInt(prompt("Enter a password number length of at least 8 characters and no more than 128 characters."));
  

  if ((Number.isInteger(passwordLength)) && (passwordLength > 7) && (passwordLength < 129)){
    alert("Thanks for entering a number between 8 and 128.");
    var testedPasswordLength = passwordLength;
  } 
  else {
    alert("Come on user, enter a number between 8 and 128. We believe in you!");
  }

  //WHEN prompted for character types to include in the password
  //THEN I choose lowercase, uppercase, numeric, and/or special characters
  
  if (testedPasswordLength) {
    var specialCharacter = prompt("Now choose between: 'lowercase', 'uppercase', 'numeric', or 'special characters' for your next criterion.");
  }

  if (specialCharact)

  //WHEN I answer each prompt
  //THEN my input should be validated and at least one character type should be selected


  /*if (isNaN(passwordLength)){
    alert("Come on user, enter a number between 8 and 128. We believe in you!");
  }
  else {
    alert("Thanks for entering a number.");
  }

  if ((passwordLength > 7) && (passwordLength < 129)) {
    alert("You rock!")
  }
  else {
    alert("Make sure the number is between 8 and 128 characters.")
  }




  typeof passwordLength == "number"
*/
  

})

  /*
  if ((isNaN(passwordLength)) && (passwordLength >= 8) && (passwordLength <= 128)){
    alert("Come on user, enter a number between 8 and 128. We believe in you!");
  }
  else {
    alert("Thanks for entering a number.");
  }
  
  
  
  if (typeof passwordLength == 'number'){
    alert("Thanks for entering a number.");
  } 
  else {
    alert("Come on user, enter a number between 8 and 128. We believe in you!");
  }

*/


//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password





//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria


//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
  //alert(value);






// Write password to the #password input
/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/