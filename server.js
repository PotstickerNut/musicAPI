const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send(<h1>This is my music app.</h1><br /> <nav><a href="/music">Music</a><a href="/login"></a></nav>)
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
