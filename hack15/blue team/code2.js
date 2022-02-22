var ispolice = false;

function clickHandler(event) {
    const x = Math.round(maxy * event.clientX / window.innerHeight - 0.5, 0);
    const y = Math.round(maxy * event.clientY / window.innerHeight - 0.5, 0);
    if (x >= 0 && x < maxx && y >= 0 && y < maxy) {
        var p = map[y][x];
        if (p == " ") {
            map[y] = replaceAt(map[y], x, ".");
            const mapEl = document.getElementById("map");
            police = document.createElement("div");
            police.id = "police" + x + "_" + y;
            police.classList.add("mapBlock");
            police.style.top = (y * vh) + "vh";
            police.style.left = (x * vh) + "vh";
            police.style.width = (1 * vh) + "vh";
            police.style.height = (1 * vh) + "vh";
            police.style.backgroundColor = "blue";
            mapEl.append(police);
        }
        else if (p == ".") {
            document.getElementById("police" + x + "_" + y).remove();
            map[y] = replaceAt(map[y], x, " ");
        }
    }
}

function replaceAt(s, i, repl) {
    return s.substr(0, i) + repl + s.substr(i + 1);
}

function blockit() {
    const mapEl = document.getElementById("map");
    map[15] = "XXX.XXXX XXXXXXXX  X";
    const mapBlock = document.createElement("div");
    mapBlock.classList.add("mapBlock");
    mapBlock.style.top = (15 * vh) + "vh";
    mapBlock.style.left = (3 * vh) + "vh";
    mapBlock.style.width = (1 * vh) + "vh";
    mapBlock.style.height = (1 * vh) + "vh";
    mapBlock.style.backgroundColor = "blue";
    mapEl.append(mapBlock);

}

function keyPressHandler(event) {
    const key = event.key;

    //space pressed
    if (key == 'Shift') {

    }

    //x pressed
    if (key == 'x') {

    }
}

function handleClick() {
    document.addEventListener('click', clickHandler);

    document.addEventListener('keydown', keyPressHandler);
}

handleClick();