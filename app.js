const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  let date = addDays(new Date(2021, 12, 25), 100);
  response.send(
    `${date.getDate() - 1}/${date.getMonth()}/${date.getFullYear()}`
  );
});

app.listen(3000);

module.exports = app;
