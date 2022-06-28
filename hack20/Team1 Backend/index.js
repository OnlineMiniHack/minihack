const {parse} = require('csv-parse');
const fs = require("fs")

const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let data = []
let all_grounds = []
let stream = fs.createReadStream("./form.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    data.push(row);
})
stream.on('close', () => {
  // console.log(data)
  // console.log(getDistinctValue(data))
  // console.log(getWhoWillWinOnWhatGround())
  // horseMightWin("firm", 6)
  all_grounds = [...new Set(data.map(item => item[5]))]
  console.log("Finished...")
})
// let horses = []
// let meeting_name = []
// let meeting_time = []
// let wearing_blinkers = []
// let place  = []
// let going  = []

// function getDistinctValue(data) {
//   for (let index = 0; index < data.length; index++) {
//     for (let _index = 0; _index < 6; _index++) {
//       switch (_index) {
//         case 0:
//           if(!horses.includes(data[index][_index])) horses.push(data[index][_index])
//           break;
//         case 1:
//           if(!meeting_name.includes(data[index][_index])) meeting_name.push(data[index][_index])
//           break;
//         case 2:
//           if(!meeting_time.includes(data[index][_index])) meeting_time.push(data[index][_index])
//           break;
//         case 3:
//           if(!wearing_blinkers.includes(data[index][_index])) wearing_blinkers.push(data[index][_index])
//           break;
//         case 4:
//           if(!place.includes(data[index][_index])) place.push(data[index][_index])
//           break;
//         case 5:
//           if(!going.includes(data[index][_index])) going.push(data[index][_index])
//           break;
//       }
//     }
//   }
//   return {
//     horses: horses,
//     meeting_name: meeting_name,
//     meeting_time: meeting_time,
//     wearing_blinkers: wearing_blinkers,
//     place: place,
//     going: going
//   }
// }

// var top_6_on_each_ground = []

// var on_1st_place_ground = []
// var on_2nd_place_ground = []
// var on_3rd_place_ground = []
// var on_4th_place_ground = []
// var on_5th_place_ground = []
// var on_6th_place_ground = []


// function getHorsePlaceOnGround() {
//   for (let index = 0; index < data.length; index++) {
//     for (let __index = 0; __index < 6; __index++) {
//       if(data[index][4] < 7) {
//         top_6_on_each_ground.push({place: data[index][4], ground: data[index][5], horse: data[index][0]})
//       }
//     }
//   }
//   // console.log(top_6_on_each_ground)
//   for (let index = 0; index < top_6_on_each_ground.length; index++) {
//     let element = top_6_on_each_ground[index]
//     if(element.place == 1)  on_1st_place_ground.push({horse: element.horse, ground: element.ground})
//     if(element.place == 2)  on_2nd_place_ground.push({horse: element.horse, ground: element.ground})
//     if(element.place == 3)  on_3rd_place_ground.push({horse: element.horse, ground: element.ground})
//     if(element.place == 4)  on_4th_place_ground.push({horse: element.horse, ground: element.ground})
//     if(element.place == 5)  on_5th_place_ground.push({horse: element.horse, ground: element.ground})
//     if(element.place == 6)  on_6th_place_ground.push({horse: element.horse, ground: element.ground})
//   }

//   // console.log(on_1st_place_ground)
//   // console.log(on_2nd_place_ground)
//   // console.log(on_3rd_place_ground)
//   // console.log(on_4th_place_ground)
//   // console.log(on_5th_place_ground)
//   // console.log(on_6th_place_ground)
// }

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function horseMightWin(ground, place, da) {
  let all_horses = [...new Set(data.map(item => item[0]))]
  let at_place_on_ground = data.filter(x => x[5] == capitalizeFirstLetter(ground) && (x[4] == place || x[4] == place + 1))
  let winsOfHorses = []
  var horse_most_wins = {horse: null, wins: 0, place: place, ground: ground}
  var _place = 0
  if(place + 1 <= 12) _place = place + 1
  
  for (let index = 0; index < all_horses.length; index++) {
    // Note: Adding randomness here for fun, Otherwise use statistics to see what are the chances of winning with Blinkers on
    // OR: If a horse comes 2nd then when will it comes first ?, etc. ....
    winsOfHorses.push({
      horse: all_horses[index], 
      best_wins: at_place_on_ground.filter(x => x[4] == place).length + parseInt(Math.random() * at_place_on_ground.filter(x => x[3] == "TRUE").length) + parseInt(Math.random() * at_place_on_ground.filter(x => x[4] == _place).length + parseInt(Math.random() * at_place_on_ground.filter(x => x[3] == "TRUE").length)),
    })

    if(winsOfHorses[index].best_wins > horse_most_wins.wins) {
      horse_most_wins.horse = winsOfHorses[index].horse
      horse_most_wins.wins = winsOfHorses[index].best_wins
    }
  }

  
  let new_arr = winsOfHorses
  let horse_place = []
  if(da == "six") {
    for (let index = 0; index < 6; index++) {
     let max_wins =  Math.max(...new_arr.map(x => x.best_wins))
     let _horse = new_arr.filter(x => x.best_wins == max_wins)
     let select_winner = Math.round(Math.random() * (_horse.length - 1))
     horse_place.push({
      place: index+1, 
      horse: _horse[select_winner]["horse"],
      won: max_wins
    })
     new_arr = new_arr.filter(x => x.best_wins < max_wins)
    }
    console.log(horse_place)
    return horse_place
  }
  console.log(horse_most_wins)
  return horse_most_wins
}

app.get('/', (req, res) => {
  // console.log(req.query)
  if(
    all_grounds.includes(capitalizeFirstLetter(req.query.going)) && 
    (req.query.place <= 12 && req.query.place >= 1)
    ) {
    res.send(JSON.stringify(horseMightWin(req.query.going, req.query.place)))
  }

  if(!res.headersSent) {
    res.send("Wrong Parameters!")
  }

})

app.get('/six', (req, res) => {
  // console.log(req.query)
  if(
    all_grounds.includes(capitalizeFirstLetter(req.query.going))
    ) {
    res.send(JSON.stringify(horseMightWin(req.query.going, 1, "six")))
  }

  if(!res.headersSent) {
    res.send("Wrong Parameters!")
  }

})