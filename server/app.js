const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const Person = require("./personModule.js");

app.get(`/people`, (req, res) => {
  console.log("ssss");
  res.json({ people: Person.GetPeople() });
});

app.listen(port, () => {
  console.log(`Start server ${port}`);
});
