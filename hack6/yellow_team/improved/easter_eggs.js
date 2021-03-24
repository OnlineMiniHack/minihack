// Easter egg 1: Append Easter Egg image to "pics" div

function appendEggImage(src, width, height, alt){
    var img = document.createElement("img");
    img.src = "https://blog.creatopy.com/wp-content/uploads/2020/03/Funny-Camouflage-Easter-Egg-Hunt-Card.png";
    var el = document.getElementById("pics");
    pics.appendChild(img); 
}

// Easter egg 2: Make window move from side to side

var myVar = 0;
var d = 0;
var x = 0;
var s = 0;
var s2 = 0;
var el;

function tap() {
    myVar = setInterval(tapStep, 10);
    s = 10;
    d = 1;
    s2 = 10;
}

function tapStep() {
    el = document.getElementById('main');
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

// Easter egg 3: Make main div rotate 360 degrees

function roll() {
    el = document.getElementById('main');
    el.classList.add('roll');
    setTimeout(removeRoll, 2000);
}

function removeRoll(){
    el = document.getElementById('main');
    el.classList.remove('roll');
}

// Easter egg 4: Make image fall

function fall() {
    el = document.getElementById('fall');
    el.classList.add('fall');
}

// Easter egg 5: Change background and text to random colours

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

// Easter egg 6: Append easter icons to address bar

var f = ['🥚🍫🐇🐤🙏'];

function flashURL(){
    location.hash = f[Math.floor((Date.now() / 100) % f.length)].repeat(20);
    setTimeout(flashURL, 250);
}

// Easter egg 7: Say "Happy Easter to You!"

function sayHappyEaster(){
    speakText("Happy Easter to You!");
}

function speakText(textToSay) {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(textToSay);
    synth.speak(utterThis);
}

