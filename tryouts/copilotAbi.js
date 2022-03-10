/* This code is not related to this repository. I had an error, so I wrote this code from scratch to see what I was doing in my models/Post.js */

// import mongoose
const mongoose = require("mongoose");

// connect to mongoose
mongoose.connect("mongodb://localhost/playground");

// create a schema
const courseSchema = new mongoose.Schema({
  name: String,
  content: String,
});

// create a model
const Course = mongoose.model("Course", courseSchema);

// create a document
const course = new Course({
  name: "Node.js",
  content:
    "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
});

// save the document
course.save();

// export the model
module.exports = Course;
