import React, { useState } from "react";

function CreateArea(props) {
  const [notes, setNotes] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setNotes(
      (prevNotes) => {
        return { ...prevNotes, [name]: value }
      }
    );
  }

  return (
    <div>
      <form onSubmit={event => event.preventDefault()}>
        <input
          onChange={handleChange}
          name="title"
          value={notes.title}
          placeholder="Title" />
        <textarea
          onChange={handleChange}
          name="content"
          value={notes.content}
          placeholder="Take a note..."
          rows="3" />
        <button onClick={
          () => {
            props.onAdd(notes);
            setNotes({ title: "", content: "" });
          }}>Add</button>
      </form>
    </div >
  );
}

export default CreateArea;
