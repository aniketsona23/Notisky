const NotesDetails = ({ note }) => {
  return (
    <div className="note-container">
      <header>
        <h2>{note.title}</h2>
        <p>
          {new Date(note.createdAt).getDate()} /{" "}
          {new Date(note.createdAt).getMonth()} /{" "}
          {new Date(note.createdAt).getFullYear()}{" "}
          {new Date(note.createdAt).toTimeString().split(" ")[0]}
        </p>
      </header>
      <main>
        <p>{note.content}</p>
      </main>
      <footer>
        <button>Delete</button>
        <button>Edit</button>
      </footer>
    </div>
  );
};

export default NotesDetails;
