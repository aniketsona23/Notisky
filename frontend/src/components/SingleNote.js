const NotesDetails = ({ note, activateNote }) => {
  const deleteNote = async () => {
    const response = await fetch("/api/" + note._id, {
      method: "DELETE",
    });

    const json = response.json();

    if (!response.ok) {
      console.log("Note not Deleted");
    } else {
      console.log(json.error);
    }
  };

  return (
    <div className="note-container" onClick={() => activateNote(note._id)}>
      <header>
        <h4>{note.title}</h4>
        <span>{note.category}</span>
        <p>
          {new Date(note.updatedAt).getDate()} /{" "}
          {new Date(note.updatedAt).getMonth()} /{" "}
          {new Date(note.updatedAt).getFullYear()}{" "}
          {new Date(note.updatedAt).toTimeString().split(" ")[0]}
        </p>
      </header>
      <footer>
        <button onClick={deleteNote}>Delete</button>
      </footer>
    </div>
  );
};

export default NotesDetails;
