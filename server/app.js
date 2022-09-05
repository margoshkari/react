const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({ ans: "GeeksforGeeks" });
});

app.listen(port, () => {
  console.log(`Start server ${port}`);
});
