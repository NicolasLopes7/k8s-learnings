require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (_, res) =>
  res.send(`<h1>Running ${process.env.ENV_TO_TEST_CONFIG_FILES}</h1>`)
);

app.get('/secret', (_, res) => res.send(`<h1>${process.env.SECRET}</h1>`));

app.listen(80);
