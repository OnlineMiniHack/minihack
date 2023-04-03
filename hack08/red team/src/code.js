var man_eus = 2*60+10;
var man_bns = 1*60+30;
var eus_man = 2*60+10;
var eus_bns = 1*60+40;
var bns_man = 1*60+30;
var bns_eus = 1*60+40;

var man_next = 0;
var eus_next = 0;
var bns_next = 0;

// man - 0 eus, 1 bns
// eus - 0 man, 1 bns
// bns - 0 man, 1 eus

var man_loc = { top: 500, left: 100 };
var eus_loc = { top: 600, left: 700 };
var bns_loc = { top: 900, left: 200 };

 
var traffic = [
    {
        departs: 'MAN',
        departsTime: 100,
        destination: 'BNS',
        destinationTime: 1*60+30,
        start: man_loc,
        end: bns_loc
    },
    {
        departs: 'MAN',
        departsTime: 130,
        destination: 'EUS',
        destinationTime: 2*60+10,
        start: man_loc,
        end: eus_loc
    },
    {
        departs: 'EUS',
        departsTime: 100,
        destination: 'BNS',
        destinationTime: 1*60+40,
        start: eus_loc,
        end: bns_loc
    },
    {
        departs: 'EUS',
        departsTime: 130,
        destination: 'MAN',
        destinationTime: 2*60+10,
        start: eus_loc,
        end: man_loc
    },
    {
        departs: 'BNS',
        departsTime: 100,
        destination: 'MAN',
        destinationTime: 1*60+30,
        start: bns_loc,
        end: man_loc
    },
    {
        departs: 'BNS',
        departsTime: 130,
        destination: 'EUS',
        destinationTime: 1*60+40,
        start: bns_loc,
        end: eus_loc
    }
];

function GetNextDept(currentTime, station)
{
    var results =  traffic.filter((item=>
        item.departsTime > currentTime &&
        item.departs == station
        )).sort((item)=>item.time);

    if(results.length > 0)
    {
        var d = new Date();
        d.setMinutes(results[0].destinationTime);

       return results[0].destination + " at " + d.toLocaleTimeString();
    }else{
        return null;
    }
}


function GetNextArrival(currentTime, station)
{
    var results =  traffic.filter((item=>
        (item.departsTime + item.destinationTime)  > currentTime &&
        item.destination == station
        )).sort((item)=>item.time);

    if(results.length > 0)
    {
       var d = new Date();
       d.setMinutes(results[0].departsTime + results[0].destinationTime);
       return results[0].departs + " at " + d.toLocaleTimeString();
    }else{
        return null;
    }
}

var trains = [];

function AddTrain(journey) {
    var img = document.createElement('img');
    img.src = "images/train.png";
    img.classList.add('train'); 
    img.classList.add()
    document.body.append(img);
    img.style.top = journey.start.top;
    img.style.left = journey.start.left;

    var dy = (journey.end.top-journey.start.top)/journey.destinationTime;
    var dx = (journey.end.left-journey.start.left)/journey.destinationTime;    

    trains.push( { element: img, dx: dx, dy: dy, time: journey.destinationTime });
}

function Move(el, dx, dy) {
    el.style.top = el.style.top + dy;
    el.style.left = el.style.left + dx;
}

function MoveTrains() {
    
    trains.forEach(train => {
                
        train.element.style.top = train.element.y + train.dy;
        train.element.style.left = train.element.x + train.dx;

        train.time = train.time - 1;
        if(train.time <= 0) {
            train.element.remove();
        }
    }) 

    trains = trains.filter(train => train.time > 0);
     
}

