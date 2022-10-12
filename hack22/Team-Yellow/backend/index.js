const express = require('express')
const app = express()
var cors = require('cors')
const port = 3031

app.use(cors())

var curr_ques = null

var sentences = [
"Cinderella lost her left dash",
"The sparrow flies dash for winter",
"The wheels on the bus go dash",
"Mary had dash little lamb",
"Humpty Dumpty dash off the wall"
]

var answsers = [
"shoe",
"south",
"round",
"a",
"wall"
]


app.get('/question', (req, res) => {
  console.log("starting...")
  var random = Math.floor(Math.random() * 4);
  curr_ques = random
  res.status(200).send(sentences[random] + "&&" + random)
})

app.get('/check_answer', (req, res) => {
  console.log("got answer!")
  // No logic to check answer for now!
  res.status(200).send('you win!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})