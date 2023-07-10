import express from "express";
import productsDB from "./productsDB.js";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

app.get("/products", (req, res) => {
  //   console.log("productsDB: ", productsDB);
  return res.json(productsDB);
});

app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const selection = productsDB.filter((any) => any.id === id);
  return res.json(selection);
});

app.get("/products/search/:title", (req, res) => {
  const title = req.params.title;
  const selection = productsDB.filter((any) => any.title === title);
  return res.json(selection);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
