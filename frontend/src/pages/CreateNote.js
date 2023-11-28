import { useState } from "react";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState([]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const notes = { title, content, category };
    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify(notes),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      console.log(error);
    } else {
      setError(null);
      setTitle("");
      setContent("");
      setCategory("");
      console.log("New Note added => \n" + json);
    }
  };
  return (
    <form className="create-form" onSubmit={handleOnSubmit}>
      <h2>Add new Note</h2>

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
          value={content}
          onChange={(e) => setContent(e.target.value)}
          id="content-inp"
        />
      </div>

      <div className="input">
        <label htmlFor="category-inp">Category</label>
        <input
          title={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          id="category-inp"
        />
      </div>

      <button>Create</button>
    </form>
  );
};

export default CreateNote;
