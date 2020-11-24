const fruits = [
  "mangosteen",
  "pineapple",
  "apple",
  "banana",
  "coconut",
  "grape",
  "lemon",
  "apricot",
  "kiwi",
  "papaya",
  "cherry",
  "plum",
  "lime",
  "lychee",
];

const wordsSoFar = [];

function start() {
  // start again
  wordsSoFar.length = 0;
  introToGame();
}

function introToGame() {
  speakText(
    "Welcome to the fruit memory game. I will now read you a list of words. Try to remember them in order"
  );
  wordsSoFar.push(randomWord());
  wordsSoFar.push(randomWord());
  wordsSoFar.push(randomWord());

  speakText(wordsSoFar[0]);
  speakText(wordsSoFar[1]);
  speakText(wordsSoFar[2]);
}

function getRandomInt(max) {
  // random number between 0 and length of array - 1
  return Math.floor(Math.random() * Math.floor(max));
}

function randomWord() {
  const unusedWords = fruits.filter((f) => !wordsSoFar.includes(f));
  const r = getRandomInt(unusedWords.length);
  return unusedWords[r];
}

function advanceGame() {
  // function to hoist / avoid ordering of functions...
  speakText(wordsSoFar[wordsSoFar.length - 1]);
}

function speakText(textToSay) {
  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(textToSay);
  synth.speak(utterThis);
}

document.getElementById("inputForm").onsubmit = function (event) {
  return onSubmitAnswer(event);
};

function onSubmitAnswer(event) {
  event.preventDefault();
  const input = document.querySelector("#input");
  const guess = input.value.toLowerCase();
  const wordsSoFarString = wordsSoFar.join(", ");

  input.value = "";
  if (guess === wordsSoFarString) {
    speakText("Correct! Try with one more word.");
    wordsSoFar.push(randomWord());
    setTimeout(advanceGame, 1000);
  } else {
    if (wordsSoFar.length == 3) {
      speakText("Sorry, game over. You have the memory of a goldfish.");
    } else {
      speakText(
        "Sorry, game over. You remembered " +
          (wordsSoFar.length - 1) +
          " words."
      );
    }
  }
  return false;
}
