require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

// init server
const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

app.get("/", async (req, res) => {
  res.send('hi');
});
