let numberToBeGuessed = null;
let userName;
let currentGuess;
let minNum = 0;
let maxNum = 25;
let numberOfGuesses = 5;

while (userName === undefined || userName === null || userName.length === 0) {
  userName = prompt("What is your name?");
}

alert("Hey " + userName + ", welcome at the Guess the Number Game!");

let selectedMinNum = parseInt(
  prompt("From which number can be guessed? (Standard: 0)")
);
if (!isNaN(selectedMinNum) && selectedMinNum >= 0) {
  minNum = selectedMinNum;
}

let selectedMaxNum = parseInt(
  prompt(
    "Uptil which number can be guessed? (Standard: 25, higher than " +
      minNum +
      ")"
  )
);
if (!isNaN(selectedMaxNum)) {
  maxNum = selectedMaxNum;
}

while (maxNum <= minNum) {
  let selectedMaxNum = parseInt(
    prompt(
      "The maximum number is lower than the minimum number. Uptil which number can be guessed? (Higher than " +
        minNum +
        ")"
    )
  );
  if (!isNaN(selectedMaxNum)) {
    maxNum = selectedMaxNum;
  }
}
alert(
  "You now have 5 attempts to guess the number. The number lies between " +
    minNum +
    " and " +
    maxNum +
    " ...Good Luck!"
);

numberToBeGuessed = Math.floor(Math.random() * (maxNum - minNum)) + minNum;

while (currentGuess !== numberToBeGuessed) {
  if (numberOfGuesses < 1) {
    alert(
      "Unfortunately, you ran out of attempts. You've lost. We start with a new number between " +
        minNum +
        " and " +
        maxNum +
        "."
    );
  }
  currentGuess = parseInt(prompt("Enter a number"));

  while (isNaN(currentGuess)) {
    currentGuess = parseInt(
      prompt(
        "Your input is not a number. Please enter only numbers, try again."
      )
    );
  }

  numberOfGuesses--;

  let message = "";
  if (currentGuess === numberToBeGuessed) {
    message = "Congratulations, you won, the number is " + currentGuess;
  } else {
    if (currentGuess > numberToBeGuessed) {
      message = "Unfortunately, your number was too high.";
    }
    if (currentGuess < numberToBeGuessed) {
      message = "Unfortunately, your number was too low.";
    }
    if (numberOfGuesses < 1) {
      message += " This was your final attempt.";
    } else {
      message +=
        " You still have: " + numberOfGuesses + " attempts left. Try again:";
    }
  }
  alert(message);
}

alert(
  "We will close the game, thank you for playing " +
    userName +
    ", see you next time!"
);
