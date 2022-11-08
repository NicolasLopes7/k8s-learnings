require('dotenv').config();
const express = require('express');

const app = express();

const startedAt = new Date().getTime();

app.use(express.json());

app.get('/', (_, res) =>
  res.send(`<h1>Running ${process.env.ENV_TO_TEST_CONFIG_FILES}</h1>`)
);
 
app.get('/secret', (_, res) => res.send(`<h1>${process.env.SECRET}</h1>`));

app.get('/health', (_, res) => {
  const now = new Date().getTime();

  const timeAlive = (now - startedAt) / 1000;

  if (timeAlive > 15) return res.sendStatus(200);
  return res.sendStatus(500);
});
app.listen(80);
