require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '/../public/doge2048')));

// init server
const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
