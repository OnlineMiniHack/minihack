import { QAClient } from "question-answering"; // When using Typescript or Babel
// const { QAClient } = require("question-answering"); // When using vanilla JS
import express from 'express'
import fs from 'fs'
import cors from 'cors'

var app = express()

app.use(cors())
const text = fs.readFileSync("brain.txt", 'utf8')
const port = 8080

async function run() {

  
  const question = "How much jockeys should be paid?";
  
  const qaClient = await QAClient.fromOptions();
  const answer = await qaClient.predict(question, text);
  
  return answer
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/playit', async (req, res) => {
  console.log(req.query)
  var ans = req.query.done.replace(/@@/g, ". ")
  console.log(ans)
  let data = ". So, jockeys are better for us and jockeys should be paid more."
  fs.writeFileSync("brain.txt", ans)
  fs.appendFileSync("brain.txt", data)
  res.send(await run())
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

