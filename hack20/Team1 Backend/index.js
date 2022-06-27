const {parse} = require('csv-parse');
const fs = require("fs")

let data = []
let stream = fs.createReadStream("./form.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    data.push(row);
})
stream.on('close', () => {
  // console.log(data)
  // console.log(getDistinctValue(data))
  console.log(getWhoWillWinOnWhatGround())
  // whichWillWin("Firm")
})
let horses = []
let meeting_name = []
let meeting_time = []
let wearing_blinkers = []
let place  = []
let going  = []

function getDistinctValue(data) {
  for (let index = 0; index < data.length; index++) {
    for (let _index = 0; _index < 6; _index++) {
      switch (_index) {
        case 0:
          if(!horses.includes(data[index][_index])) horses.push(data[index][_index])
          break;
        case 1:
          if(!meeting_name.includes(data[index][_index])) meeting_name.push(data[index][_index])
          break;
        case 2:
          if(!meeting_time.includes(data[index][_index])) meeting_time.push(data[index][_index])
          break;
        case 3:
          if(!wearing_blinkers.includes(data[index][_index])) wearing_blinkers.push(data[index][_index])
          break;
        case 4:
          if(!place.includes(data[index][_index])) place.push(data[index][_index])
          break;
        case 5:
          if(!going.includes(data[index][_index])) going.push(data[index][_index])
          break;
      }
    }
  }
  return {
    horses: horses,
    meeting_name: meeting_name,
    meeting_time: meeting_time,
    wearing_blinkers: wearing_blinkers,
    place: place,
    going: going
  }
}

var top_6_on_each_ground = []

var on_1st_place_ground = []
var on_2nd_place_ground = []
var on_3rd_place_ground = []
var on_4th_place_ground = []
var on_5th_place_ground = []
var on_6th_place_ground = []

var at1 = []
var at2 = []
var at3 = []
var at4 = []
var at5 = []
var at6 = []

function getWhoWillWinOnWhatGround() {
  for (let index = 0; index < data.length; index++) {
    for (let __index = 0; __index < 6; __index++) {
      if(data[index][4] < 7) {
        top_6_on_each_ground.push({place: data[index][4], ground: data[index][5], horse: data[index][0]})
      }
    }
  }
  // console.log(top_6_on_each_ground)
  for (let index = 0; index < top_6_on_each_ground.length; index++) {
    let element = top_6_on_each_ground[index]
    if(element.place == 1)  on_1st_place_ground.push({horse: element.horse, ground: element.ground})
    if(element.place == 2)  on_2nd_place_ground.push({horse: element.horse, ground: element.ground})
    if(element.place == 3)  on_3rd_place_ground.push({horse: element.horse, ground: element.ground})
    if(element.place == 4)  on_4th_place_ground.push({horse: element.horse, ground: element.ground})
    if(element.place == 5)  on_5th_place_ground.push({horse: element.horse, ground: element.ground})
    if(element.place == 6)  on_6th_place_ground.push({horse: element.horse, ground: element.ground})
  }

  console.log(on_1st_place_ground)
  console.log(on_2nd_place_ground)
  console.log(on_3rd_place_ground)
  console.log(on_4th_place_ground)
  console.log(on_5th_place_ground)
  console.log(on_6th_place_ground)
}

// function whichWillWin(ground) {
//   if(ground == "Firm") {
//     for (let index = 0; index < on_1st_place_ground.length; index++) {
//       const element = array[index];
      
//     }
//   }
// }