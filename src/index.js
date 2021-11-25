require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

// not sure if this cache helps.
const setCache = function (req, res, next) {
  const period = 60 * 5;

  if (req.method === 'GET') {
    res.set('Cache-control', `public, max-age=${period}`);
  } else {
    res.set('Cache-control', `no-store`);
  }

  next();
};

app.use(setCache);

app.use('/', express.static(path.join(__dirname, '/../public/doge2048')));

// init server
const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
