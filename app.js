const express = require("express"); // imported express
const ejs = require("ejs");
const app = express(); // assigned express func to app constant

// ENGINE SET
app.set("view engine", "ejs"); // set engine as ejs that looks at view folder
app.use(express.static("public")); // look at public folder for static parts of the webapp

// ROUTES
app.get("/", (req, res) => {
  res.render("index");
});

// LISTEN PORT
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started working at port ${PORT}`);
});
