const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req body

//Routes
//create a todo

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
  } catch (err) {
    console.log(err);
  }
});

//get all todo

//get a todo

//update a todo

//delete a todo

app.listen(3005, () => {
  console.log("server has started on port 3005");
});
