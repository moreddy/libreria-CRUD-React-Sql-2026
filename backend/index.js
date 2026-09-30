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


// presentiamo la pagina principale con un messaggio di benvenuto
app.get("/", (req, res) => {
  res.json("Benvenuto nella libreria CRUD!");
});

//recuperiamo tutti i libri presenti nel database
app.get("/books", (req, res) => {
  const sql = "SELECT * FROM books";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error retrieving books:", err);
      res.status(500).json({ error: "Error retrieving books" });
      return;
    }
    res.json(results);
  });
});