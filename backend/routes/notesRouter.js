const express = require("express");
const router = express.Router();

const {
  showAllNotes,
  showOneNote,
  deleteNote,
  updateNotes,
  createNote,
} = require("./notesController.js");

// Display all notes
router.get("/", showAllNotes);

// Display single note
router.get("/:id", showOneNote);

// Create a new note
router.post("/", createNote);

// Update a note
router.patch("/:id", updateNotes);

// Delete a note
router.delete("/:id", deleteNote);

module.exports = router;
