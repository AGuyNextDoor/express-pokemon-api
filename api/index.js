const express = require("express");
const app = express();
const data = require("../data.json")

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/data", (req, res) => {
  console.log({data});
  res.send(data)
})

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
