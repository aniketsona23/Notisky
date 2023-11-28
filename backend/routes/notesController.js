const mongoose = require("mongoose");
const Note = require("../models/notesModel.js");
const { MongoClient } = require("mongodb");

// const client = new MongoClient(process.env.DB_URI);
// const db = client.db("Notes-app");

// const Note = db.collection("Notes");

// To send all Notes
const showAllNotes = async (req, res) => {
  const notes = await Note.find({}).sort({ title: -1 });
  res.status(200).json(notes);
};

// To send required Note
const showOneNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ error: "No such Note exists" });
  }

  const notes = await Note.findById(id);

  if (!notes) {
    return res.status(404).json({ error: "No such Note exists" });
  }

  res.status(200).json(notes);
};

// To create Note

const createNote = async (req, res) => {
  const { title, content, category } = req.body;
  console.log(title);
  try {
    const note = await Note.create({ title, content, category });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: "Note creation failed !\n" + error.message });
  }
  console.log("Successfully Created !");
};

// To update Note

const updateNotes = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    //Check if id is valid or not
    return res.status(404).json({ error: "No such Note exists" });
  }

  const note = await Note.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!note) {
    return res.status(404).json({ error: "No such Note exists" });
  }

  res.status(200).json(note);
  console.log("Successfully Updated !");
};

// To delete Note

const deleteNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ error: "No such Note exists" });
  }

  const note = await Note.findByIdAndDelete({ _id: id });

  if (!note) {
    return res.status(404).json({ error: "No such Note exists" });
  }

  res.status(200).json(note);
  console.log("Successfully Deleted !");
};

module.exports = {
  showAllNotes,
  showOneNote,
  deleteNote,
  updateNotes,
  createNote,
};
