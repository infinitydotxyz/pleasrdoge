require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

app.use("/", express.static(__dirname + "/../public/doge2048"));

// init server
const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
