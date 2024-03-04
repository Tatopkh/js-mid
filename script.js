let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("buttons"));
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
//perebi

function changeColor() {
  document.body.style.backgroundColor =
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")";
}

// paroli

const passwrodLength = document.getElementById("password-length");
const includeLetters = document.getElementById("letters");
const includeNumbers = document.getElementById("include-number");
const includeSymbols = document.getElementById("include-symbols");
const password = document.getElementById("password");

function generateRandomPassword() {
  let characterSet = "";
  console.log(characterSet[0]);
  if (includeLetters.checked) {
    characterSet += "abcdefghijklmnopqrstuvwq";
  }

  if (includeNumbers.checked) {
    characterSet += "0123456789";
  }

  if (includeSymbols.checked) {
    characterSet += "!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
  }

  let generatedPassword = "";

  for (let i = 0; i < passwrodLength.value; i++) {
    let randomIndex = Math.floor(Math.random() * characterSet.length);
    generatedPassword += characterSet[randomIndex];
  }

  if (
    includeLetters.checked ||
    includeNumbers.checked ||
    includeNumbers.checked
  ) {
    password.innerText = generatedPassword;
  } else {
    password.innerText = "";
  }
}
