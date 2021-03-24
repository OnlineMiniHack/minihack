function petesEasterEgg(src, width, height, alt){
    var img = document.createElement("img");
    img.src = "https://blog.creatopy.com/wp-content/uploads/2020/03/Funny-Camouflage-Easter-Egg-Hunt-Card.png";
        
    // This next line will just add it to the <body> tag
    var el = document.getElementById("pics");
    pics.appendChild(img); 
    

}

var myVar = 0;
var d = 0;
var x = 0;
var s = 0;
var s2 = 0;

function tap() {

    myVar = setInterval(tapStep, 10);
    s = 10;
    d = 1;
    s2 = 10;
}

function tapStep() {
    var el = document.getElementById('main');
    el.style = "transform: translate(" + x + "px, 0);";
    x = x + d;
    s2 = s2 - 1;
    if (s2 == 0) {
        s = s - 1;
        d = -d;
        s2 = s;
    }
    if (s == 0) {
        clearInterval(myVar);
    }
        
}



function roll() {
    var el = document.getElementById('main');
    el.classList.add('roll');
   
}

function fall() {
    var el = document.getElementById('fall');
    el.classList.add('fall');
}

function colour() {
    var el = document.body;
    var red = 254 - (Math.random() * 50);
    var green = 254 - (Math.random() * 50);
    var blue = 254 - (Math.random() * 50);
    el.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

    red = Math.random() * 150;
    green = Math.random() * 150;
    blue = Math.random() * 150;
    el.style.color = "rgb(" + red + "," + green + "," + blue + ")";
}


var f = ['🥚🍫🐇🐤🙏'];

function flashURL(){
    location.hash = f[Math.floor((Date.now() / 100) % f.length)].repeat(20);
    setTimeout(flashURL, 250);
}

function speakText(textToSay) {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(textToSay);
    synth.speak(utterThis);
}

