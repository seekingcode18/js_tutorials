let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const userProfile_i = document.querySelector(".user-profile > i");
const computerProfile_i = document.querySelector(".computer-profile > i");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
// add reset functionality to reset scores to 0
const reset_div = document.querySelector(".reset-button");


function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}



function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} (U) beats ${convertToWord(computerChoice)} (C). You won 😀!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
  userProfile_i.classList.add("player-glow");
  setTimeout(() => userProfile_i.classList.remove("player-glow"), 300);
}

function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} (U) loses to ${convertToWord(computerChoice)} (C). You lost 😩!`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
  computerProfile_i.classList.add("player-glow");
  setTimeout(() => computerProfile_i.classList.remove("player-glow"), 300);
}

function tie(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)} (U) equals ${convertToWord(computerChoice)} (C). Tie 😶!`;
  userChoice_div.classList.add("grey-glow");
  setTimeout(() => userChoice_div.classList.remove("grey-glow"), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(userChoice, computerChoice);
      break;
  }
};

function newFunction() {
  return 'object :';
}

function reset () {
  // reset scores to 0 when pressed
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  // also reset text to 'get ready'
  result_p.innerHTML = "New game: get ready to play!"
}


function main() {
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));

  reset_div.addEventListener('click', () => reset());
};

main();


// colour picker

function getColour() {
  const redRange_input = document.getElementById('red-picker');
  const greenRange_input = document.getElementById('green-picker');
  const blueRange_input = document.getElementById('blue-picker');
  // grab player labels to change colour later
  const profileLabel_div = document.querySelectorAll('.badge');

  // grab icons to change colour later
  const icons_i = document.querySelectorAll('.colour-icons > i')

  // listen for input event on range elements
  redRange_input.addEventListener('input', changeColour); // no parentheses after fn name otherwise it will invoke it immedaitely
  greenRange_input.addEventListener('input', changeColour);
  blueRange_input.addEventListener('input', changeColour);

  // fn to change colour
  function changeColour() {
    let red = parseInt(document.getElementById('red-picker').value);
    let green = parseInt(document.getElementById('green-picker').value);
    let blue = parseInt(document.getElementById('blue-picker').value);
    // set colours to new variable
    let newColour = `rgb(${red},${green},${blue})`

    // change player label colour
    Array.from(profileLabel_div).forEach((i) => i.style.backgroundColor = newColour);

    // change icon colour
    Array.from(icons_i).forEach((i) => i.style.color = newColour);
  }
}





getColour();

