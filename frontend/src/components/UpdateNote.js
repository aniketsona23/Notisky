import { useEffect, useState } from "react";

const UpdateNote = ({ note }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [category, setCategory] = useState(note.category);
  const [error, setError] = useState([]);

  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category);
  }, [note]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const notes = { title, content, category };
    const response = await fetch("/api/" + note._id, {
      method: "PATCH",
      body: JSON.stringify(notes),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      console.log(error);
    }
  };

  return (
    <form className="create-form" onSubmit={handleOnSubmit}>
      <h2>Update Note</h2>

      <div className="input">
        <label htmlFor="title-inp">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title-inp"
        />
      </div>

      <div className="input">
        <label htmlFor="content-inp">Content</label>
        <textarea
          placeholder="Write Something Here...."
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          id="content-inp"
        />
      </div>

      <div className="input">
        <label htmlFor="category-inp">Category</label>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          id="category-inp"
        />
      </div>

      <button>Done</button>
    </form>
  );
};

UpdateNote.defaultProps = {
  note: { title: "", content: "", category: "" },
};

export default UpdateNote;
