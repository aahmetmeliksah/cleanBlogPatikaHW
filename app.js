const express = require("express"); // imported express
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express(); // assigned express func to app constant
const Post = require("./models/Post");

// ENGINE SET
app.set("view engine", "ejs"); // set engine as ejs that looks at view folder

// MIDDLEWARES
app.use(express.static("public")); // look at public folder for static parts of the webapp
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.render("index", {
    posts,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

app.post("/", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

// LISTEN PORT
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started working at port ${PORT}`);
});
