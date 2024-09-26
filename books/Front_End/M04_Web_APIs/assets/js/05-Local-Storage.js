var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
    event.preventDefault();

    // (we use .preventDefault() method ) to show the letters written in the box till not doing refresh

    var user = {
      firstName: firstNameInput.value.trim(),
      lastName: lastNameInput.value.trim(),
      email: emailInput.value.trim(),
      password: passwordInput.value.trim()
    };
    
    // we use .trim() method not to get or count user's spacebar touching in the box
    
    localStorage.setItem("user", JSON.stringify(user));
    
  });
  