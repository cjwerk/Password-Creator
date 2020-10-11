// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var desiredLength = window.prompt("What is the desired length of th password?", "8");
  desiredLength = Number.parseInt(desiredLength, 10);
  if (Number.isNaN(desiredLength)) {
    alert("Invalid format. Please enter a valid number between 8 and 15.")
    return '';
  }
  if (desiredLength < 8 || desiredLength > 16) {
    alert("Invalid length. Please use a value between 8 and 15.")
    return "";

  }
  console.log(desiredLength)

  var lowercase = confirm("Do you want lowercase letters included? Press OK to include lowercase letters, hit cancel to not include lowercase letters.", "lowercase")
 
  console.log(lowercase)

  var uppercase = confirm("Do you want uppercase letters included in your password? Press OK to include upercase letters, hit cancel to not include upercase letters.", "upercase")
 
  console.log(uppercase)

  var numbers = confirm("Would you like numbers included in your password? Click OK for yes, hit cancel to not have upercase included.", "numbers")
 
  console.log(numbers)
  var allLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var allUpercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var allDigits = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  var generate = "";
  

  if (allLowercase) {
    var lowerIndex = Math.floor(Math.random() * allLowercase.length);
    generate = generate + allLowercase[lowerIndex];
  }
  if (allNumbers) {
    var numberIndex = Math.floor(Math.random() * allNumbers.length);

    generate = generate + allNumbers[numberIndex];
  }
  if (allUpercase) {
    var UperIndex = Math.floor(Math.random() * allUpercase.length);
    generate = generate + allUpercase[UperIndex];
  }

  while (generate.length < desiredLength) {
    var allOptions = Math.floor(Math.random() * allDigits.length);
    generate = generate + allDigits[allOptions];
}

  

  
  return generate;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
