var webcam;
var accept = false;

$(document).ready(function () {
    const webcamElement = document.getElementById('webcam');
    const canvasElement = document.getElementById('canvas');
    const snapSoundElement = document.getElementById('snapSound');
    webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
    webcam.start()
        .then(result => {
            console.log("webcam started");
            // sayCheese();
        })
        .catch(err => {
            console.log(err);
        });
    $(document).keydown(function (event) {
        handleKeydown(event);
    });
});


function sayCheese(){
    console.log("Hello");
    let picture = webcam.snap();
    $('you').html('<img src="' + picture + '"/>');
    if (accept){
        $(result).css("color", "green");
        $(result).html(`Welcome. We've been expecting you. <a href="index.html">Click here to enter.</a>`);
    } else{
        $(result).css("color", "red");
        $(result).text("Face not recognised. You may not enter.");
    }
}

function handleKeydown(event) {

        switch (event.which) {
            case 37: {// Left
                accept = true;    
                console.log("ACCEPT");
                break;
            }
            case 39: { // Right
                accept = false;
                console.log("DO NOT ACCEPT");
            }
            
        }
}