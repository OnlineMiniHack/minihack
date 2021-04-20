var foundStatuses = [false, false, false, false, false, false, false];

// Easter egg 1: Append easter icons to address bar

var f = ['🥚🍫🐇🐤🙏'];

function flashURL() {
    location.hash = f[Math.floor((Date.now() / 100) % f.length)].repeat(20);
    setTimeout(flashURL, 250);
    foundStatuses[0] = true;
}

// Easter egg 2: Append Easter Egg image to "pics" div

function appendEggImage(src, width, height, alt){
    var img = document.createElement("img");
    img.src = "https://blog.creatopy.com/wp-content/uploads/2020/03/Funny-Camouflage-Easter-Egg-Hunt-Card.png";
    var el = document.getElementById("pics");
    pics.appendChild(img);
    foundStatuses[1] = true;
}

// Easter egg 3: Say "Happy Easter to You!"

function sayHappyEaster() {
    speakText("Happy Easter to You!");
    foundStatuses[2] = true;
}

function speakText(textToSay) {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(textToSay);
    synth.speak(utterThis);
}

// Easter egg 4: Make main div rotate 360 degrees

function roll() {
    el = document.getElementById('main');
    el.classList.add('roll');
    setTimeout(removeRoll, 2000);
    foundStatuses[3] = true;
}

function removeRoll() {
    el = document.getElementById('main');
    el.classList.remove('roll');
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
    foundStatuses[4] = true;
}

// Easter egg 6: Make window move from side to side

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
    foundStatuses[5] = true;
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
    setTimeout(removeTap, 2000);
}

function removeTap(){
    el = document.getElementById('main');
    el.style = "";
}

// Easter egg 7: Make image fall

function fall() {
    el = document.getElementById('fall');
    el.classList.add('fall');
    setTimeout(removeFaller, 2000);
    foundStatuses[6] = true;
}

function removeFaller(){
    el = document.getElementById('fall');
    el.remove();
}

// Progress display

const easterEggNames = [
    'Easter party in the address bar!',
    'Hidden eggs',
    "Look who's talking!",
    'Barrel roll',
    'Colour me surprised!',
    'Tap dat',
    "Humpty's great fall"
]


function alertProgress(){
    let numFound = foundStatuses.filter(x => x).length;
    let alertString = "";
    if (numFound >= 7){
        alertString += "You found all 7 Easter Eggs! Nice one!\r\n\r\n";
    } else{
        alertString += `${numFound}/7 Easter Eggs found so far.\r\n\r\n`;
    }
    for (let i=0; i<foundStatuses.length; i++){
        if (foundStatuses[i]){
            alertString += `${i + 1}: ${easterEggNames[i]}\r\n`;
        } else{
            alertString += `${i + 1}: ??????????\r\n`;
        }
    }
    window.alert(alertString);
}