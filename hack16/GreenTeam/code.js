var bidders = [ { id:0, address: "www.gov.uk", country: "United Kingdom", xpos: 70, ypos:21},
                { id:1, address: "www.gov.cn", country: "China", xpos: 122, ypos:33},
                { id:2, address: "www.usa.gov", country: "United States", xpos: 33, ypos:29},
                { id:3, address: "www.bundesregierung.de", country: "Germany", xpos: 75, ypos: 21},
                { id:4, address: "korea-dpr.com", country: "North Korea", xpos: 130, ypos: 28},
                { id:5, address: "www.gov.co", country: "Columbia", xpos: 32, ypos:48},
                { id:6, address: "www.gov.za", country: "South Africa", xpos: 82, ypos: 70}
             ]

var oldel = null;
var scale = 1;
var maxBid = 1;
var winner = null;

async function lookupIp(address) {
    var response = await fetch('https://dns.google/resolve?name='+address);
    var json = await response.json();
    var last = json.Answer[json.Answer.length-1];
    var ip = last.data;
    return ip;    
}

function addToMap(bidder) {
    const mapEl = document.getElementById("map");
    const mapEntry = document.createElement("div");
    mapEntry.classList.add("bidder");
    mapEntry.style.top=(bidder.ypos * scale)+"vh";
    mapEntry.style.left=(bidder.xpos * scale)+"vh";
    mapEntry.id="bidder"+bidder.id;
    mapEl.append(mapEntry);
}

function start() {
    bidders.forEach((bidder) => {
        lookupIp(bidder.address).then(ip => { 
            var io1 = ip.indexOf('.');
            var io2 = ip.indexOf('.', io1+1);
            bidder.ip=ip.substring(0,io1);
            bidder.increase=ip.substring(io1+1,io2);
        });
    });

    bidders.forEach((bidder) => {
        addToMap(bidder);
        bidder.currentBid=0.0;
    });

    console.log(bidders);
}

function clickHandler(event) {
    const x = Math.round(100 * event.clientX / window.innerHeight - 0.5, 0);
    const y = Math.round(100 * event.clientY / window.innerHeight - 0.5, 0);
    bidders.forEach((bidder) => {
        if(x>=bidder.xpos-2 && x<=bidder.xpos+2 && y>=bidder.ypos-1 && y<=bidder.ypos+3) {
            if(bidder.ip > 0) {
                var extra = bidder.increase / 1000.0;
                maxBid = Math.round((maxBid * 1.02 + extra)*1000)/1000;
                bidder.ip = bidder.ip - 10;
                bidder.currentBid = maxBid;
                createBidMessage(bidder.country, bidder.currentBid, "We'd like to bid");
                console.log(bidder.country+" "+bidder.currentBid);
            }
            else {
                createBidMessage(bidder.country, 0, "We're no longer interested");
                console.log(bidder.country+" is out");
                document.getElementById("bidder" + bidder.id).remove();
            }
        }
    })
    console.log(x+","+y);
}

function handleClick() {
    document.addEventListener('click', clickHandler);
}

handleClick();