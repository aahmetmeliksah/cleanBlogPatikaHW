// import mongoose => ES6 style => import mongoose from "mongoose"
const mongoose = require("mongoose");

// connect/create to a database

mongoose.connect("mongodb://localhost/cleanblog-test-db");

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
const Post = mongoose.model("Post", CleanBlogSchema);

// create a blogpost document
// BlogPost.create({
//   title: "Post 1",
//   summary: "Summary 1",
//   content: "Content 1 ",
// });

module.exports = Post;
