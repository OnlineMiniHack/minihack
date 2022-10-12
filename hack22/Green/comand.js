const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
const grammar = `#JSGF V1.0; grammar numbers; public <number> = ${numbers.join(' | ')};`

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);

recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.lang = 'en-GB';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.start();

console.log('Give a command');

recognition.onspeechend = () => {
    recognition.stop();
    console.log("ended");
}


recognition.onresult = (event) => {
  let number = event.results[event.resultIndex][0].transcript;
  console.log(event);
  console.log(`You said ${number}`);
  console.log(`Confidence: ${event.results[0][0].confidence}`);
  play(number);
}


function start() {
    recognition.start();
}