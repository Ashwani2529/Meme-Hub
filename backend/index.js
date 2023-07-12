const connectToMongo = require("./db.js");
const express = require("express");
var cors = require('cors');
const multer = require('multer');
const { json } = require("react-router-dom");

const app = express();
const port = 5000;

app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${req.user._id}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

connectToMongo();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/upload', upload.single('description'), function (req, res){
  console.log(req.file,req.body);
  return res.redirect("/home");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Prashant Chutiya");
});

app.listen(port, () => {
  console.log(`${port}`);
});
