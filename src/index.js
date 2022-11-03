const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (_,res) => res.send('<h1>Running</h1>'))

app.listen(80);
