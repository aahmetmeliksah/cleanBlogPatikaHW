const express = require("express"); // imported express
const app = express(); // assigned express func to app constant

// created an object
const blog = {
  id: 1,
  title: "Blog title",
  description: "Blog description",
};

// When root URL is entered, it sends response of blog object
app.get("/", (req, res) => {
  res.send(blog);
});

// Lisntens to the port at 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started working at port ${PORT}`);
});
