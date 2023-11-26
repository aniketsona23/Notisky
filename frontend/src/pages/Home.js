import { useEffect, useState } from "react";

//components
import NotesDetails from "../components/NotesDetails";
import CreateNote from "../components/CreateNote";

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api");
      const json = await response.json();

      if (response.ok) {
        console.log(json);
        setNotes(json);
      }
    };

    fetchNotes();
  }, []);

  return (
    <>
      <div className="layout">
        <div className="notes">
          {notes &&
            notes.map((note) => <NotesDetails key={note._id} note={note} />)}
        </div>
        <CreateNote />
      </div>
    </>
  );
};

export default Home;
