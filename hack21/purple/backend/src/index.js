import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const STARTING_SALARY = 1000;

const salaries = new Array(5).fill(STARTING_SALARY);

let salary = STARTING_SALARY;

const writeSalariesAtBoot = () => {
  for (let i = 0; i < salaries.length; i++) {
    writeSalary(i, salaries[i]);
  }
};

const writeSalary = (filename, salary) => {
  fs.writeFile(`./out/${filename}`, `${salary}`, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

app.get('/salary/:phase', (req, res) => {
  try {
    var { phase } = req.params;
  } catch {
    res.json({
      status: 'error',
      reason: 'phase not found',
    });
    return;
  }

  const salary = salaries[phase];

  if (!salary) {
    res.json({
      status: 'error',
      reason: `salary lookup failed for phase ${phase}`,
      salaries: JSON.stringify(salaries),
    });

    return;
  }

  res.json({
    salary,
    phase,
  });
});

app.post('/salary', (req, res) => {
  try {
    var { salary, phase } = req.body;
  } catch (error) {
    res.json({
      status: 'error',
      error,
    });

    return;
  }

  salaries[phase] = salary;

  writeSalary(phase, salaries[phase]);

  res.json({
    status: 'success',
    salary,
    phase,
  });
});

app.listen(3000, () => {
  console.log('The application is listening on port 3000!');
  writeSalariesAtBoot();
});
