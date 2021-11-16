var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var colors = ['north', 'south', 'east', 'west', 'activate', 'off'];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}


send_request = function(request){

  // REQUEST CODE GOES HERE

}


recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  var color = event.results[0][0].transcript;
  console.log(color)
  switch(color){
    case 'North':
      document.getElementById('left').style.fontWeight = 'normal'
      document.getElementById('right').style.fontWeight = 'normal'
      document.getElementById('up').style.fontWeight = 'bold'
      document.getElementById('down').style.fontWeight = 'normal'
      break;
    case 'South':
      document.getElementById('left').style.fontWeight = 'normal'
      document.getElementById('right').style.fontWeight = 'normal'
      document.getElementById('up').style.fontWeight = 'normal'
      document.getElementById('down').style.fontWeight = 'bold'
      break;
    case 'West':
      document.getElementById('left').style.fontWeight = 'bold'
      document.getElementById('right').style.fontWeight = 'normal'
      document.getElementById('up').style.fontWeight = 'normal'
      document.getElementById('down').style.fontWeight = 'normal'
    break;
    case 'East':
      document.getElementById('left').style.fontWeight = 'normal'
      document.getElementById('right').style.fontWeight = 'bold'
      document.getElementById('up').style.fontWeight = 'normal'
      document.getElementById('down').style.fontWeight = 'normal'
      break;
    case 'activate':
      if(document.getElementById('left').style.fontWeight == 'bold'){
        document.getElementById('left').style.color = 'green'
        sendrequest('ACTIVATE-WEST')
      }
      if(document.getElementById('right').style.fontWeight == 'bold'){
        document.getElementById('right').style.color = 'green'
        sendrequest('ACTIVATE-EAST')
      }
      if(document.getElementById('up').style.fontWeight == 'bold'){
        document.getElementById('up').style.color = 'green'
        sendrequest('ACTIVATE-NORTH')
      }
      if(document.getElementById('down').style.fontWeight == 'bold'){
        document.getElementById('down').style.color = 'green'
        sendrequest('ACTIVATE-SOUTH')
      }
    case 'off':
      if (document.getElementById('left').style.fontWeight == 'bold') {
        document.getElementById('left').style.color = 'red'
        sendrequest('OFF-WEST')
      }
      if (document.getElementById('right').style.fontWeight == 'bold') {
        document.getElementById('right').style.color = 'red'
        sendrequest('OFF-EAST')
      }
      if (document.getElementById('up').style.fontWeight == 'bold') {
        document.getElementById('up').style.color = 'red'
        sendrequest('OFF-NORTH')
      }
      if (document.getElementById('down').style.fontWeight == 'bold') {
        document.getElementById('down').style.color = 'red'
        sendrequest('OFF-SOUTH')
      }
    }
  // recognition.start();
  // bg.style.backgroundColor = color;
  console.log('Confidence: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onend = function () {
  recognition.start();
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = "I didn't recognise that color.";
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}
