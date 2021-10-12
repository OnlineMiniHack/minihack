var day = 1;
var month = 1;
var year = 2021;

function dayClick() {
    day=day+1;
    if(day>31) day=1;
    update();
}

function monthClick() {
    month=month+1;
    if(month>12) month=1;
    update();
}

function yearClick() {
    year=year+1;
    if(year>2025) year=2025;
    update();
}

function update() {
    var eld = document.getElementById("day");
    eld.innerText=day;
    var elm = document.getElementById("month");
    elm.innerText=months[month];
    var ely= document.getElementById("year");
    ely.innerText=year;
}

// availability API -- use GET, returns json true, false, or 500 error (the 'crash')
// https://minihackspace.azurewebsites.net/availability/2021-05-05

// booking API -- use POST, returns json true on valid date, or 500 error if invalid date
// https://minihackspace.azurewebsites.net/booking/2021-05-05

function padToTwo(number) {
    if (number<10) return "0"+number;
    return number;
  }

function getDate() {
    const i_dont_trust_this = `${year}-${padToTwo(month)}-${padToTwo(day)}`;
    console.log(i_dont_trust_this);
    return i_dont_trust_this;
}

async function checkAvailability() {
    // construct url
        let chosenDate = getDate();
        let url = 'https://minihackspace.azurewebsites.net/availability/' + chosenDate;
        let response = await fetch(url);
        if (response.status == 500) {
            //better to try agin
            throw new Error('500');
        }
        let data = await response.json()
        if (data) {
            alert("available!! 200 other people are also looking at this! book now!");
        }
        return data;
    // fetch 

    // then (or await)

    // json

    // true?

    // catch / error?
}

async function makeBooking() {
    // construct url
    let chosenDate = getDate();
    let url = 'https://minihackspace.azurewebsites.net/booking/' + chosenDate;
}

var months = ["1 based ignore", "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
           "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];


