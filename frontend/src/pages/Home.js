import { useEffect, useState } from "react";

//components
import NotesDetails from "../components/SingleNote";
import UpdateNote from "../components/CreateNote";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState({});
  const [search, setSearch] = useState("");

  const activateNote = (id) => {
    setActiveNote(notes.find((e) => e._id === id));
    console.log(activeNote);
  };

  const addNote = async () => {
    const newNote = { title: "Untitled", content: "", category: "" };
    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setNotes([newNote, ...notes]);
      console.log(response.json());
    }
  };
  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/");
      console.log("Hello");
      const json = await response.json();

      if (response.ok) {
        setNotes(json);
      }
    };

    fetchNotes();
  }, []);

  const findNote = () => {
    setNotes(
      notes.filter((note) => {
        return note.title.includes(search) || note.content.includes(search);
      })
    );
  };

  return (
    <>
      <div className="layout">
        <div className="notes">
          <header>
            <h2>Notes</h2>
            <button onClick={addNote}>New</button>
            <input
              type="text"
              value={search}
              placeholder="Search Note"
              onChange={(e) => setSearch(e.target.value)}
              onClick={findNote}
            />
          </header>
          {notes &&
            notes.map((note) => (
              <NotesDetails
                key={note._id}
                note={note}
                activateNote={activateNote}
              />
            ))}
        </div>
        <div className="new-note">
          <UpdateNote note={activeNote} />
        </div>
      </div>
    </>
  );
};

export default Home;
