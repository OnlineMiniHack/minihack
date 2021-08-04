function speechRecord()
{
	console.log('Start speech recongnition');
	
	// new speech recognition object
	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
	var recognition = new SpeechRecognition();
	            
	// This runs when the speech recognition service starts
	recognition.onstart = function() {
	    console.log("We are listening. Try speaking into the microphone.");
	};
	
	recognition.onspeechend = function() {
		console.log('Speech ended');
	    // when user is done speaking
	    recognition.stop();
	}
	
	recognition.onresult = function(event) {
		console.log('Speech result');
		
	    var transcript = event.results[0][0].transcript;
	    var confidence = event.results[0][0].confidence;
		//confidence could be 0, 1, 2 or higgest 3 
		if (confidence > 0.90) {
			console.log(transcript);
			if ('my voice is my password' === transcript) {
				document.location.href="main.html";
			} else{
				window.alert("That is not your password.");
			}
		}
		else {
			window.alert("YOU MAY NOT ENTER!");
		}
	};
	
	// start recognition
	recognition.start();
	
	return false;
}

document.addEventListener('DOMContentLoaded', function() {
	let signInBtn = document.getElementById('submitBtn');
    signInBtn.addEventListener("click", speechRecord);	
}, false);