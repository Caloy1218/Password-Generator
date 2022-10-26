let genPassBtnEl = document.querySelector("#genPassBtn");
let pass1 = document.querySelector("#pass1");
let pass2 = document.querySelector("#pass2");

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let passwordLength = 12;
genPassBtnEl.addEventListener("click", function () {
  pass1.textContent = " ";
  pass2.textContent = " ";
  forLoopPass();
});

function forLoopPass() {
  for (let i = 0; i < passwordLength; i++) {
    let randomNum = Math.floor(Math.random() * characters.length);
    let randomNum1 = Math.floor(Math.random() * characters.length);
    pass1.textContent += characters[randomNum];
    pass2.textContent += characters[randomNum1];
  }
}
let hr = document.querySelector("#hr");
let content = document.getElementsByTagName("body")[0];
let darkMode = document.querySelector("#darkMode");
let generatePassContainer = document.querySelector(".generatePassContainer");
darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  content.classList.toggle("night");
  generatePassContainer.classList.toggle("night");
  genPassBtnEl.classList.toggle("night");
  pass1.classList.toggle("night");
  hr.classList.toggle("night");
  pass2.classList.toggle("night");
});

function copyPass1() {
  pass1.textContent.select();
  pass1.textContent.setSelectionRange(0, 999);
  document.execCommand("copy");
}
