const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();
require('./services/index.js')

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`Listening on port ${port} and reads from dotenv ${process.env.TEST_VALUE}`));
