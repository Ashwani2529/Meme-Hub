const connectToMongo = require("./db.js");
const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json({ limit: "25mb" }));
connectToMongo();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Prashant Chutiya");
});

app.listen(port, () => {
  console.log(`${port}`);
});
