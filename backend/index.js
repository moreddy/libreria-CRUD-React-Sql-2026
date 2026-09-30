import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

import mysql from "mysql2";

//ora mi collego al database con mysql2
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Eruption78",
  database: "test",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("CONNESSO al database MySQL!");
});


//
app.get("/", (req, res) => {
  res.json("Benvenuto nella libreria CRUD!");
});