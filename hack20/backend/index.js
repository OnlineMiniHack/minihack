import * as express from 'express';
import * as fs  from 'fs';

const bodyParser = require('body-parser');
const csv = require('csv-parser');

const app = express();
app.use(bodyParser.json());


const results = [];

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });


// app.get(‘/api/races', (req, res) => {
//     res.statusCode = 200;
//     res.send('Testing ...');
//     res.end();
// });

// app.get(‘/api/results/:id', (req, res) => {
//     const id = req.params.id;

//     res.statusCode = 200;
//     res.send('Testing ...');
//     res.end();
// });
