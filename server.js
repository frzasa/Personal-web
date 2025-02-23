const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "hbs");

app.use(express.static("assets"));

// HALAMAN HOME
app.get("/", (req, res) => {
  // res.send("Hello express! Ini halaman utama");
  res.render("index"); // res.render untuk membuka halaman
});

app.get("/project", (req, res) => {
  // res.send("Hello express! Ini halaman utama");
  res.render("project"); // res.render untuk membuka halaman
});

app.get("/testimonials", (req, res) => {
  // res.send("Hello express! Ini halaman utama");
  res.render("testimonials"); // res.render untuk membuka halaman
});

app.get("/contact", (req, res) => {
  // res.send("Hello express! Ini halaman utama");
  res.render("contact"); // res.render untuk membuka halaman
});

app.get("/project-detail", (req, res) => {
  // res.send("Hello express! Ini halaman utama");
  res.render("project-detail"); // res.render untuk membuka halaman
});

// REQUEST PARAMS
app.get("/about/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Halo! ini halaman tentang ${id}`);
});

// REQUEST QUERY
app.get("/blog", (req, res) => {
  const { title, author, year } = req.query;
  res.send(`ini halaman blog ${title} dengan author ${author} tahun ${year}`);
});

app.listen(port, () => {
  console.log(`My personal web app listening on port ${port}`);
});