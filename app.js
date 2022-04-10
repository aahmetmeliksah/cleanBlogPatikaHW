const express = require("express"); // imported express
const ejs = require("ejs");
const app = express(); // assigned express func to app constant
const Post = require("./models/Post");
const methodOverride = require("method-override");

// ENGINE SET
app.set("view engine", "ejs"); // set engine as ejs that looks at view folder
// ejs goes through views folder and looks for ejs files
//
//
// MIDDLEWARES
app.use(express.static("public")); // look at public folder for static parts of the webapp
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

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

// EDIT POST ROUTE
app.get("/posts/edit/:id", async (req, res) => {
  const post = Post.findOne({ _id: req.params.id });

  res.render("edit", {
    post,
  });
});

// UPDATE POST
app.put("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });

    post.title = req.body.title;
    post.detail = req.body.detail;
    post.save();

    res.redirect(`/posts/${req.params.id}`);
  } catch (error) {
    res.send(error.message);
  }
});

// get id info
app.get("/posts/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", {
    post,
  });
});

// post blog details via post
app.post("/", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

// delete post
app.delete("/photos/:id", async (req, res) => {
  await Post.findByIdAndRemove(req.params.id);

  res.redirect("/");
});

// LISTEN PORT
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started working at port ${PORT}`);
});
