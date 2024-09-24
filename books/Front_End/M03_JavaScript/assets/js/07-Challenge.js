

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
});

function generatePassword() {
    let passwordLength = parseInt(
      prompt("Enter password length (between 8 and 128):")
    );

    // NaN means "not a number"
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Invalid input. Please enter a number between 8 and 128.");
      return ""; 
    }

    let includeUpperCase = confirm("Include uppercase letters?");
    let includeLowerCase = confirm("Include lowercase letters?");
    let includeNumber = confirm("Include numbers?");
    let includeSpecialCharacter = confirm("Include special characters?");
  
    // && means "and"
    if (
      !includeUpperCase &&
      !includeLowerCase &&
      !includeNumber &&
      !includeSpecialCharacter
    ) {
      alert("At least one character type must be selected.");
      return ""; 
    }
  
    let availableChar = "";
    if (includeUpperCase) {
      availableChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeLowerCase) {
      availableChar += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeNumber) {
      availableChar += "1234567890";
    }
    if (includeSpecialCharacter) {
      availableChar += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }
  
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * availableChar.length);
      password += availableChar.charAt(randomIndex);
    }
  
    return password;
  }