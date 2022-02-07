const express = require("express"); // imported express
const ejs = require("ejs");
const app = express(); // assigned express func to app constant

app.set("view engine", "ejs"); // set engine as ejs that looks at view folder
app.use(express.static("public")); // look at public folder for static parts of the webapp

// When root URL is entered, it sends response of blog object
app.get("/", (req, res) => {
  res.render("index");
});

// Lisntens to the port at 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started working at port ${PORT}`);
});
