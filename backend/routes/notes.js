const express = require("express");
const app = express();
var cors = require("cors");
const router = express.Router();
app.use(express.json({ limit: "25mb" }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const { body, validationResult } = require("express-validator");
const Note = require("../models/Note");
const fetchUser = require("../middleware/fetchUser");
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});
router.get("/fetcheverything", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.post(
  "/addnote",
  fetchUser,
  [
    body("title").isLength({ min: 3 }),
    body("tag").isLength({ min: 1 }),
    body("description").isLength({ min: 1 }),
  ],
  async (req, res) => {
    try {
      const { title, tag, description } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        tag,
        description,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// router.put("/updatenote/:id", fetchUser, async (req, res) => {
//   const { title,tag,description } = req.body;
//   const newNote = {};
//   if (title) {
//     newNote.title = title;
//   }
//   if (tag) {
//     newNote.tag = tag;
//   }
//   if (description) {
//     newNote.description = description;
//   }

//   try {
//     let note = await Note.findById(req.params.id);
//     if (!note) {
//       return res.status(404).send("Note not found");
//     }
//     if (note.user.toString() !== req.user.id) {
//       return res.status(401).send("Access denied");
//     }
//     note = await Note.findByIdAndUpdate(
//       req.params.id,
//       { $set: newNote },
//       { new: true }
//     );
//     res.json({ note });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server error");
//   }
// });

router.put("/updatenote/:id", fetchUser, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Note not found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Access denied");
    }
    if (req.body.etitle) {
      note.title = req.body.etitle;
    }
    if (req.body.etag) {
      note.tag = req.body.etag;
    }
    if (req.files && req.files.edescription) {
      const edescription = req.files.edescription;
      const uniqueFileName = `${Date.now()}-${edescription.name}`;
      note.description = uniqueFileName;
    }

    await note.save();
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

router.delete("/deletenote/:id", fetchUser, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Note not found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Access denied");
    }
    await Note.findByIdAndDelete(req.params.id);
    res.json({ msg: "Note Deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
