var map = new Array(10);
map[0] =  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
map[1] =  "X   X                        X";
map[2] =  "X XXXXXX XXXXXXXXX XXXXXXXXX X";
map[3] =  "X X      X                 X X";
map[4] =  "X      XXX  XXXXXXXXXXXX   X X";
map[5] =  "XXX XXXXXXX        X   XXX X X";
map[6] =  "X X       XXXXXXXX X X X   X X";
map[7] =  "X XXXXXX  X      X X X X XXX X";
map[8] =  "X         X XXXXXX X X X   X X";
map[9] =  "XXXXXXXXX X X      X X XXX X X";
map[10] = "X      X  X    X     X     X X";
map[11] = "X   X     X XXXXXX XXXXXXXXX X";
map[12] = "X XXXXXXXXX            X   X X";
map[13] = "X X    X      XXXXXX XXX X X X";
map[14] = "X      X   X       X     X X X";
map[15] = "X X XXXX XXXXXXXX  XXXXXXX X X";
map[16] = "X X                X       X X";
map[17] = "X XXXXXX XXXXXXXXXXX XXXXXXX X";
map[18] = "X      X                   X X";
map[19] = "XXXXXX XXXXXXXXXXXXXXXXXXX X X";
map[20] = "X      X       X   X       X X";
map[21] = "X   X     X XXXXXX X XXXXX X X";
map[22] = "X XXXXXXXXX        X X   X X X";
map[23] = "X X    X      XXXXXX X X X X X";
map[24] = "X      X   X       X   X   X X";
map[25] = "XXX XXXX XXXXXXXX  X XXXXXXX X";
map[26] = "X X                X         X";
map[27] = "X XXXXXX XXXXXXXXXXXXXX XXXXXX";
map[28] = "X                            X";
map[29] = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
var eaten = 0;

// blue team

var maxx = map[0].length;
var maxy = map.length;

var vh = 100 / maxy;

var currentX = 1;
var currentY = 1;

var oldel = null;

function distances() {
    const queue = [];
    const dist = [];

    for (let y = 0; y < map.length; y++) {
        dist[y] = [];
        for (let x = 0; x < map[y].length; x++) { dist[y][x] = 0; }
    }

    queue.push({ x: currentX, y: currentY, d: 1 });

    while (queue.length > 0) {
        const p = queue.shift();

        const a = map[p.y][p.x];
        let cost = 1;
        if (a != " ") cost = 1000;

        let d = dist[p.y][p.x];
        if (d == 0 || p.d + cost < d) {
            dist[p.y][p.x] = p.d + cost;
            d = dist[p.y][p.x];


            if (cost < 1000) {
                queue.push({ x: p.x - 1, y: p.y, d: d });
                queue.push({ x: p.x + 1, y: p.y, d: d });
                queue.push({ x: p.x, y: p.y - 1, d: d });
                queue.push({ x: p.x, y: p.y + 1, d: d });
            }
        }
    }

    const mapEl = document.getElementById("map");

    let posx = map[0].length - 2;
    let posy = map.length - 2;
    var currentD = dist[posy][posx];
    let lastx = posx;
    let lasty = posy;

    while (posx != currentX || posy != currentY) {
        lastx = posx;
        lasty = posy;
        if (dist[posy][posx - 1] < currentD) {
            currentD = dist[posy][posx - 1];
            posx--;
        }
        else if (dist[posy][posx + 1] < currentD) {
            currentD = dist[posy][posx + 1];
            posx++;
        }
        else if (dist[posy - 1][posx] < currentD) {
            currentD = dist[posy - 1][posx];
            posy--;
        }
        else if (dist[posy + 1][posx] < currentD) {
            currentD = dist[posy + 1][posx];
            posy++;
        }
        if (posx == lastx && posy == lasty) {
            return;
        }
    }

    currentX = lastx;
    currentY = lasty;

    const mapBlock = document.getElementById("vehicle");
    mapBlock.style.top = (currentY * vh) + "vh";
    mapBlock.style.left = (currentX * vh) + "vh";
}

function plotMap() {
    const mapEl = document.getElementById("map");

    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] != " ") {
                const mapBlock = document.createElement("div");
                mapBlock.classList.add("mapBlock");
                mapBlock.style.top = (y * vh) + "vh";
                mapBlock.style.left = (x * vh) + "vh";
                mapBlock.style.width = (1 * vh) + "vh";
                mapBlock.style.height = (1 * vh) + "vh";
                if (map[y][x] == ".") {
                    mapBlock.style.backgroundColor = "blue";
                }
                mapEl.append(mapBlock);
            }
        }
    }

    const mapBlock = document.createElement("div");
    mapBlock.id = "vehicle";
    mapBlock.classList.add("vehicle");
    mapBlock.style.top = (currentY * vh) + "vh";
    mapBlock.style.left = (currentX * vh) + "vh";
    mapBlock.style.width = (1 * vh) + "vh";
    mapBlock.style.height = (1 * vh) + "vh";
    mapEl.append(mapBlock);
}
