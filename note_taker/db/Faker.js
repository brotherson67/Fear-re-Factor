// import faker to create fake data
const { faker } = require("@faker-js/faker");
// import fs to write to file
const fs = require("fs");
// import path to define file
const path = require("path");

// import fake db data array
let { notes } = require("./db.json");

console.log(typeof notes);

function createFakes() {
  let fakeTitle = faker.lorem.word();
  let fakeText = faker.lorem.paragraph();
  newData = {
    title: fakeTitle,
    text: fakeText,
  };
  return newData;
}

function pushFilesTogether(dbFileArray) {
  // define local array instance
  let data = dbFileArray;

  for (let i = 0; i < 5; i++) {
    data.push(createFakes());
  }
  console.log(data);
  return data;
}

// Create function to push new data to file
// pass through datafile name and the newDataArray
function pushNewArray() {
  const test = pushFilesTogether(notes);
  // syncronously write code to the file
  fs.writeFileSync(
    path.join(__dirname, "./db.json"),
    JSON.stringify({ notes: test }, null, 2)
  );
}

pushNewArray();

// createFakes(db, noteInformation);
