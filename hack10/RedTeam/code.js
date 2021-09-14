var currentSize = 20;
var eaten = 0;

function setPos(size) {
    for(let i=0; i<10; i++) {
        let el = document.getElementById("part"+i);
        el.style.left=size*i;
        el.style.width=size*1.1;
        el.style.height=size*2;
    }
}

function increaseSize() {
    currentSize += 5;
    setPos(currentSize);
}

function eat(t) {
    let el = document.getElementById(t+"hole");
    el.style.display="block";
    increaseSize();
    eaten += 1;
    if(eaten == 15) {
        let ele = document.getElementById("eating");
        ele.style.display="none";
        let elc = document.getElementById("finish");
        elc.style.display="block";
    }
}