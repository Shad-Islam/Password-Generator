const passwordBox = document.getElementById("password");
const length = 20;
const upperCase = "ABCDEFGHIJKLMNOPORSTUVWXYZ";
const lowerCase = "abcdefghijkImnopqrstuvwxyz";
const number = "0123456789";
const symbol = "C#$%^8*()_+~|H[1></-=";
const allChars = upperCase + lowerCase + number + symbol;

const allChar = upperCase + lowerCase + symbol + number;

function createPassword() {
  let password = " ";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  //   console.log(password);

  while (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }

  passwordBox.value = password;
  console.log(password);
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
