const NotesDetails = ({ note }) => {
  return (
    <div className="note-container">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
};

export default NotesDetails;
