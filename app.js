const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Clean BLOG Project</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started working at port ${PORT}`);
});
