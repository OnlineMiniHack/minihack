let board = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]

function drop(col, player) {
    var tb = document.getElementById("board");
    
    var lastRow = 0;
    for(var r=0; r<6; r++){
        if(board[r][col]==0){
            lastRow = r;
        }
    }

    board[lastRow][col]=player;
    var cell = tb.rows[lastRow].cells[col];

    cell.innerHTML = "<div class='token"+player+"'></div>";
}

function check() {
    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 7; col++) {
            for (var p = 1; p <= 2; p++) {
                if(count(p,row, col, 1, 0) ||
                    count(p,row, col, 1, 1) ||
                    count(p,row, col, 0, 1)) {
                        winner(p);
                    }
                }
            }
        }
    }


function count(p, r, c, dr, dc) {
    var t = 0;
    for(var i = 0; i<4; i++) {
        if(board[r][c]==p) {
            t++;
        }
        r+=dr;
        c+=dc;
        if (t==4) return true;
        if (r>5 || c>6) return false;
    }
    return t==4;
}

function play(col) {
    if(col > 0 && board[0][col-1]==0) {
        drop(col-1, 1);
        computer();
        check();
    }
    
}

function computer() {
    var col = 0;
    do {
        col = Math.floor(Math.random()*7);
    }
    while (board[0][col] != 0);

    drop(col, 2);
}

function winner(p) {
    var el = document.getElementById("win");
    if(p==1) {
       el.innerText = "You win!";
    }
    else {
        el.innerText = "You lose!";
    }
}