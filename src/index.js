const express = require("express");

const app = express();

app.get("/courses", (req, res) => {
  return res.json(["curso 1", "curso 2", "curso 3"]);
});

app.post("/courses", (req, res) => {
  return res.json(["curso 1", "curso 2", "curso 3", "curso 4"]);
});

// /:id -> é o paramentro que a funçao vai receber
app.put("/courses/:id", (req, res) => {
  return res.json(["curso 6", "curso 2", "curso 3", "curso 4"]);
});

app.patch("/courses/:id", (req, res) => {
  return res.json(["curso 6", "curso 7", "curso 3", "curso 4"]);
});

app.delete("/courses/:id", (req, res) => {
  return res.json(["curso 6", "curso 7", "curso 3"]);
});

//chamado para estartar a aplicacao do express
app.listen(3000);
