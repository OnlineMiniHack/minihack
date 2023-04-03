var myGamePiece;
var leaves;
var clicked;
var input;
var time;

function startGame() {
    clicked = false;
    myGameArea.start();
    myGamePiece = new component(300, 75, "train_blue.png", 0, 50, "image");
    leaves = new component(100, 100, "leaves.png", 200, 50, "image");
    input = document.getElementById("stationOptions").value;
    if (input == "MAN") {
        time = "2h 10min"
    }
    else if (input == "EUS") {
        time = "2h 10min"
    }
    else if (input == "BNS") {
        time = "1h 30min"
    }
    document.getElementById("time").innerText = "Time to destination: " + time;
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 1600;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

function updateGameArea() {
    console.log(clicked);
    myGameArea.clear();
    myGamePiece.x += 1;
    myGamePiece.update();
    
    if (myGamePiece.x >= 300 && clicked == false){
        leaves.x = 1000;
        leaves.update();
    }
    if (myGamePiece.x < 300) {
        clicked = false;
    }
    if (myGamePiece.x >= 700 && clicked == false){
        console.log(input);
        if (input == "MAN") {
            time = "2h 20min"
        }
        else if (input == "EUS") {
            time = "2h 20min"
        }
        else if (input == "BNS") {
            time = "1h 40min"
        }
        document.getElementById("time").innerText = "Time to destination: " + time;
    }
    
}