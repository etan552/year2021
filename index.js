const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "client", "/")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
