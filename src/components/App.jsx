import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import notes from "../notes";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  function onAdd(newNote) {
    setAllNotes(
      (prevNotes) => {
        return [...prevNotes, newNote]
      }
    );
  }

  function deleteNote(id) {
    setAllNotes(
      (prevNotes) => {
        return prevNotes.filter(
          (item, index) => { return index !== id; }
        );
      }
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={onAdd} />
      {/* {notes.map((notes) =>
        <Note
          key={notes.key}
          title={notes.title}
          content={notes.content}
        />
      )} */}
      {allNotes.map(
        (newNote, index) => {
          const { title, content } = newNote;
          return (
            <Note
              key={index}
              id={index}
              title={title}
              content={content}
              deleteNote={deleteNote} />
          );
        }
      )}
      <Footer />
    </div>
  );
}

export default App;