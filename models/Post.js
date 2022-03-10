// import mongoose => ES6 style => import mongoose from "mongoose"
const mongoose = require("mongoose");

// connect/create to a database

mongoose.connect("mongodb://localhost/cleanblog-test-db");

// mongoose
//   .connect("mongodb://localhost:3000/cleanblog-test-db")
//   .then(() => console.log("CONNECTED").catch((err) => console.log(err)));

// create a new schema
const CleanBlogSchema = new mongoose.Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

// compile the schema into a model
const BlogPost = mongoose.model("BlogPost", CleanBlogSchema);

// create a blogpost document
BlogPost.create({
  title: "Post 1",
  summary: "Summary 1",
  content: "Content 1 ",
});

module.exports = BlogPost;
