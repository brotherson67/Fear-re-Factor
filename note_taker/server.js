// create instance of express object
const { urlencoded } = require("body-parser");
const express = require("express");
// create express app instance
const app = express();
// import path to better define the static path
const path = require("path");
// define PORT Server will be mounted on
const PORT = process.env.PORT || 3002;

// Express middleware
// parse incoming array or string data
app.use(express.urlencoded({ extended: true }));
// parse incoming json data
app.use(express.json());
// make the public file statically available
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  //   res.send(index.html);
});

// mount server on PORT
app.listen(PORT, (req, res) => {
  console.log(`The express app is running on server ${PORT}`);
});
