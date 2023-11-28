import { useEffect, useState } from "react";

//components
import NotesDetails from "../components/SingleNote";

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
      </div>
    </>
  );
};

export default Home;
